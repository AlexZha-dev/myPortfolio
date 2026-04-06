---
title: "Factorio Telegram Bot"
projectId: "factorio-telegram-bot"
locale: "en"
summary: "A Telegram bot for managing a Dockerized Factorio server from a private chat: access roles, SQLite, Docker Compose control, and server status handling."
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
seoDescription: "A Telegram bot for controlling a Factorio server through Docker Compose and a private Telegram chat."
---

`Factorio Telegram Bot` is a real 2026 project for managing a Dockerized `Factorio` server from a private Telegram chat. The repository contains two related parts: `docker-compose.yaml` runs the bot itself, while `docker-compose.factorio.yaml` runs the game server that the bot controls.

The bot stores users in `SQLite`, applies a role-based access model with `pending`, `user`, and `admin`, and executes server-management actions through `Docker Compose` commands wrapped inside `FactorioComposeService`.

### What the project does

- registers Telegram users through `/start`;
- stores user records and access roles in `SQLite`;
- auto-grants bootstrap admins from `BOT__ADMIN_IDS`;
- allows admins to approve or revoke access for other users;
- shows server status and uptime when the container is running;
- starts and stops `Factorio` with `docker compose -f docker-compose.factorio.yaml`;
- can display the connection address from `FACTORIO__GAME_IP`.

### Access model

- `pending`: registered in the database but cannot control the server yet;
- `user`: can check status, start the server, and stop the server;
- `admin`: has full server control and can manage other users.

### Bot commands

User commands:

- `/start`
- `/server_status`
- `/start_server`
- `/stop_server`

Admin commands:

- `/pending_users`
- `/approve <telegram_id>`
- `/revoke <telegram_id>`
- `/promote_admin <telegram_id>`

### Tech stack

- `Python 3.14`
- `Aiogram 3`
- `SQLAlchemy 2`
- `SQLite` with `aiosqlite`
- `Alembic`
- `Docker` / `Docker Compose`

### Why this case matters

This project is especially valuable to me at the intersection of backend and infrastructure automation: it combines a Telegram interface, access control, local database work, orchestration commands against an external service, and a practical scenario where the bot acts as an operational control point for a game server.
