---
title: "CPI"
projectId: "cpi"
locale: "en"
summary: "A personal productivity system built with FastAPI, Aiogram, and PostgreSQL: API + Telegram bot with tasks, work sessions, reminders, and ongoing development."
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
seoDescription: "CPI is an API and Telegram bot for personal productivity built with FastAPI, Aiogram, and PostgreSQL."
---

`CPI` is a real 2026 project that is still under active development. It is a small system for personal discipline and productivity tracking, built from a `FastAPI` backend, a Telegram bot on `Aiogram`, and `PostgreSQL` as the main storage layer.

The main idea is to keep a lightweight daily workflow inside Telegram: start and finish work sessions, manage tasks, view statistics, configure schedule, timezone, and reminder frequency, and receive both scheduled reminders and random nudges for active tasks.

### Architecture

- `API`: `FastAPI` + async `SQLAlchemy` + `Alembic`;
- domain entities: `User`, `UserProfile`, `Task`, `WorkSession`, `TaskNudgeEvent`;
- `Bot`: `Aiogram 3`, long polling, and a reminder worker loop;
- `DB`: `PostgreSQL 15` in `Docker Compose`.

### What is already implemented

- task creation and management;
- start and finish work sessions;
- task and work-time statistics;
- schedule, timezone, work-hour, and reminder settings;
- interface localization for `ru`, `en`, and `fi`;
- scheduled reminders and random nudges for active tasks.

### Tech stack

- `Python 3.12+`
- `FastAPI`
- `SQLAlchemy 2 (async)`
- `Alembic`
- `asyncpg`
- `Aiogram 3`
- `pydantic` and `pydantic-settings`
- `Docker` / `Docker Compose`
- `Poetry`

### Why this case matters

`CPI` is valuable to me as a living backend project where API design, Telegram interaction, async data access, migrations, localization, env-driven configuration, and reminder workflows all come together in one system. It is no longer just a bot, but a multi-part application that keeps evolving.
