import type { LoadedSection } from '../../../content/loaders/types'
import { MarkdownContent } from '../../../shared/ui/MarkdownContent'

interface ContentSectionProps {
  section: LoadedSection
}

export function ContentSection({ section }: ContentSectionProps) {
  return (
    <section
      id={section.section}
      className="panel glow-surface"
      aria-labelledby={`${section.section}-title`}
    >
      <h2 id={`${section.section}-title`}>{section.title}</h2>
      {section.lead ? <p>{section.lead}</p> : null}
      <MarkdownContent>{section.body}</MarkdownContent>
    </section>
  )
}
