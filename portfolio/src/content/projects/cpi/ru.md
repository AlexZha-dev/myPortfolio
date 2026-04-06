---
title: "CPI"
projectId: "cpi"
locale: "ru"
summary: "Личная productivity-система на FastAPI, Aiogram и PostgreSQL: API + Telegram-бот с задачами, сессиями работы, напоминаниями и продолжающейся разработкой."
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
seoDescription: "CPI — API и Telegram-бот для личной продуктивности на FastAPI, Aiogram и PostgreSQL."
---

`CPI` — реальный проект 2026 года, который я продолжаю развивать. Это небольшая система для личной дисциплины и productivity-трекинга, состоящая из `FastAPI` backend, Telegram-бота на `Aiogram` и `PostgreSQL` в роли основного хранилища.

Основная идея проекта — держать ежедневный рабочий поток в Telegram: запускать и завершать рабочие сессии, управлять задачами, смотреть статистику, настраивать расписание, таймзону и частоту напоминаний, а также получать scheduled reminders и случайные nudges по активным задачам.

### Архитектура

- `API`: `FastAPI` + async `SQLAlchemy` + `Alembic`;
- доменные сущности: `User`, `UserProfile`, `Task`, `WorkSession`, `TaskNudgeEvent`;
- `Bot`: `Aiogram 3`, long polling и отдельный reminder worker;
- `DB`: `PostgreSQL 15` в `Docker Compose`.

### Что уже реализовано

- создание и управление задачами;
- старт и завершение work sessions;
- статистика по задачам и рабочему времени;
- настройки расписания, рабочих часов, таймзоны и напоминаний;
- локализация интерфейса: `ru`, `en`, `fi`;
- периодические напоминания и случайные nudges для активных задач.

### Технический стек

- `Python 3.12+`
- `FastAPI`
- `SQLAlchemy 2 (async)`
- `Alembic`
- `asyncpg`
- `Aiogram 3`
- `pydantic` и `pydantic-settings`
- `Docker` / `Docker Compose`
- `Poetry`

### Что важно в этом кейсе

Для меня `CPI` ценен как живой backend-проект, где соединяются API, Telegram-клиент, асинхронная работа с данными, миграции, локализация, конфигурация через env и фоновая логика напоминаний. Это уже не просто бот, а связанная система из нескольких частей, которая продолжает развиваться.
