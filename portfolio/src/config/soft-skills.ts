import type { SoftSkillItem } from '../shared/types/config'

export const softSkillsConfig: SoftSkillItem[] = [
  {
    id: 'communication',
    title: {
      ru: 'Коммуникация по делу',
      en: 'Clear communication',
      fi: 'Selkea viestinta',
      uk: 'Комунікація по суті',
    },
    summary: {
      ru: 'Коротко и понятно объясняю технические решения, риски и компромиссы.',
      en: 'I explain technical decisions, risks, and trade-offs in a concise and practical way.',
      fi: 'Osaan avata tekniset ratkaisut, riskit ja kompromissit tiiviisti ja ymmarrettavasti.',
      uk: 'Коротко й зрозуміло пояснюю технічні рішення, ризики та компроміси.',
    },
    details: {
      ru: 'Держу общую картину прозрачной для команды: показываю варианты, заранее поднимаю спорные места и фиксирую решения так, чтобы ими было удобно пользоваться в работе.',
      en: 'I keep the big picture visible for the team: outline options, surface uncertain areas early, and document decisions in a way that is actually useful during implementation.',
      fi: 'Pidan kokonaiskuvan nakyvissa tiimille: esitan vaihtoehdot, nostan epavarmat kohdat esiin ajoissa ja kirjaan paatokset tavalla, josta on oikeasti hyotya toteutuksessa.',
      uk: 'Тримаю загальну картину прозорою для команди: показую варіанти, завчасно підіймаю спірні місця та фіксую рішення так, щоб ними було зручно користуватися в роботі.',
    },
  },
  {
    id: 'ownership',
    title: {
      ru: 'Ownership',
      en: 'Ownership',
      fi: 'Ownership',
      uk: 'Ownership',
    },
    summary: {
      ru: 'Не теряю задачу после первого merge и думаю о результате целиком.',
      en: 'I do not drop a task after the first merge and think through the full outcome.',
      fi: 'En ajattele tyon loppuvan ensimmaiseen mergeen, vaan vastaan lopputuloksesta kokonaisuutena.',
      uk: 'Не втрачаю задачу після першого merge і думаю про результат цілісно.',
    },
    details: {
      ru: 'Для меня важно не только написать код, но и довести решение до рабочего состояния: учесть данные, миграции, интеграции, поведение в production и то, как это будет поддерживаться дальше.',
      en: 'For me, the work is not only the code itself, but also data changes, integrations, production behavior, rollout safety, and how the solution will be maintained over time.',
      fi: 'Minulle kyse ei ole vain koodista, vaan myos datamuutoksista, integraatioista, production-kaytoksesta, turvallisesta julkaisusta ja siita, miten ratkaisu pysyy yllapidettavana ajan myota.',
      uk: 'Для мене важливо не лише написати код, а й довести рішення до робочого стану: врахувати дані, міграції, інтеграції, поведінку в production і те, як це підтримуватиметься далі.',
    },
  },
  {
    id: 'systems-thinking',
    title: {
      ru: 'Системное мышление',
      en: 'Systems thinking',
      fi: 'Systeeminen ajattelu',
      uk: 'Системне мислення',
    },
    summary: {
      ru: 'Смотрю на сервис как на часть большей системы, а не как на набор endpoint-ов.',
      en: 'I see a service as part of a larger system, not just a set of endpoints.',
      fi: 'Naan palvelun osana laajempaa kokonaisuutta enka vain joukkona endpointteja.',
      uk: 'Дивлюся на сервіс як на частину більшої системи, а не як на набір endpoint-ів.',
    },
    details: {
      ru: 'Оцениваю влияние изменений на соседние модули, контракты, базу данных, наблюдаемость и эксплуатацию, чтобы локальное улучшение не создавало скрытый долг в других частях системы.',
      en: 'I look at the effect of changes on adjacent modules, contracts, databases, observability, and operations so that a local improvement does not create hidden debt elsewhere.',
      fi: 'Arvioin muutosten vaikutusta viereisiin moduuleihin, sopimuksiin, tietokantoihin, observabilityyn ja operointiin, jotta paikallinen parannus ei synnyta piilovelkaa muualle.',
      uk: 'Оцінюю вплив змін на сусідні модулі, контракти, базу даних, спостережуваність і експлуатацію, щоб локальне покращення не створювало прихований борг в інших частинах системи.',
    },
  },
  {
    id: 'collaboration',
    title: {
      ru: 'Спокойная командная работа',
      en: 'Calm collaboration',
      fi: 'Rauhallinen yhteistyö',
      uk: 'Спокійна командна робота',
    },
    summary: {
      ru: 'Работаю предсказуемо, без лишнего шума и с уважением к темпу команды.',
      en: 'I work in a predictable, low-noise way that supports the team’s pace.',
      fi: 'Tyoskentelen ennustettavasti ja ilman turhaa melua, jotta tiimin vauhti pysyy vakaana.',
      uk: 'Працюю передбачувано, без зайвого шуму й з повагою до темпу команди.',
    },
    details: {
      ru: 'Люблю ясные договоренности, аккуратный review и раннюю синхронизацию по рискам. Это помогает двигаться быстрее без хаоса и делает изменения безопаснее для всех участников.',
      en: 'I value clear agreements, thoughtful review, and early alignment on risks. It keeps delivery smoother and makes change safer for everyone involved.',
      fi: 'Arvostan selkeita sopimuksia, harkittua reviewta ja varhaista riskien synkronointia. Se tekee etenemisesta sujuvampaa ja muutoksista turvallisempia koko tiimille.',
      uk: 'Люблю чіткі домовленості, акуратний review і ранню синхронізацію щодо ризиків. Це допомагає рухатися швидше без хаосу й робить зміни безпечнішими для всіх учасників.',
    },
  },
]
