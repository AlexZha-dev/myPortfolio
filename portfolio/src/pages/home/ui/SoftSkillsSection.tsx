import { defaultLocale } from '../../../config/locale'
import { softSkillsConfig } from '../../../config/soft-skills'
import type { UiDictionary } from '../../../i18n/types'
import { resolveLocalizedText } from '../../../shared/lib/locale'
import type { LocaleCode } from '../../../shared/types/locale'

interface SoftSkillsSectionProps {
  dictionary: UiDictionary
  locale: LocaleCode
}

export function SoftSkillsSection({ dictionary, locale }: SoftSkillsSectionProps) {
  return (
    <section className="panel glow-surface" aria-labelledby="soft-skills-title">
      <h2 id="soft-skills-title">{dictionary.sections.softSkillsTitle}</h2>
      <p>{dictionary.sections.softSkillsLead}</p>

      <ul className="soft-skills-list">
        {softSkillsConfig.map((skill) => (
          <li key={skill.id}>
            <details className="soft-skill">
              <summary className="soft-skill__summary">
                <span className="soft-skill__heading">
                  <strong>{resolveLocalizedText(skill.title, locale, defaultLocale)}</strong>
                  <span>{resolveLocalizedText(skill.summary, locale, defaultLocale)}</span>
                </span>

                <span className="soft-skill__indicator" aria-hidden="true">
                  +
                </span>
              </summary>

              <p className="soft-skill__details">
                {resolveLocalizedText(skill.details, locale, defaultLocale)}
              </p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  )
}
