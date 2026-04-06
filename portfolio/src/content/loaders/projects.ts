import { defaultLocale, enabledLocales } from '../../config/locale'
import type { TranslationState } from '../../shared/types/content'
import type { LocaleCode } from '../../shared/types/locale'
import type { ProjectTranslation } from './types'

const projectMarkdownModules = import.meta.glob('../projects/*/*.md', {
  query: '?content',
  import: 'default',
  eager: true,
}) as Record<string, ProjectTranslation>

export interface LocalizedProject {
  projectId: string
  locale: LocaleCode
  translation: ProjectTranslation
  isFallback: boolean
  translationState: TranslationState
}

type ProjectTranslationMap = Map<LocaleCode, ProjectTranslation>

function getProjectSortTimestamp(translation: ProjectTranslation) {
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

  for (const translation of Object.values(projectMarkdownModules)) {
    const localeMap = projectsById.get(translation.projectId) ?? new Map()

    if (localeMap.has(translation.locale)) {
      throw new Error(
        `Duplicate locale "${translation.locale}" for project "${translation.projectId}".`,
      )
    }

    localeMap.set(translation.locale, translation)
    projectsById.set(translation.projectId, localeMap)
  }

  for (const [projectId, translations] of projectsById) {
    const defaultTranslation = translations.get(defaultLocale)

    if (!defaultTranslation) {
      throw new Error(`Project "${projectId}" is missing default locale "${defaultLocale}".`)
    }

    const hasPublishedTranslation = Array.from(translations.values()).some(
      (translation) => translation.status === 'published',
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
        directTranslation && directTranslation.status === 'published'
          ? directTranslation
          : defaultTranslation

      if (effectiveTranslation.status !== 'published') {
        continue
      }

      localizedProjects.push({
        projectId,
        locale,
        translation: effectiveTranslation,
        isFallback: effectiveTranslation.locale !== locale,
        translationState:
          directTranslation?.translationState ??
          (effectiveTranslation.locale === locale ? 'ready' : 'in_progress'),
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

export function getProjectsForLocale(locale: LocaleCode) {
  return localizedProjects.filter((project) => project.locale === locale)
}
