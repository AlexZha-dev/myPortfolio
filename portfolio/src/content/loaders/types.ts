import type { GalleryAsset, ProjectFrontmatter, SectionFrontmatter } from '../../shared/types/content'

export interface GalleryAssetWithUrl extends GalleryAsset {
  url: string
}

export interface ProjectTranslationSummary extends ProjectFrontmatter {
  sourcePath: string
  coverUrl: string
}

export interface ProjectTranslation
  extends Omit<ProjectTranslationSummary, 'gallery'> {
  body: string
  gallery: GalleryAssetWithUrl[]
}

export interface LoadedSection extends SectionFrontmatter {
  body: string
  sourcePath: string
}
