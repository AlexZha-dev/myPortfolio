import type { LocaleCode, LocaleDefinition } from '../shared/types/locale'

export const localeRegistry = [
  {
    code: 'ru',
    label: 'Russian',
    nativeLabel: 'Русский',
    status: 'active',
    isDefault: true,
    isEnabled: true,
  },
  {
    code: 'en',
    label: 'English',
    nativeLabel: 'English',
    status: 'active',
    isDefault: false,
    isEnabled: true,
  },
  {
    code: 'fi',
    label: 'Finnish',
    nativeLabel: 'Suomi',
    status: 'active',
    isDefault: false,
    isEnabled: true,
  },
] satisfies LocaleDefinition[]

export const defaultLocale: LocaleCode = 'ru'

export const enabledLocales = localeRegistry.filter((locale) => locale.isEnabled)
export const plannedLocales: LocaleDefinition[] = []

export function isLocaleEnabled(localeCode: LocaleCode) {
  return localeRegistry.some(
    (locale) => locale.code === localeCode && locale.isEnabled,
  )
}
