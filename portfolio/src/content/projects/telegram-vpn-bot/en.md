---
title: "Telegram VPN Bot"
projectId: "telegram-vpn-bot"
locale: "en"
summary: "A non-commercial study project on aiogram, recreated in 2025 to better understand aiogram architecture, menus, middleware, i18n, and common Telegram bot flows."
stack:
  - Python
  - Aiogram
  - SQLite
  - aiosqlite
  - YAML i18n
featured: false
sortOrder: 18
status: "published"
translationState: "ready"
cover: "./cover.svg"
coverAlt: "Study aiogram project with user management, menus, and localization"
tags:
  - study-project
  - aiogram
  - telegram-bot
  - i18n
year: 2025
seoDescription: "A study aiogram project focused on Telegram bot architecture, middleware, i18n, and SQLite repositories."
---

`Telegram VPN Bot` is a non-commercial study project from 2025 that I recreated not as a commercial case, but as a way to better understand `aiogram`, routing, middleware, localization, and the overall structure of a Telegram bot with many user-facing flows.

Functionally, the bot covers user management, VPN configuration handling, payment UI flows, a referral program, and a multilingual interface. The important context, though, is that this is a study breakdown rather than a production VPN product with real backend integration.

### What is implemented

- user registration and protocol selection;
- viewing personal VPN configurations;
- language switching and balance checks;
- adding, listing, deactivating, and deleting configurations;
- payment flows with method and price selection;
- referral flows with invite actions and withdrawal information;
- multilingual interface via `I18nMiddleware` and YAML locale files;
- reply and inline keyboards for menus, payments, referrals, and info sections.

### Tech stack

- `Python 3.11+`
- `aiogram`
- `aiosqlite`
- `python-dotenv`
- `SQLite`
- `YAML` for translations

### What is useful here architecturally

The project is useful as a practical look at how `aiogram` organizes `routers`, middleware, feature-based modules, localization, keyboards, and repository-style layers on top of `SQLite`. It is not a case about a mature domain model, but it is a good way to understand the framework in action across more screens and interaction paths.

### Why I keep it in the portfolio

I include this project not as my strongest production case, but as an honest study artifact: it shows that I do not only build my own backend systems, but also deliberately dissect existing solutions to better understand `aiogram` patterns, Telegram bot UX structure, and code organization around them.
