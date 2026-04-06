import type { StackGroup } from '../shared/types/config'

export const stackConfig: StackGroup[] = [
  {
    id: 'frontend',
    title: {
      ru: 'Frontend',
      en: 'Frontend',
      fi: 'Frontend',
    },
    items: [
      {
        name: 'React',
        note: {
          ru: 'Основной UI-слой',
          en: 'Primary UI layer',
          fi: 'Paasiallinen UI-kerros',
        },
      },
      {
        name: 'TypeScript',
        note: {
          ru: 'Типы для конфигов и контента',
          en: 'Types for config and content',
          fi: 'Tyypit konfiguraatiolle ja sisallolle',
        },
      },
      {
        name: 'Vite',
        note: {
          ru: 'Сборка и локальная разработка',
          en: 'Build and local development',
          fi: 'Build ja paikallinen kehitys',
        },
      },
    ],
  },
  {
    id: 'tooling',
    title: {
      ru: 'Tooling',
      en: 'Tooling',
      fi: 'Tyokalut',
    },
    items: [
      {
        name: 'GitHub Actions',
        note: {
          ru: 'Деплой на GitHub Pages',
          en: 'GitHub Pages deployment',
          fi: 'GitHub Pages -julkaisu',
        },
      },
      {
        name: 'Markdown',
        note: {
          ru: 'Источник контента для кейсов',
          en: 'Source of case-study content',
          fi: 'Sisallon lahde case-kuvauksille',
        },
      },
      {
        name: 'Zod',
        note: {
          ru: 'Планируемая валидация frontmatter',
          en: 'Planned frontmatter validation',
          fi: 'Suunniteltu frontmatter-validointi',
        },
      },
    ],
  },
  {
    id: 'design',
    title: {
      ru: 'Design',
      en: 'Design',
      fi: 'Muotoilu',
    },
    items: [
      {
        name: 'Dark green palette',
        note: {
          ru: 'Основное визуальное направление',
          en: 'Primary visual direction',
          fi: 'Paasiallinen visuaalinen suunta',
        },
      },
      {
        name: 'Responsive layout',
        note: {
          ru: 'Под мобильные и десктопные экраны',
          en: 'For mobile and desktop screens',
          fi: 'Mobiili- ja desktop-naytoille',
        },
      },
    ],
  },
  {
    id: 'other',
    title: {
      ru: 'Other',
      en: 'Other',
      fi: 'Muut',
    },
    items: [
      {
        name: 'Content architecture',
        note: {
          ru: 'Markdown + typed-config + i18n',
          en: 'Markdown + typed-config + i18n',
          fi: 'Markdown + typed-config + i18n',
        },
      },
      {
        name: 'Deep-link',
        note: {
          ru: 'Подготовлено под #project/<id>',
          en: 'Prepared for #project/<id>',
          fi: 'Valmisteltu muodolle #project/<id>',
        },
      },
    ],
  },
]
