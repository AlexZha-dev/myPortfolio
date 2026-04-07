---
title: "CPI"
projectId: "cpi"
locale: "uk"
summary: "Особиста productivity-система на FastAPI, Aiogram і PostgreSQL: API + Telegram-бот із задачами, робочими сесіями, нагадуваннями та подальшою розробкою."
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
coverAlt: "Архітектура CPI productivity system з API, ботом і PostgreSQL"
tags:
  - productivity
  - fastapi
  - telegram-bot
  - backend
year: 2026
seoDescription: "CPI - API і Telegram-бот для персональної продуктивності на FastAPI, Aiogram і PostgreSQL."
---

`CPI` - реальний проєкт 2026 року, який я продовжую розвивати. Це невелика система для особистої дисципліни та productivity-трекінгу, що складається з `FastAPI` backend, Telegram-бота на `Aiogram` і `PostgreSQL` як основного сховища.

Основна ідея проєкту - тримати щоденний робочий потік у Telegram: запускати та завершувати робочі сесії, керувати задачами, дивитися статистику, налаштовувати розклад, часовий пояс і частоту нагадувань, а також отримувати scheduled reminders і випадкові nudges для активних задач.

### Архітектура

- `API`: `FastAPI` + async `SQLAlchemy` + `Alembic`;
- доменні сутності: `User`, `UserProfile`, `Task`, `WorkSession`, `TaskNudgeEvent`;
- `Bot`: `Aiogram 3`, long polling і окремий reminder worker;
- `DB`: `PostgreSQL 15` у `Docker Compose`.

### Що вже реалізовано

- створення та керування задачами;
- старт і завершення work sessions;
- статистика за задачами та робочим часом;
- налаштування розкладу, робочих годин, часового поясу й нагадувань;
- локалізація інтерфейсу: `ru`, `en`, `fi`, `uk`;
- періодичні нагадування та випадкові nudges для активних задач.

### Технічний стек

- `Python 3.12+`
- `FastAPI`
- `SQLAlchemy 2 (async)`
- `Alembic`
- `asyncpg`
- `Aiogram 3`
- `pydantic` і `pydantic-settings`
- `Docker` / `Docker Compose`
- `Poetry`

### Що важливо в цьому кейсі

Для мене `CPI` цінний як живий backend-проєкт, де поєднуються API, Telegram-клієнт, асинхронна робота з даними, міграції, локалізація, конфігурація через env і фонова логіка нагадувань. Це вже не просто бот, а пов'язана система з кількох частин, яка продовжує розвиватися.
