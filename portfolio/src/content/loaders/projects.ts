import { defaultLocale, enabledLocales } from '../../config/locale'
import type { TranslationState } from '../../shared/types/content'
import type { LocaleCode } from '../../shared/types/locale'
import type {
  ProjectTranslation,
  ProjectTranslationSummary,
} from './types'

const projectSummaryModules = import.meta.glob('../projects/*/*.md', {
  query: '?summary',
  import: 'default',
  eager: true,
}) as Record<string, ProjectTranslationSummary>

const projectContentModules = import.meta.glob('../projects/*/*.md', {
  query: '?content',
  import: 'default',
}) as Record<string, () => Promise<ProjectTranslation>>

interface ProjectTranslationEntry {
  modulePath: string
  translation: ProjectTranslationSummary
}

export interface LocalizedProject {
  projectId: string
  locale: LocaleCode
  translation: ProjectTranslationSummary
  isFallback: boolean
  translationState: TranslationState
  modulePath: string
}

type ProjectTranslationMap = Map<LocaleCode, ProjectTranslationEntry>

function getProjectSortTimestamp(translation: ProjectTranslationSummary) {
  if (translation.publishedAt) {
    const publishedAtTimestamp = Date.parse(translation.publishedAt)

    if (!Number.isNaN(publishedAtTimestamp)) {
      return publishedAtTimestamp
    }
  }

  if (translation.year) {
    return Date.UTC(translation.year, 0, 1)
  }

  return Number.NEGATIVE_INFINITY
}

function collectProjectTranslations() {
  const projectsById = new Map<string, ProjectTranslationMap>()

  for (const [modulePath, translation] of Object.entries(projectSummaryModules)) {
    const localeMap = projectsById.get(translation.projectId) ?? new Map()

    if (localeMap.has(translation.locale)) {
      throw new Error(
        `Duplicate locale "${translation.locale}" for project "${translation.projectId}".`,
      )
    }

    localeMap.set(translation.locale, {
      modulePath,
      translation,
    })
    projectsById.set(translation.projectId, localeMap)
  }

  for (const [projectId, translations] of projectsById) {
    const defaultTranslation = translations.get(defaultLocale)?.translation

    if (!defaultTranslation) {
      throw new Error(`Project "${projectId}" is missing default locale "${defaultLocale}".`)
    }

    const hasPublishedTranslation = Array.from(translations.values()).some(
      ({ translation }) => translation.status === 'published',
    )

    if (hasPublishedTranslation && defaultTranslation.status !== 'published') {
      throw new Error(
        `Published project "${projectId}" must have a published default locale entry.`,
      )
    }
  }

  return projectsById
}

function buildLocalizedProjects() {
  const projectsById = collectProjectTranslations()
  const localizedProjects: LocalizedProject[] = []

  for (const [projectId, translations] of projectsById) {
    for (const locale of enabledLocales.map((item) => item.code)) {
      const directTranslation = translations.get(locale)
      const defaultTranslation = translations.get(defaultLocale)

      if (!defaultTranslation) {
        throw new Error(`Missing default locale translation for "${projectId}".`)
      }

      const effectiveTranslation =
        directTranslation && directTranslation.translation.status === 'published'
          ? directTranslation
          : defaultTranslation

      if (effectiveTranslation.translation.status !== 'published') {
        continue
      }

      localizedProjects.push({
        projectId,
        locale,
        translation: effectiveTranslation.translation,
        isFallback: effectiveTranslation.translation.locale !== locale,
        translationState:
          directTranslation?.translation.translationState ??
          (effectiveTranslation.translation.locale === locale ? 'ready' : 'in_progress'),
        modulePath: effectiveTranslation.modulePath,
      })
    }
  }

  return localizedProjects.sort((left, right) => {
    const leftTimestamp = getProjectSortTimestamp(left.translation)
    const rightTimestamp = getProjectSortTimestamp(right.translation)

    if (leftTimestamp !== rightTimestamp) {
      return rightTimestamp - leftTimestamp
    }

    if (left.translation.featured !== right.translation.featured) {
      return left.translation.featured ? -1 : 1
    }

    if (left.translation.sortOrder !== right.translation.sortOrder) {
      return left.translation.sortOrder - right.translation.sortOrder
    }

    return left.translation.title.localeCompare(right.translation.title)
  })
}

const localizedProjects = buildLocalizedProjects()
const projectContentCache = new Map<string, Promise<ProjectTranslation>>()

export function getProjectsForLocale(locale: LocaleCode) {
  return localizedProjects.filter((project) => project.locale === locale)
}

export function loadProjectTranslation(project: LocalizedProject) {
  const cachedTranslation = projectContentCache.get(project.modulePath)

  if (cachedTranslation) {
    return cachedTranslation
  }

  const loader = projectContentModules[project.modulePath]

  if (!loader) {
    return Promise.reject(
      new Error(`Project content loader not found for "${project.translation.sourcePath}".`),
    )
  }

  const translationPromise = loader().catch((error: unknown) => {
    projectContentCache.delete(project.modulePath)
    throw error
  })

  projectContentCache.set(project.modulePath, translationPromise)

  return translationPromise
}
