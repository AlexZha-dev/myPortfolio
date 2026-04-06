import { useEffect, useState } from 'react'
import { defaultLocale } from '../../config/locale'
import { getProjectsForLocale } from '../../content/loaders/projects'
import { getSectionContent } from '../../content/loaders/sections'
import { getDictionary } from '../../i18n'
import { parseProjectHash } from '../../shared/lib/project-links'
import type { LocaleCode } from '../../shared/types/locale'
import { ContactsSection } from './ui/ContactsSection'
import { ContentSection } from './ui/ContentSection'
import { HeroSection } from './ui/HeroSection'
import { HomeAtmosphere } from './ui/HomeAtmosphere'
import { HomeTopbar } from './ui/HomeTopbar'
import { ProjectModal } from './ui/ProjectModal'
import { ProjectsSection } from './ui/ProjectsSection'
import { SoftSkillsSection } from './ui/SoftSkillsSection'
import { StackSection } from './ui/StackSection'
import './styles/home-page.css'

function HomePage() {
  const [locale, setLocale] = useState<LocaleCode>(defaultLocale)
  const [activeProjectId, setActiveProjectId] = useState<string | null>(() => {
    if (typeof window === 'undefined') {
      return null
    }

    return parseProjectHash(window.location.hash)
  })

  const dictionary = getDictionary(locale)
  const aboutSection = getSectionContent('about', locale)
  const processSection = getSectionContent('process', locale)
  const growthSection = getSectionContent('growth', locale)
  const projects = getProjectsForLocale(locale)
  const activeProject = activeProjectId
    ? projects.find((project) => project.projectId === activeProjectId) ?? null
    : null

  const closeProject = () => {
    window.history.pushState(null, '', window.location.pathname + window.location.search)
    setActiveProjectId(null)
  }

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

  return (
    <div className="app-shell">
      <HomeAtmosphere />

      <HomeTopbar
        dictionary={dictionary}
        locale={locale}
        onLocaleChange={setLocale}
      />

      <main className="content">
        <HeroSection
          dictionary={dictionary}
          locale={locale}
          projectsCount={projects.length}
        />

        <ContentSection section={aboutSection} />

        <StackSection dictionary={dictionary} locale={locale} />

        <ProjectsSection dictionary={dictionary} projects={projects} />

        <div className="section-grid">
          {[processSection, growthSection].map((section) => (
            <ContentSection key={section.section} section={section} />
          ))}

          <SoftSkillsSection dictionary={dictionary} locale={locale} />

          <ContactsSection dictionary={dictionary} locale={locale} />
        </div>
      </main>

      {activeProject ? (
        <ProjectModal
          dictionary={dictionary}
          project={activeProject}
          onClose={closeProject}
        />
      ) : null}
    </div>
  )
}

export default HomePage
