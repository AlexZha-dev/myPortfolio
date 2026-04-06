import { buildProjectHash } from '../../../shared/lib/project-links'
import type { UiDictionary } from '../../../i18n/types'
import type { LocalizedProject } from '../../../content/loaders/projects'

interface ProjectsSectionProps {
  dictionary: UiDictionary
  projects: LocalizedProject[]
}

export function ProjectsSection({ dictionary, projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="panel glow-surface" aria-labelledby="projects-title">
      <h2 id="projects-title">{dictionary.navigation.projects}</h2>
      <p>{dictionary.sections.projectsLead}</p>

      <div className="projects-grid">
        {projects.map((project) => {
          const projectHash = buildProjectHash(project.projectId)
          const showTranslationBadge =
            project.isFallback || project.translationState === 'in_progress'

          return (
            <article
              key={`${project.locale}-${project.projectId}`}
              className="project-card glow-surface"
            >
              <img
                className="project-card__cover"
                src={project.translation.coverUrl}
                alt={project.translation.coverAlt}
                loading="lazy"
                decoding="async"
              />

              <div className="project-card__header">
                <div>
                  <h3>{project.translation.title}</h3>
                  <p className="project-card__summary">{project.translation.summary}</p>
                </div>
                <span className="project-card__year">{project.translation.year}</span>
              </div>

              <div className="tag-list">
                {project.translation.stack.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
                {showTranslationBadge ? (
                  <span className="tag tag--warning">
                    {dictionary.badges.translationInProgress}
                  </span>
                ) : null}
              </div>

              <div className="project-card__footer">
                <a className="project-card__open glow-button" href={projectHash}>
                  {dictionary.actions.viewCase}
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
