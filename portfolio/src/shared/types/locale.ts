export type LocaleCode = 'ru' | 'en' | 'fi' | 'uk'

export type LocaleStatus = 'active' | 'planned'

export type LocalizedText = Partial<Record<LocaleCode, string>>

export interface LocaleDefinition {
  code: LocaleCode
  label: string
  nativeLabel: string
  status: LocaleStatus
  isDefault: boolean
  isEnabled: boolean
}
