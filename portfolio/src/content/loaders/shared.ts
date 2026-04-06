import matter from 'gray-matter'
import type { ZodSchema } from 'zod'

export function parseMarkdownModule<T>(
  sourcePath: string,
  rawContent: string,
  schema: ZodSchema<T>,
) {
  const parsed = matter(rawContent)
  const result = schema.safeParse(parsed.data)

  if (!result.success) {
    throw new Error(
      `Invalid frontmatter in ${sourcePath}\n${result.error.issues
        .map((issue) => `- ${issue.path.join('.')}: ${issue.message}`)
        .join('\n')}`,
    )
  }

  return {
    frontmatter: result.data,
    body: parsed.content.trim(),
  }
}

export function resolveRelativeContentPath(fromFilePath: string, relativePath: string) {
  const fromSegments = fromFilePath.split('/').slice(0, -1)
  const targetSegments = relativePath.split('/')

  for (const segment of targetSegments) {
    if (!segment || segment === '.') {
      continue
    }

    if (segment === '..') {
      fromSegments.pop()
      continue
    }

    fromSegments.push(segment)
  }

  return fromSegments.join('/')
}

export function formatPathForError(sourcePath: string) {
  return sourcePath.replace(/^\.\.\//, 'src/content/')
}
