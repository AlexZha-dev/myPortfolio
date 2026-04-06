import { defaultLocale, enabledLocales } from '../../config/locale'
import type { SectionId } from '../../shared/types/content'
import type { LocaleCode } from '../../shared/types/locale'
import type { LoadedSection } from './types'

const sectionMarkdownModules = import.meta.glob('../pages/*/*.md', {
  query: '?content',
  import: 'default',
  eager: true,
}) as Record<string, LoadedSection>

type SectionMap = Map<SectionId, Map<LocaleCode, LoadedSection>>

const requiredSectionIds: SectionId[] = ['about', 'process', 'growth']

function collectSections() {
  const sections = new Map() as SectionMap

  for (const section of Object.values(sectionMarkdownModules)) {
    const localeMap = sections.get(section.section) ?? new Map()

    if (localeMap.has(section.locale)) {
      throw new Error(
        `Duplicate locale "${section.locale}" for section "${section.section}".`,
      )
    }

    localeMap.set(section.locale, section)
    sections.set(section.section, localeMap)
  }

  for (const sectionId of requiredSectionIds) {
    const localeMap = sections.get(sectionId)

    if (!localeMap?.has(defaultLocale)) {
      throw new Error(`Section "${sectionId}" is missing default locale "${defaultLocale}".`)
    }

    for (const locale of enabledLocales.map((item) => item.code)) {
      const translation = localeMap.get(locale)

      if (!translation) {
        throw new Error(`Section "${sectionId}" is missing active locale "${locale}".`)
      }

      if (translation.translationState === 'in_progress') {
        throw new Error(
          `Active locale section "${sectionId}" for "${locale}" cannot be marked as in progress.`,
        )
      }
    }
  }

  return sections
}

const sectionsById = collectSections()

export function getSectionContent(sectionId: SectionId, locale: LocaleCode) {
  const localeMap = sectionsById.get(sectionId)

  if (!localeMap) {
    throw new Error(`Unknown section "${sectionId}".`)
  }

  const translation = localeMap.get(locale) ?? localeMap.get(defaultLocale)

  if (!translation) {
    throw new Error(`Section "${sectionId}" is missing locale "${locale}".`)
  }

  return translation
}
