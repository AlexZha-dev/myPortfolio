---
title: "Factorio Telegram Bot"
projectId: "factorio-telegram-bot"
locale: "uk"
summary: "Telegram-бот для керування Dockerized Factorio-сервером із приватного чату: ролі доступу, SQLite, Docker Compose-команди та контроль стану сервера."
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
coverAlt: "Архітектура Factorio Telegram-бота з ролями доступу та керуванням сервером через Docker Compose"
tags:
  - telegram-bot
  - automation
  - docker
  - infrastructure
year: 2026
seoDescription: "Telegram-бот для керування Factorio-сервером через Docker Compose і приватний Telegram-чат."
---

`Factorio Telegram Bot` - реальний проєкт 2026 року для керування Dockerized `Factorio`-сервером із приватного Telegram-чату. Репозиторій складається з двох пов'язаних частин: `docker-compose.yaml` підіймає самого бота, а `docker-compose.factorio.yaml` - ігровий сервер, яким бот керує.

Бот зберігає користувачів у `SQLite`, підтримує рольову модель доступу `pending` / `user` / `admin` і виконує команди керування сервером через `Docker Compose`, інкапсульовані в `FactorioComposeService`.

### Що робить проєкт

- реєструє користувачів через `/start`;
- зберігає користувацькі записи та права доступу в `SQLite`;
- автоматично призначає bootstrap-адмінів із `BOT__ADMIN_IDS`;
- дозволяє адмінам схвалювати або відкликати доступ в інших користувачів;
- показує статус сервера й uptime, якщо контейнер запущено;
- запускає та зупиняє `Factorio` через `docker compose -f docker-compose.factorio.yaml`;
- може показувати адресу підключення з `FACTORIO__GAME_IP`.

### Модель доступу

- `pending`: користувач зареєстрований, але ще не може керувати сервером;
- `user`: може дивитися статус, запускати й зупиняти сервер;
- `admin`: має повний контроль над сервером і користувачами.

### Команди бота

Користувацькі команди:

- `/start`
- `/server_status`
- `/start_server`
- `/stop_server`

Адмінські команди:

- `/pending_users`
- `/approve <telegram_id>`
- `/revoke <telegram_id>`
- `/promote_admin <telegram_id>`

### Технічний стек

- `Python 3.14`
- `Aiogram 3`
- `SQLAlchemy 2`
- `SQLite` з `aiosqlite`
- `Alembic`
- `Docker` / `Docker Compose`

### Що важливо в цьому кейсі

Цей проєкт для мене цікавий на стику backend і infrastructure automation: тут є Telegram-інтерфейс, контроль доступу, робота з локальною БД, orchestration-команди до зовнішнього сервісу та практичний сценарій, де бот виступає не просто клієнтом, а точкою керування для ігрового сервера.
