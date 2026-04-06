import { defaultLocale, enabledLocales } from '../../../config/locale'
import { heroConfig } from '../../../config/hero'
import type { UiDictionary } from '../../../i18n/types'
import { resolveLocalizedText } from '../../../shared/lib/locale'
import type { LocaleCode } from '../../../shared/types/locale'

interface HeroSectionProps {
  dictionary: UiDictionary
  locale: LocaleCode
  projectsCount: number
}

export function HeroSection({
  dictionary,
  locale,
  projectsCount,
}: HeroSectionProps) {
  const heroRole = resolveLocalizedText(heroConfig.role, locale, defaultLocale)
  const heroDescription = resolveLocalizedText(
    heroConfig.description,
    locale,
    defaultLocale,
  )

  return (
    <section id="hero" className="panel glow-surface hero-panel" aria-labelledby="hero-title">
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
            className={`action-button glow-button action-button--${cta.variant}`}
            href={cta.href}
            target={cta.external ? '_blank' : undefined}
            rel={cta.external ? 'noreferrer' : undefined}
          >
            {resolveLocalizedText(cta.label, locale, defaultLocale)}
          </a>
        ))}
      </div>

      <div className="status-grid">
        <article className="status-card glow-surface">
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

        <article className="status-card glow-surface">
          <h3>{dictionary.hero.selectedWorkTitle}</h3>
          <p className="status-card__count">{projectsCount}</p>
          <p className="status-card__note">{dictionary.hero.selectedWorkText}</p>
        </article>

        <article className="status-card glow-surface">
          <h3>{dictionary.hero.nextLocaleTitle}</h3>
          <p className="status-card__note">{dictionary.hero.nextLocaleText}</p>
        </article>
      </div>
    </section>
  )
}
