import type { LocaleCode, LocalizedText } from '../types/locale'

export function resolveLocalizedText(
  value: LocalizedText,
  locale: LocaleCode,
  fallbackLocale: LocaleCode,
) {
  return value[locale] ?? value[fallbackLocale] ?? Object.values(value)[0] ?? ''
}
