import type { LocalizedText } from './locale'

export interface HeroAction {
  id: string
  href: string
  label: LocalizedText
  variant: 'primary' | 'secondary'
  external?: boolean
}

export interface HeroConfig {
  name: string
  role: LocalizedText
  description: LocalizedText
  ctas: HeroAction[]
}

export interface StackItem {
  name: string
  level?: 'primary' | 'secondary' | 'learning'
  note?: LocalizedText
}

export interface StackGroup {
  id: string
  title: LocalizedText
  items: StackItem[]
}

export interface ContactItem {
  id: string
  label: LocalizedText
  href: string
  type: 'github' | 'telegram' | 'email' | 'resume' | 'other'
  icon?: string
}

export interface SoftSkillItem {
  id: string
  title: LocalizedText
  summary: LocalizedText
  details: LocalizedText
}
