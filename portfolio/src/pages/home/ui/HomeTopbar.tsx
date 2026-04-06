import { enabledLocales } from '../../../config/locale'
import type { UiDictionary } from '../../../i18n/types'
import type { LocaleCode } from '../../../shared/types/locale'

interface HomeTopbarProps {
  dictionary: UiDictionary
  locale: LocaleCode
  onLocaleChange: (locale: LocaleCode) => void
}

const navigationItems: Array<keyof UiDictionary['navigation']> = [
  'hero',
  'about',
  'stack',
  'projects',
  'process',
  'growth',
  'contacts',
]

export function HomeTopbar({
  dictionary,
  locale,
  onLocaleChange,
}: HomeTopbarProps) {
  return (
    <header className="topbar">
      <div>
        <p className="topbar__eyebrow">{dictionary.siteTitle}</p>
        <h1 className="topbar__title">{dictionary.siteSubtitle}</h1>
      </div>

      <div className="topbar__controls">
        <div className="locale-switcher glow-surface" aria-label={dictionary.localeSwitcherLabel}>
          {enabledLocales.map((item) => (
            <button
              key={item.code}
              className={`locale-switcher__button glow-button${item.code === locale ? ' is-active' : ''}`}
              type="button"
              onClick={() => onLocaleChange(item.code)}
            >
              {item.code.toUpperCase()}
            </button>
          ))}
        </div>

        <nav className="section-nav" aria-label={dictionary.siteTitle}>
          {navigationItems.map((item) => (
            <a key={item} className="section-nav__link glow-button" href={`#${item}`}>
              {dictionary.navigation[item]}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
