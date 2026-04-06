---
title: "DiceMaster"
projectId: "dice-master"
locale: "ru"
summary: "Завершённый Telegram-бот для Dungeons & Dragons, который автоматизирует броски кубиков и быстро обрабатывает игровые команды прямо в чате."
stack:
  - Python
  - Aiogram
  - Telegram Bot API
featured: true
sortOrder: 10
status: "published"
translationState: "ready"
cover: "./cover.svg"
coverAlt: "Illustration of DiceMaster Telegram bot with dice roll commands"
tags:
  - telegram-bot
  - aiogram
  - automation
year: 2025
seoDescription: "DiceMaster — Telegram-бот на Aiogram для автоматизации бросков кубиков в Dungeons & Dragons."
---

`DiceMaster` — реальный завершённый проект 2025 года: Telegram-бот для партий в `Dungeons & Dragons`, который снимает с игроков рутину ручных бросков и ускоряет игровой процесс прямо в чате.

Бот поддерживает стандартные кубики `d4`, `d6`, `d8`, `d10`, `d12`, `d20`, умеет бросать несколько кубиков сразу, обрабатывать модификаторы вроде `/roll 2d8 + 3`, а также отмечать critical hit и fumble для `d20`.

### Что умеет бот

- броски стандартных D&amp;D-кубиков;
- несколько кубиков в одной команде, например `3d6`;
- модификаторы к броску;
- быстрые игровые сценарии и кастомные макросы;
- быстрый ответ прямо внутри Telegram-чата.

### Команды

| Command | Description |
| --- | --- |
| `/start` | Краткое знакомство с ботом |
| `/roll` | Бросок кубиков, например `/roll d20` или `/roll 2d6+1` |
| `/help` | Справка по использованию |
| `/about` | Информация о DiceMaster |

### Примеры использования

```text
/roll d20
/roll 3d6
/roll 2d8 + 3
```

### Что показывает этот кейс

Для меня это хороший backend-кейс про работу с командным интерфейсом, разбором пользовательского ввода, детерминированной логикой расчёта и интеграцией с внешней платформой через Telegram Bot API.

Бот: [@DiceMasterBot](https://t.me/DiceMasterBot)
