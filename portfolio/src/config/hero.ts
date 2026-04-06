import type { HeroConfig } from '../shared/types/config'

export const heroConfig: HeroConfig = {
  name: 'Alex Zha',
  role: {
    ru: 'Frontend-разработчик',
    en: 'Frontend Developer',
    fi: 'Frontend-kehittaja',
  },
  description: {
    ru: 'Создаю современные интерфейсы, в которых логика, визуальный ритм и ощущение продукта работают как единая система.',
    en: 'I build modern interfaces where structure, visual rhythm, and product feeling work as one system.',
    fi: 'Rakennan moderneja kayttoliittymia, joissa rakenne, visuaalinen rytmi ja tuotetunne toimivat yhtena kokonaisuutena.',
  },
  ctas: [
    {
      id: 'projects',
      href: '#projects',
      label: {
        ru: 'К проектам',
        en: 'View projects',
        fi: 'Projektit',
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
