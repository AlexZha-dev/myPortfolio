import type { HeroConfig } from '../shared/types/config'

export const heroConfig: HeroConfig = {
  name: 'Alex Zha',
  role: {
    ru: 'Backend Python Engineer',
    en: 'Backend Python Engineer',
    fi: 'Backend Python Engineer',
    uk: 'Backend Python Engineer',
  },
  description: {
    ru: 'Проектирую и развиваю backend-системы на Python: API, интеграции, работу с данными и production-поставку сервисов, которые должны быть предсказуемыми, расширяемыми и удобными в сопровождении.',
    en: 'I design and evolve Python backend systems: APIs, integrations, data workflows, and production delivery for services that need to stay predictable, extensible, and maintainable.',
    fi: 'Suunnittelen ja kehitän Python-backendeja: API-rajapintoja, integraatioita, datakerrosta ja production-toimitusta palveluille, joiden on pysyttava ennustettavina, laajennettavina ja helposti yllapidettavina.',
    uk: 'Проєктую і розвиваю backend-системи на Python: API, інтеграції, роботу з даними та production-постачання сервісів, які мають залишатися передбачуваними, розширюваними й зручними в супроводі.',
  },
  ctas: [
    {
      id: 'projects',
      href: '#projects',
      label: {
        ru: 'Разобрать кейсы',
        en: 'View case studies',
        fi: 'Katso caset',
        uk: 'Розібрати кейси',
      },
      variant: 'primary',
    },
    {
      id: 'github',
      href: 'https://github.com/AlexZha-dev',
      label: {
        ru: 'Открыть GitHub',
        en: 'Open GitHub',
        fi: 'Avaa GitHub',
        uk: 'Відкрити GitHub',
      },
      variant: 'secondary',
      external: true,
    },
  ],
}
