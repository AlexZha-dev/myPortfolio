import type { ContactItem } from '../shared/types/config'

export const contactsConfig: ContactItem[] = [
  {
    id: 'github',
    label: {
      ru: 'GitHub',
      en: 'GitHub',
      fi: 'GitHub',
      uk: 'GitHub',
    },
    href: 'https://github.com/AlexZha-dev',
    type: 'github',
  },
  {
    id: 'telegram',
    label: {
      ru: 'Telegram',
      en: 'Telegram',
      fi: 'Telegram',
      uk: 'Telegram',
    },
    href: 'https://t.me/your_username',
    type: 'telegram',
  },
  {
    id: 'email',
    label: {
      ru: 'Email',
      en: 'Email',
      fi: 'Sahkoposti',
      uk: 'Електронна пошта',
    },
    href: 'mailto:hello@example.com',
    type: 'email',
  },
]
