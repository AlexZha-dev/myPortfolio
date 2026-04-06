import type { LocalizedProject } from '../../../content/loaders/projects'
import type { ProjectTranslation } from '../../../content/loaders/types'
import type { UiDictionary } from '../../../i18n/types'
import { MarkdownContent } from '../../../shared/ui/MarkdownContent'

interface ProjectModalProps {
  dictionary: UiDictionary
  project: LocalizedProject
  projectTranslation: ProjectTranslation | null
  loadState: 'idle' | 'loading' | 'ready' | 'error'
  onClose: () => void
}

export function ProjectModal({
  dictionary,
  project,
  projectTranslation,
  loadState,
  onClose,
}: ProjectModalProps) {
  const hasProjectLinks = Boolean(
    projectTranslation?.repoUrl ?? project.translation.repoUrl ??
    projectTranslation?.demoUrl ?? project.translation.demoUrl,
  )

  return (
    <div className="project-modal" role="presentation" onClick={onClose}>
      <div
        className="project-modal__surface glow-surface"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="project-modal__close glow-button"
          onClick={onClose}
        >
          {dictionary.actions.close}
        </button>

        <img
          className="project-modal__cover"
          src={projectTranslation?.coverUrl ?? project.translation.coverUrl}
          alt={projectTranslation?.coverAlt ?? project.translation.coverAlt}
          decoding="async"
        />

        <div className="project-modal__header">
          <div>
            <p className="project-modal__eyebrow">{dictionary.navigation.projects}</p>
            <h2 id="project-modal-title">
              {projectTranslation?.title ?? project.translation.title}
            </h2>
            <p className="project-modal__summary">
              {projectTranslation?.summary ?? project.translation.summary}
            </p>
          </div>
          <span className="project-modal__year">
            {projectTranslation?.year ?? project.translation.year}
          </span>
        </div>

        <div className="tag-list">
          {(projectTranslation?.stack ?? project.translation.stack).map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
          {project.isFallback || project.translationState === 'in_progress' ? (
            <span className="tag tag--warning">
              {dictionary.badges.translationInProgress}
            </span>
          ) : null}
        </div>

        {hasProjectLinks ? (
          <div className="project-card__actions">
            {(projectTranslation?.repoUrl ?? project.translation.repoUrl) ? (
              <a
                className="glow-button"
                href={projectTranslation?.repoUrl ?? project.translation.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            ) : null}
            {(projectTranslation?.demoUrl ?? project.translation.demoUrl) ? (
              <a
                className="glow-button"
                href={projectTranslation?.demoUrl ?? project.translation.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            ) : null}
          </div>
        ) : null}

        {projectTranslation ? (
          <MarkdownContent>{projectTranslation.body}</MarkdownContent>
        ) : (
          <div
            className="project-modal__loading"
            aria-live="polite"
            aria-busy={loadState === 'loading'}
          >
            <span className="project-modal__loading-line" />
            <span className="project-modal__loading-line" />
            <span className="project-modal__loading-line project-modal__loading-line--short" />
          </div>
        )}

        {projectTranslation && projectTranslation.gallery.length > 0 ? (
          <div className="project-gallery">
            {projectTranslation.gallery.map((asset) => (
              <figure key={asset.src} className="project-gallery__item">
                <img src={asset.url} alt={asset.alt} loading="lazy" decoding="async" />
                {asset.caption ? <figcaption>{asset.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
