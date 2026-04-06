import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import { defaultLocale } from './src/config/locale'
import {
  projectFrontmatterSchema,
  sectionFrontmatterSchema,
} from './src/shared/schemas/content'

function contentSourcePath(root: string, filePath: string) {
  return path.relative(root, filePath).replaceAll('\\', '/')
}

function buildValidationMessage(filePath: string, issues: string[]) {
  return `Invalid frontmatter in ${filePath}\n${issues.join('\n')}`
}

function markdownContentPlugin(): Plugin {
  let root = ''
  const contentQuery = '?content'
  const summaryQuery = '?summary'

  return {
    name: 'portfolio-markdown-loader',
    enforce: 'pre',
    configResolved(config) {
      root = config.root
    },
    load(id) {
      const querySuffix = id.endsWith(contentQuery)
        ? contentQuery
        : id.endsWith(summaryQuery)
          ? summaryQuery
          : null

      if (!querySuffix) {
        return null
      }

      const filePath = id.slice(0, -querySuffix.length)
      const rawContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(rawContent)
      const normalizedFilePath = filePath.replaceAll('\\', '/')
      const sourcePath = contentSourcePath(root, filePath)
      const isSummaryRequest = querySuffix === summaryQuery

      const isProjectMarkdown = normalizedFilePath.includes('/src/content/projects/')
      const isSectionMarkdown = normalizedFilePath.includes('/src/content/pages/')

      if (!isProjectMarkdown && !isSectionMarkdown) {
        return null
      }

      if (isProjectMarkdown) {
        const result = projectFrontmatterSchema.safeParse(data)

        if (!result.success) {
          throw new Error(
            buildValidationMessage(
              sourcePath,
              result.error.issues.map(
                (issue) => `- ${issue.path.join('.')}: ${issue.message}`,
              ),
            ),
          )
        }

        if (
          result.data.locale === defaultLocale &&
          result.data.translationState === 'in_progress'
        ) {
          throw new Error(
            `Default locale project cannot be marked as in progress: ${sourcePath}`,
          )
        }

        const projectFolderName = normalizedFilePath.split('/').at(-2)

        if (result.data.projectId !== projectFolderName) {
          throw new Error(
            `projectId mismatch in ${sourcePath}. Expected "${projectFolderName}", received "${result.data.projectId}".`,
          )
        }

        const gallery = result.data.gallery ?? []
        const galleryImports = gallery
          .map((item, index) => `import __gallery_${index} from ${JSON.stringify(item.src)};`)
          .join('\n')
        const galleryItems = gallery
          .map(
            (item, index) =>
              `{ ...${JSON.stringify(item)}, url: __gallery_${index} }`,
          )
          .join(',\n')

        if (isSummaryRequest) {
          return `
import __cover from ${JSON.stringify(result.data.cover)};

const frontmatter = ${JSON.stringify(result.data)};
const sourcePath = ${JSON.stringify(sourcePath)};

export default {
  ...frontmatter,
  sourcePath,
  coverUrl: __cover,
};
`
        }

        return `
import __cover from ${JSON.stringify(result.data.cover)};
${galleryImports}

const frontmatter = ${JSON.stringify(result.data)};
const body = ${JSON.stringify(content.trim())};
const sourcePath = ${JSON.stringify(sourcePath)};
const gallery = [${galleryItems}];

export default {
  ...frontmatter,
  body,
  sourcePath,
  coverUrl: __cover,
  gallery,
};
`
      }

      const result = sectionFrontmatterSchema.safeParse(data)

      if (!result.success) {
        throw new Error(
          buildValidationMessage(
            sourcePath,
            result.error.issues.map(
              (issue) => `- ${issue.path.join('.')}: ${issue.message}`,
            ),
          ),
        )
      }

      if (
        result.data.locale === defaultLocale &&
        result.data.translationState === 'in_progress'
      ) {
        throw new Error(
          `Default locale section cannot be marked as in progress: ${sourcePath}`,
        )
      }

      const sectionFolderName = normalizedFilePath.split('/').at(-2)

      if (result.data.section !== sectionFolderName) {
        throw new Error(
          `section mismatch in ${sourcePath}. Expected "${sectionFolderName}", received "${result.data.section}".`,
        )
      }

      if (isSummaryRequest) {
        throw new Error(`Section summary requests are not supported: ${sourcePath}`)
      }

      return `
const frontmatter = ${JSON.stringify(result.data)};
const body = ${JSON.stringify(content.trim())};
const sourcePath = ${JSON.stringify(sourcePath)};

export default {
  ...frontmatter,
  body,
  sourcePath,
};
`
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/myPortfolio/',
  plugins: [markdownContentPlugin(), react()],
})
