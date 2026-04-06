---
title: "Factorio Telegram Bot"
projectId: "factorio-telegram-bot"
locale: "ru"
summary: "Telegram-бот для управления Dockerized Factorio-сервером из приватного чата: роли доступа, SQLite, Docker Compose-команды и контроль состояния сервера."
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
seoDescription: "Telegram-бот для управления Factorio-сервером через Docker Compose и приватный Telegram-чат."
---

`Factorio Telegram Bot` — реальный проект 2026 года для управления Dockerized `Factorio`-сервером из приватного Telegram-чата. Репозиторий состоит из двух связанных частей: `docker-compose.yaml` поднимает самого бота, а `docker-compose.factorio.yaml` — игровой сервер, которым бот управляет.

Бот хранит пользователей в `SQLite`, поддерживает ролевую модель доступа `pending` / `user` / `admin` и выполняет команды управления сервером через `Docker Compose`, инкапсулированные в `FactorioComposeService`.

### Что делает проект

- регистрирует пользователей через `/start`;
- хранит пользовательские записи и права доступа в `SQLite`;
- автоматически назначает bootstrap-админов из `BOT__ADMIN_IDS`;
- позволяет админам одобрять или отзывать доступ у других пользователей;
- показывает статус сервера и uptime, если контейнер запущен;
- запускает и останавливает `Factorio` через `docker compose -f docker-compose.factorio.yaml`;
- может показывать адрес подключения из `FACTORIO__GAME_IP`.

### Модель доступа

- `pending`: пользователь зарегистрирован, но ещё не может управлять сервером;
- `user`: может смотреть статус, запускать и останавливать сервер;
- `admin`: имеет полный контроль над сервером и пользователями.

### Команды бота

Пользовательские команды:

- `/start`
- `/server_status`
- `/start_server`
- `/stop_server`

Админские команды:

- `/pending_users`
- `/approve <telegram_id>`
- `/revoke <telegram_id>`
- `/promote_admin <telegram_id>`

### Технический стек

- `Python 3.14`
- `Aiogram 3`
- `SQLAlchemy 2`
- `SQLite` с `aiosqlite`
- `Alembic`
- `Docker` / `Docker Compose`

### Что важно в этом кейсе

Этот проект для меня интересен на стыке backend и infrastructure automation: тут есть Telegram-интерфейс, контроль доступа, работа с локальной БД, orchestration-команды к внешнему сервису и практический сценарий, где бот выступает не просто клиентом, а управляющей точкой для игрового сервера.
