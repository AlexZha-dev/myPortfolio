import { Suspense, lazy } from 'react'

interface MarkdownContentProps {
  children: string
}

const MarkdownRenderer = lazy(() => import('./MarkdownRenderer'))

export function MarkdownContent({ children }: MarkdownContentProps) {
  return (
    <div className="markdown-content">
      <Suspense
        fallback={
          <div className="markdown-content__loading" aria-hidden="true">
            <span className="markdown-content__loading-line" />
            <span className="markdown-content__loading-line" />
            <span className="markdown-content__loading-line markdown-content__loading-line--short" />
          </div>
        }
      >
        <MarkdownRenderer content={children} />
      </Suspense>
    </div>
  )
}
