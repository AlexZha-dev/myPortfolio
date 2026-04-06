---
title: "Factorio Telegram Bot"
projectId: "factorio-telegram-bot"
locale: "fi"
summary: "Telegram-botti Dockerized Factorio-palvelimen hallintaan yksityisesta chatista: kayttooikeusroolit, SQLite, Docker Compose -ohjaus ja palvelimen tilan seuranta."
stack:
  - Python
  - Aiogram
  - SQLAlchemy
  - SQLite
  - Docker Compose
featured: true
sortOrder: 8
status: "published"
translationState: "ready"
cover: "./cover.svg"
coverAlt: "Factorio Telegram bot architecture with access roles and Docker Compose server control"
tags:
  - telegram-bot
  - automation
  - docker
  - infrastructure
year: 2026
seoDescription: "Telegram-botti Factorio-palvelimen ohjaukseen Docker Composen ja yksityisen Telegram-chatin kautta."
---

`Factorio Telegram Bot` on oikea vuoden 2026 projekti Dockerized `Factorio`-palvelimen hallintaan yksityisesta Telegram-chatista. Repossa on kaksi toisiinsa liittyvaa osaa: `docker-compose.yaml` kaynnistaa botin ja `docker-compose.factorio.yaml` itse pelipalvelimen, jota botti ohjaa.

Botti tallentaa kayttajat `SQLite`:en, toteuttaa roolipohjaisen mallin `pending` / `user` / `admin` ja suorittaa palvelimen hallintakomennot `Docker Compose` -kutsuina `FactorioComposeService`-luokan kautta.

### Mita projekti tekee

- rekisteroi Telegram-kayttajat komennolla `/start`;
- tallentaa kayttajatiedot ja roolit `SQLite`:en;
- antaa bootstrap-admineille oikeudet automaattisesti `BOT__ADMIN_IDS`-asetuksesta;
- sallii adminien hyvaksyä tai perua muiden kayttajien paasyoikeuden;
- nayttaa palvelimen tilan ja uptimen, kun kontti on kaynnissa;
- kaynnistaa ja pysayttaa `Factorio`-palvelimen komennolla `docker compose -f docker-compose.factorio.yaml`;
- voi nayttaa liittymisosoitteen arvosta `FACTORIO__GAME_IP`.

### Paasymalli

- `pending`: kayttaja on rekisteroity, mutta ei voi viela ohjata palvelinta;
- `user`: voi tarkistaa tilan, kaynnistaa palvelimen ja pysayttaa palvelimen;
- `admin`: taydet oikeudet palvelimeen ja kayttajien hallintaan.

### Botin komennot

Kayttajakomenot:

- `/start`
- `/server_status`
- `/start_server`
- `/stop_server`

Admin-komennot:

- `/pending_users`
- `/approve <telegram_id>`
- `/revoke <telegram_id>`
- `/promote_admin <telegram_id>`

### Tekninen stack

- `Python 3.14`
- `Aiogram 3`
- `SQLAlchemy 2`
- `SQLite` ja `aiosqlite`
- `Alembic`
- `Docker` / `Docker Compose`

### Miksi tama case on tarkea

Tama projekti on minulle kiinnostava backendin ja infrastructure-automationin rajapinnassa: mukana on Telegram-kayttoliittyma, paasyhallinta, paikallinen tietokanta, orchestration-komennot ulkoiselle palvelulle ja kaytannon tilanne, jossa botti toimii operatiivisena ohjauspisteena pelipalvelimelle.
