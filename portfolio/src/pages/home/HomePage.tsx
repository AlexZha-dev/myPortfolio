import { useEffect, useState } from 'react'
import { defaultLocale } from '../../config/locale'
import {
  getProjectsForLocale,
  loadProjectTranslation,
} from '../../content/loaders/projects'
import { getSectionContent } from '../../content/loaders/sections'
import type { ProjectTranslation } from '../../content/loaders/types'
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

const mobilePerformanceQuery = '(max-width: 900px), (hover: none) and (pointer: coarse)'

function getShouldRenderAtmosphere() {
  if (typeof window === 'undefined') {
    return true
  }

  return !window.matchMedia(mobilePerformanceQuery).matches
}

function HomePage() {
  const [locale, setLocale] = useState<LocaleCode>(defaultLocale)
  const [shouldRenderAtmosphere, setShouldRenderAtmosphere] = useState(
    getShouldRenderAtmosphere,
  )
  const [activeProjectId, setActiveProjectId] = useState<string | null>(() => {
    if (typeof window === 'undefined') {
      return null
    }

    return parseProjectHash(window.location.hash)
  })
  const [activeProjectTranslation, setActiveProjectTranslation] =
    useState<ProjectTranslation | null>(null)
  const [activeProjectLoadState, setActiveProjectLoadState] = useState<
    'idle' | 'loading' | 'ready' | 'error'
  >('idle')

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
    const mediaQuery = window.matchMedia(mobilePerformanceQuery)
    const legacyMediaQuery = mediaQuery as MediaQueryList & {
      addListener?: (listener: () => void) => void
      removeListener?: (listener: () => void) => void
    }
    const syncAtmosphere = () => {
      setShouldRenderAtmosphere(!mediaQuery.matches)
    }

    syncAtmosphere()

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', syncAtmosphere)

      return () => {
        mediaQuery.removeEventListener('change', syncAtmosphere)
      }
    }

    legacyMediaQuery.addListener?.(syncAtmosphere)

    return () => {
      legacyMediaQuery.removeListener?.(syncAtmosphere)
    }
  }, [])

  useEffect(() => {
    if (!activeProject) {
      setActiveProjectTranslation(null)
      setActiveProjectLoadState('idle')
      return
    }

    let isCancelled = false

    setActiveProjectLoadState('loading')
    setActiveProjectTranslation(null)

    void loadProjectTranslation(activeProject)
      .then((translation) => {
        if (isCancelled) {
          return
        }

        setActiveProjectTranslation(translation)
        setActiveProjectLoadState('ready')
      })
      .catch(() => {
        if (isCancelled) {
          return
        }

        setActiveProjectLoadState('error')
      })

    return () => {
      isCancelled = true
    }
  }, [activeProject])

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
    <div className={`app-shell${shouldRenderAtmosphere ? '' : ' app-shell--static'}`}>
      {shouldRenderAtmosphere ? <HomeAtmosphere /> : null}

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
          projectTranslation={activeProjectTranslation}
          loadState={activeProjectLoadState}
          onClose={closeProject}
        />
      ) : null}
    </div>
  )
}

export default HomePage
