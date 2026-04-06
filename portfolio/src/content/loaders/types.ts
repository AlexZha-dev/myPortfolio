import type { GalleryAsset, ProjectFrontmatter, SectionFrontmatter } from '../../shared/types/content'

export interface GalleryAssetWithUrl extends GalleryAsset {
  url: string
}

export interface ProjectTranslation extends ProjectFrontmatter {
  body: string
  sourcePath: string
  coverUrl: string
  gallery: GalleryAssetWithUrl[]
}

export interface LoadedSection extends SectionFrontmatter {
  body: string
  sourcePath: string
}
