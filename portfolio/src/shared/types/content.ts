import type { LocaleCode } from './locale'

export type ProjectStatus = 'draft' | 'published' | 'archived'
export type TranslationState = 'ready' | 'in_progress'
export type SectionId = 'about' | 'process' | 'growth'

export interface GalleryAsset {
  src: string
  alt: string
  caption?: string
}

export interface ProjectFrontmatter {
  title: string
  projectId: string
  locale: LocaleCode
  summary: string
  stack: string[]
  featured: boolean
  sortOrder: number
  status: ProjectStatus
  translationState: TranslationState
  cover: string
  coverAlt: string
  repoUrl?: string
  demoUrl?: string
  tags?: string[]
  publishedAt?: string
  year?: number
  seoDescription?: string
  gallery?: GalleryAsset[]
}

export interface SectionFrontmatter {
  section: SectionId
  locale: LocaleCode
  title: string
  translationState: TranslationState
  lead?: string
  seoDescription?: string
  order?: number
}
