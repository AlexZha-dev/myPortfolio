import type { LocalizedProject } from '../../../content/loaders/projects'
import type { UiDictionary } from '../../../i18n/types'
import { MarkdownContent } from '../../../shared/ui/MarkdownContent'

interface ProjectModalProps {
  dictionary: UiDictionary
  project: LocalizedProject
  onClose: () => void
}

export function ProjectModal({
  dictionary,
  project,
  onClose,
}: ProjectModalProps) {
  const hasProjectLinks = Boolean(project.translation.repoUrl || project.translation.demoUrl)

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
          src={project.translation.coverUrl}
          alt={project.translation.coverAlt}
        />

        <div className="project-modal__header">
          <div>
            <p className="project-modal__eyebrow">{dictionary.navigation.projects}</p>
            <h2 id="project-modal-title">{project.translation.title}</h2>
            <p className="project-modal__summary">{project.translation.summary}</p>
          </div>
          <span className="project-modal__year">{project.translation.year}</span>
        </div>

        <div className="tag-list">
          {project.translation.stack.map((item) => (
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
            {project.translation.repoUrl ? (
              <a
                className="glow-button"
                href={project.translation.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            ) : null}
            {project.translation.demoUrl ? (
              <a
                className="glow-button"
                href={project.translation.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            ) : null}
          </div>
        ) : null}

        <MarkdownContent>{project.translation.body}</MarkdownContent>

        {project.translation.gallery.length > 0 ? (
          <div className="project-gallery">
            {project.translation.gallery.map((asset) => (
              <figure key={asset.src} className="project-gallery__item">
                <img src={asset.url} alt={asset.alt} />
                {asset.caption ? <figcaption>{asset.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
