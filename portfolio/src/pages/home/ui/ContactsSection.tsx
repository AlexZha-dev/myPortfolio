import { defaultLocale } from '../../../config/locale'
import { contactsConfig } from '../../../config/contacts'
import type { UiDictionary } from '../../../i18n/types'
import { resolveLocalizedText } from '../../../shared/lib/locale'
import type { LocaleCode } from '../../../shared/types/locale'

interface ContactsSectionProps {
  dictionary: UiDictionary
  locale: LocaleCode
}

export function ContactsSection({ dictionary, locale }: ContactsSectionProps) {
  return (
    <section id="contacts" className="panel glow-surface" aria-labelledby="contacts-title">
      <h2 id="contacts-title">{dictionary.navigation.contacts}</h2>
      <p>{dictionary.sections.contactsLead}</p>

      <ul className="contacts-list">
        {contactsConfig.map((contact) => (
          <li key={contact.id}>
            <a
              className="contact-link glow-button"
              href={contact.href}
              target="_blank"
              rel="noreferrer"
            >
              {resolveLocalizedText(contact.label, locale, defaultLocale)}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
