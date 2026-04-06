import { useEffect, useState } from 'react'
import { contactsConfig } from '../config/contacts'
import { heroConfig } from '../config/hero'
import { defaultLocale, enabledLocales } from '../config/locale'
import { stackConfig } from '../config/stack'
import { getProjectsForLocale } from '../content/loaders/projects'
import { getSectionContent } from '../content/loaders/sections'
import { getDictionary } from '../i18n'
import { resolveLocalizedText } from '../shared/lib/locale'
import { buildProjectHash, parseProjectHash } from '../shared/lib/project-links'
import type { LocaleCode } from '../shared/types/locale'
import { MarkdownContent } from '../shared/ui/MarkdownContent'
import './app.css'

function App() {
  const [locale, setLocale] = useState<LocaleCode>(defaultLocale)
  const [activeProjectId, setActiveProjectId] = useState<string | null>(() => {
    if (typeof window === 'undefined') {
      return null
    }

    return parseProjectHash(window.location.hash)
  })

  const dictionary = getDictionary(locale)

  const heroRole = resolveLocalizedText(heroConfig.role, locale, defaultLocale)
  const heroDescription = resolveLocalizedText(
    heroConfig.description,
    locale,
    defaultLocale,
  )
  const aboutSection = getSectionContent('about', locale)
  const processSection = getSectionContent('process', locale)
  const growthSection = getSectionContent('growth', locale)
  const projects = getProjectsForLocale(locale)
  const activeProject = activeProjectId
    ? projects.find((project) => project.projectId === activeProjectId) ?? null
    : null

  useEffect(() => {
    const syncHash = () => {
      setActiveProjectId(parseProjectHash(window.location.hash))
    }

    syncHash()
    window.addEventListener('hashchange', syncHash)

    return () => {
      window.removeEventListener('hashchange', syncHash)
    }
  }, [])

  useEffect(() => {
    if (!activeProject) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeProject()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [activeProject])

  const closeProject = () => {
    window.history.pushState(null, '', window.location.pathname + window.location.search)
    setActiveProjectId(null)
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="topbar__eyebrow">{dictionary.siteTitle}</p>
          <h1 className="topbar__title">{dictionary.siteSubtitle}</h1>
        </div>

        <div className="topbar__controls">
          <div className="locale-switcher" aria-label={dictionary.localeSwitcherLabel}>
            {enabledLocales.map((item) => (
              <button
                key={item.code}
                className={`locale-switcher__button${item.code === locale ? ' is-active' : ''}`}
                type="button"
                onClick={() => setLocale(item.code)}
              >
                {item.code.toUpperCase()}
              </button>
            ))}
          </div>

          <nav className="section-nav" aria-label={dictionary.siteTitle}>
            <a href="#hero">{dictionary.navigation.hero}</a>
            <a href="#about">{dictionary.navigation.about}</a>
            <a href="#stack">{dictionary.navigation.stack}</a>
            <a href="#projects">{dictionary.navigation.projects}</a>
            <a href="#process">{dictionary.navigation.process}</a>
            <a href="#growth">{dictionary.navigation.growth}</a>
            <a href="#contacts">{dictionary.navigation.contacts}</a>
          </nav>
        </div>
      </header>

      <main className="content">
        <section id="hero" className="panel hero-panel" aria-labelledby="hero-title">
          <p className="hero-panel__eyebrow">{dictionary.hero.eyebrow}</p>
          <h2 id="hero-title" className="hero-panel__title">
            {heroConfig.name}
          </h2>
          <p className="hero-panel__role">{heroRole}</p>
          <p className="hero-panel__description">{heroDescription}</p>

          <div className="hero-panel__actions">
            {heroConfig.ctas.map((cta) => (
              <a
                key={cta.id}
                className={`action-button action-button--${cta.variant}`}
                href={cta.href}
                target={cta.external ? '_blank' : undefined}
                rel={cta.external ? 'noreferrer' : undefined}
              >
                {resolveLocalizedText(cta.label, locale, defaultLocale)}
              </a>
            ))}
          </div>

          <div className="status-grid">
            <article className="status-card">
              <h3>{dictionary.hero.availableNowTitle}</h3>
              <div className="tag-list">
                {enabledLocales.map((item) => (
                  <span key={item.code} className="tag">
                    {item.code.toUpperCase()} · {item.nativeLabel}
                  </span>
                ))}
              </div>
              <p className="status-card__note">{dictionary.hero.availableNowText}</p>
            </article>

            <article className="status-card">
              <h3>{dictionary.hero.selectedWorkTitle}</h3>
              <p className="status-card__count">{projects.length}</p>
              <p className="status-card__note">{dictionary.hero.selectedWorkText}</p>
            </article>

            <article className="status-card">
              <h3>{dictionary.hero.nextLocaleTitle}</h3>
              <p className="status-card__note">{dictionary.hero.nextLocaleText}</p>
            </article>
          </div>
        </section>

        <section id="about" className="panel" aria-labelledby="about-title">
          <h2 id="about-title">{aboutSection.title}</h2>
          {aboutSection.lead ? <p>{aboutSection.lead}</p> : null}
          <MarkdownContent>{aboutSection.body}</MarkdownContent>
        </section>

        <section id="stack" className="panel" aria-labelledby="stack-title">
          <h2 id="stack-title">{dictionary.navigation.stack}</h2>
          <p>{dictionary.sections.stackLead}</p>

          <div className="stack-grid">
            {stackConfig.map((group) => (
              <article key={group.id} className="stack-card">
                <h3>{resolveLocalizedText(group.title, locale, defaultLocale)}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      {item.note ? (
                        <small>
                          {resolveLocalizedText(item.note, locale, defaultLocale)}
                        </small>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="panel" aria-labelledby="projects-title">
          <h2 id="projects-title">{dictionary.navigation.projects}</h2>
          <p>{dictionary.sections.projectsLead}</p>

          <div className="projects-grid">
            {projects.map((project) => {
              const projectHash = buildProjectHash(project.projectId)
              const showTranslationBadge =
                project.isFallback || project.translationState === 'in_progress'

              return (
                <article key={`${project.locale}-${project.projectId}`} className="project-card">
                  <img
                    className="project-card__cover"
                    src={project.translation.coverUrl}
                    alt={project.translation.coverAlt}
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
                    <a className="project-card__open" href={projectHash}>
                      {dictionary.actions.viewCase}
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <div className="section-grid">
          {[processSection, growthSection].map((section) => (
            <section
              key={section.section}
              id={section.section}
              className="panel"
              aria-labelledby={`${section.section}-title`}
            >
              <h2 id={`${section.section}-title`}>{section.title}</h2>
              {section.lead ? <p>{section.lead}</p> : null}
              <MarkdownContent>{section.body}</MarkdownContent>
            </section>
          ))}

          <section id="contacts" className="panel" aria-labelledby="contacts-title">
            <h2 id="contacts-title">{dictionary.navigation.contacts}</h2>
            <p>{dictionary.sections.contactsLead}</p>

            <ul className="contacts-list">
              {contactsConfig.map((contact) => (
                <li key={contact.id}>
                  <a href={contact.href} target="_blank" rel="noreferrer">
                    {resolveLocalizedText(contact.label, locale, defaultLocale)}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      {activeProject ? (
        <div
          className="project-modal"
          role="presentation"
          onClick={closeProject}
        >
          <div
            className="project-modal__surface"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal__close"
              onClick={closeProject}
            >
              {dictionary.actions.close}
            </button>

            <img
              className="project-modal__cover"
              src={activeProject.translation.coverUrl}
              alt={activeProject.translation.coverAlt}
            />

            <div className="project-modal__header">
              <div>
                <p className="project-modal__eyebrow">{dictionary.navigation.projects}</p>
                <h2 id="project-modal-title">{activeProject.translation.title}</h2>
                <p className="project-modal__summary">
                  {activeProject.translation.summary}
                </p>
              </div>
              <span className="project-modal__year">{activeProject.translation.year}</span>
            </div>

            <div className="tag-list">
              {activeProject.translation.stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
              {activeProject.isFallback ||
              activeProject.translationState === 'in_progress' ? (
                <span className="tag tag--warning">
                  {dictionary.badges.translationInProgress}
                </span>
              ) : null}
            </div>

            <div className="project-card__actions">
              {activeProject.translation.repoUrl ? (
                <a
                  href={activeProject.translation.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              ) : null}
              {activeProject.translation.demoUrl ? (
                <a
                  href={activeProject.translation.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              ) : null}
            </div>

            <MarkdownContent>{activeProject.translation.body}</MarkdownContent>

            {activeProject.translation.gallery.length > 0 ? (
              <div className="project-gallery">
                {activeProject.translation.gallery.map((asset) => (
                  <figure key={asset.src} className="project-gallery__item">
                    <img src={asset.url} alt={asset.alt} />
                    {asset.caption ? <figcaption>{asset.caption}</figcaption> : null}
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
