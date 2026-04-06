import type { LocaleCode } from '../shared/types/locale'
import { en } from './en'
import { fi } from './fi'
import { ru } from './ru'
import type { UiDictionary } from './types'

export const dictionaries: Record<LocaleCode, UiDictionary> = {
  ru,
  en,
  fi,
}

export function getDictionary(locale: LocaleCode) {
  return dictionaries[locale] ?? dictionaries.ru
}
