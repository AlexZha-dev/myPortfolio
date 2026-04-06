import { defaultLocale } from '../../../config/locale'
import { stackConfig } from '../../../config/stack'
import type { UiDictionary } from '../../../i18n/types'
import { resolveLocalizedText } from '../../../shared/lib/locale'
import type { LocaleCode } from '../../../shared/types/locale'

interface StackSectionProps {
  dictionary: UiDictionary
  locale: LocaleCode
}

export function StackSection({ dictionary, locale }: StackSectionProps) {
  return (
    <section id="stack" className="panel glow-surface" aria-labelledby="stack-title">
      <h2 id="stack-title">{dictionary.navigation.stack}</h2>
      <p>{dictionary.sections.stackLead}</p>

      <div className="stack-grid">
        {stackConfig.map((group) => (
          <article key={group.id} className="stack-card glow-surface">
            <h3>{resolveLocalizedText(group.title, locale, defaultLocale)}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  {item.note ? (
                    <small>{resolveLocalizedText(item.note, locale, defaultLocale)}</small>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
