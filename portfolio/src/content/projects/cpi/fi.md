---
title: "CPI"
projectId: "cpi"
locale: "fi"
summary: "Henkilokohtainen productivity-jarjestelma FastAPIlla, Aiogramilla ja PostgreSQL:lla: API + Telegram-botti, jossa on tehtavat, work sessionit, muistutukset ja jatkuva kehitys."
stack:
  - Python
  - FastAPI
  - Aiogram
  - PostgreSQL
  - SQLAlchemy
featured: true
sortOrder: 5
status: "published"
translationState: "ready"
cover: "./cover.svg"
coverAlt: "CPI productivity system architecture with API, bot, and PostgreSQL"
tags:
  - productivity
  - fastapi
  - telegram-bot
  - backend
year: 2026
seoDescription: "CPI on FastAPIlla, Aiogramilla ja PostgreSQL:lla rakennettu API ja Telegram-botti henkilohtaiseen tuottavuuteen."
---

`CPI` on oikea vuoden 2026 projekti, jonka kehitys jatkuu aktiivisesti. Se on pieni jarjestelma henkilohtaiseen kuriin ja productivity-seurantaan, ja se koostuu `FastAPI`-backendista, `Aiogram`-Telegram-botista ja `PostgreSQL`:sta paatietovarastona.

Projektin perusidea on pitaa kevyt paivittainen workflow Telegramissa: kaynnistaa ja paattaa work sessioneita, hallita tehtavia, katsoa statistiikkaa, saataa aikataulua, aikavyohyketta ja muistutusten tiheyttä seka saada scheduled remindereita ja satunnaisia nudgeja aktiivisille tehtaville.

### Arkkitehtuuri

- `API`: `FastAPI` + async `SQLAlchemy` + `Alembic`;
- domain-entiteetit: `User`, `UserProfile`, `Task`, `WorkSession`, `TaskNudgeEvent`;
- `Bot`: `Aiogram 3`, long polling ja erillinen reminder worker;
- `DB`: `PostgreSQL 15` `Docker Compose` -ymparistossa.

### Mita on jo toteutettu

- tehtavien luonti ja hallinta;
- work sessionien aloitus ja lopetus;
- tehtava- ja tyoaikastatistiikka;
- aikataulu-, tyotunti-, aikavyohyke- ja reminder-asetukset;
- kayttoliittyman lokalisointi: `ru`, `en`, `fi`;
- ajastetut muistutukset ja satunnaiset nudget aktiivisille tehtaville.

### Tekninen stack

- `Python 3.12+`
- `FastAPI`
- `SQLAlchemy 2 (async)`
- `Alembic`
- `asyncpg`
- `Aiogram 3`
- `pydantic` ja `pydantic-settings`
- `Docker` / `Docker Compose`
- `Poetry`

### Miksi tama case on tärkea

`CPI` on minulle arvokas elava backend-projekti, jossa API-suunnittelu, Telegram-interaktio, asynkroninen datakerros, migraatiot, lokalisointi, env-pohjainen konfiguraatio ja reminder-logiikka yhdistyvat samaan jarjestelmaan. Se ei ole vain botti, vaan useasta osasta koostuva sovellus, joka kehittyy edelleen.
