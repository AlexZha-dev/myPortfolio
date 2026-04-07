---
title: "DiceMaster"
projectId: "dice-master"
locale: "uk"
summary: "Завершений Telegram-бот для Dungeons & Dragons, який автоматизує кидки кубиків і швидко обробляє ігрові команди прямо в чаті."
stack:
  - Python
  - Aiogram
  - Telegram Bot API
featured: true
sortOrder: 10
status: "published"
translationState: "ready"
cover: "./cover.svg"
coverAlt: "Ілюстрація DiceMaster Telegram-бота з командами кидків кубиків"
tags:
  - telegram-bot
  - aiogram
  - automation
year: 2025
seoDescription: "DiceMaster - Telegram-бот на Aiogram для автоматизації кидків кубиків у Dungeons & Dragons."
---

`DiceMaster` - реальний завершений проєкт 2025 року: Telegram-бот для партій у `Dungeons & Dragons`, який знімає з гравців рутину ручних кидків і прискорює ігровий процес прямо в чаті.

Бот підтримує стандартні кубики `d4`, `d6`, `d8`, `d10`, `d12`, `d20`, уміє кидати кілька кубиків одразу, обробляти модифікатори на кшталт `/roll 2d8 + 3`, а також позначати critical hit і fumble для `d20`.

### Що вміє бот

- кидки стандартних D&D-кубиків;
- кілька кубиків в одній команді, наприклад `3d6`;
- модифікатори до кидка;
- швидкі ігрові сценарії та кастомні макроси;
- швидка відповідь прямо всередині Telegram-чату.

### Команди

| Command | Description |
| --- | --- |
| `/start` | Коротке знайомство з ботом |
| `/roll` | Кидок кубиків, наприклад `/roll d20` або `/roll 2d6+1` |
| `/help` | Довідка з використання |
| `/about` | Інформація про DiceMaster |

### Приклади використання

```text
/roll d20
/roll 3d6
/roll 2d8 + 3
```

### Що показує цей кейс

Для мене це хороший backend-кейс про роботу з командним інтерфейсом, розбором користувацького вводу, детермінованою логікою обчислень та інтеграцією із зовнішньою платформою через Telegram Bot API.

Бот: [@DiceMasterBot](https://t.me/DiceMasterBot)
