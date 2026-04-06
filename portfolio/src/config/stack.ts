import type { StackGroup } from '../shared/types/config'

export const stackConfig: StackGroup[] = [
  {
    id: 'backend-core',
    title: {
      ru: 'Backend Core',
      en: 'Backend Core',
      fi: 'Backend Core',
    },
    items: [
      {
        name: 'Python',
        note: {
          ru: 'Основной язык для сервисов и бизнес-логики',
          en: 'Core language for services and business logic',
          fi: 'Paakieli palveluille ja liiketoimintalogiikalle',
        },
      },
      {
        name: 'FastAPI',
        note: {
          ru: 'API, асинхронные сервисы и прикладной слой',
          en: 'APIs, async services, and application layer',
          fi: 'API-rajapinnat, async-palvelut ja sovelluskerros',
        },
      },
      {
        name: 'Pydantic',
        note: {
          ru: 'Валидация схем, DTO и конфигурации',
          en: 'Schema validation, DTOs, and settings',
          fi: 'Skeemojen, DTO-rakenteiden ja asetusten validointi',
        },
      },
    ],
  },
  {
    id: 'data-layer',
    title: {
      ru: 'Data Layer',
      en: 'Data Layer',
      fi: 'Data Layer',
    },
    items: [
      {
        name: 'SQLAlchemy',
        note: {
          ru: 'ORM и организация слоя доступа к данным',
          en: 'ORM and data-access layer organization',
          fi: 'ORM ja datakerroksen organisointi',
        },
      },
      {
        name: 'Alembic',
        note: {
          ru: 'Миграции и контроль изменений схемы',
          en: 'Migrations and schema change control',
          fi: 'Migraatiot ja skeemamuutosten hallinta',
        },
      },
      {
        name: 'asyncpg',
        note: {
          ru: 'Асинхронная работа с PostgreSQL',
          en: 'Async work with PostgreSQL',
          fi: 'Asynkroninen tyo PostgreSQL:n kanssa',
        },
      },
      {
        name: 'PostgreSQL',
        note: {
          ru: 'Основная рабочая БД, также работаю с другими СУБД',
          en: 'Primary database, with experience in other DB systems too',
          fi: 'Paasiallinen tietokanta, kokemusta myos muista tietokannoista',
        },
      },
    ],
  },
  {
    id: 'automation',
    title: {
      ru: 'Automation & Integrations',
      en: 'Automation & Integrations',
      fi: 'Automation & Integrations',
    },
    items: [
      {
        name: 'Aiogram',
        note: {
          ru: 'Telegram-боты, сценарии и автоматизация',
          en: 'Telegram bots, workflows, and automation',
          fi: 'Telegram-botit, työnkulut ja automaatio',
        },
      },
      {
        name: 'Redis',
        note: {
          ru: 'Кэш, состояние, очереди и rate limiting',
          en: 'Cache, state, queues, and rate limiting',
          fi: 'Valimuisti, tila, jonot ja rate limiting',
        },
      },
    ],
  },
  {
    id: 'delivery',
    title: {
      ru: 'Delivery & Infrastructure',
      en: 'Delivery & Infrastructure',
      fi: 'Delivery & Infrastructure',
    },
    items: [
      {
        name: 'Git',
        note: {
          ru: 'Контроль версий, ветвление и инженерный workflow',
          en: 'Version control, branching, and engineering workflow',
          fi: 'Versionhallinta, branching ja insinoorityon workflow',
        },
      },
      {
        name: 'Docker',
        note: {
          ru: 'Контейнеризация окружения и приложений',
          en: 'Containerization for environments and applications',
          fi: 'Ymparistojen ja sovellusten kontitus',
        },
      },
      {
        name: 'Docker Compose',
        note: {
          ru: 'Локальная оркестрация сервисов и dev-сборок',
          en: 'Local service orchestration and dev setups',
          fi: 'Paikallinen palveluorkestrointi ja dev-ymparistot',
        },
      },
      {
        name: 'Kubernetes',
        note: {
          ru: 'Оркестрация, масштабирование и production-доставка',
          en: 'Orchestration, scaling, and production delivery',
          fi: 'Orkestrointi, skaalaus ja production-toimitus',
        },
      },
    ],
  },
]
