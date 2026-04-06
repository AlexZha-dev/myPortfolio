import type { HeroConfig } from '../shared/types/config'

export const heroConfig: HeroConfig = {
  name: 'Alex Zha',
  role: {
    ru: 'Backend Python Engineer',
    en: 'Backend Python Engineer',
    fi: 'Backend Python Engineer',
  },
  description: {
    ru: 'Проектирую и развиваю backend-системы на Python: API, интеграции, работу с данными и production-поставку сервисов, которые должны быть предсказуемыми, расширяемыми и удобными в сопровождении.',
    en: 'I design and evolve Python backend systems: APIs, integrations, data workflows, and production delivery for services that need to stay predictable, extensible, and maintainable.',
    fi: 'Suunnittelen ja kehitän Python-backendeja: API-rajapintoja, integraatioita, datakerrosta ja production-toimitusta palveluille, joiden on pysyttava ennustettavina, laajennettavina ja helposti yllapidettavina.',
  },
  ctas: [
    {
      id: 'projects',
      href: '#projects',
      label: {
        ru: 'Разобрать кейсы',
        en: 'View case studies',
        fi: 'Katso caset',
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
      },
      variant: 'secondary',
      external: true,
    },
  ],
}
