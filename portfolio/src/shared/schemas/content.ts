import { z } from 'zod'

const localeCodeSchema = z.enum(['ru', 'en', 'fi'])

export const translationStateSchema = z.enum(['ready', 'in_progress'])
export const projectStatusSchema = z.enum(['draft', 'published', 'archived'])
export const sectionIdSchema = z.enum(['about', 'process', 'growth'])

export const galleryAssetSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  caption: z.string().min(1).optional(),
})

export const projectFrontmatterSchema = z.object({
  title: z.string().min(1),
  projectId: z.string().min(1),
  locale: localeCodeSchema,
  summary: z.string().min(1),
  stack: z.array(z.string().min(1)).min(1),
  featured: z.boolean(),
  sortOrder: z.number().int().nonnegative(),
  status: projectStatusSchema,
  translationState: translationStateSchema,
  cover: z.string().min(1),
  coverAlt: z.string().min(1),
  repoUrl: z.url().optional(),
  demoUrl: z.url().optional(),
  tags: z.array(z.string().min(1)).optional(),
  publishedAt: z.string().min(1).optional(),
  year: z.number().int().optional(),
  seoDescription: z.string().min(1).optional(),
  gallery: z.array(galleryAssetSchema).optional(),
})

export const sectionFrontmatterSchema = z.object({
  section: sectionIdSchema,
  locale: localeCodeSchema,
  title: z.string().min(1),
  translationState: translationStateSchema,
  lead: z.string().min(1).optional(),
  seoDescription: z.string().min(1).optional(),
  order: z.number().int().optional(),
})

export type ProjectFrontmatterInput = z.infer<typeof projectFrontmatterSchema>
export type SectionFrontmatterInput = z.infer<typeof sectionFrontmatterSchema>
