---
title: "DiceMaster"
projectId: "dice-master"
locale: "en"
summary: "A completed Telegram bot for Dungeons & Dragons that automates dice rolls and handles game commands directly in chat."
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
seoDescription: "DiceMaster is an Aiogram-based Telegram bot for automating dice rolls in Dungeons & Dragons."
---

`DiceMaster` is a real completed project from 2025: a Telegram bot built for `Dungeons & Dragons` sessions to remove the friction of manual dice rolling and keep the game moving directly in chat.

The bot supports standard dice such as `d4`, `d6`, `d8`, `d10`, `d12`, and `d20`, can roll multiple dice at once, handles modifiers like `/roll 2d8 + 3`, and highlights critical hits or fumbles for `d20`.

### What the bot supports

- standard D&amp;D dice rolls;
- multiple dice in a single command such as `3d6`;
- roll modifiers;
- quick common rolls and custom macros;
- lightweight responses that work well in active Telegram chats.

### Commands

| Command | Description |
| --- | --- |
| `/start` | Start the bot and see the basics |
| `/roll` | Roll dice, for example `/roll d20` or `/roll 2d6+1` |
| `/help` | Display usage help |
| `/about` | Show information about DiceMaster |

### Usage examples

```text
/roll d20
/roll 3d6
/roll 2d8 + 3
```

### Why this case matters

For me, this is a solid backend case around command-driven interaction, parsing user input, deterministic dice-roll logic, and integration with an external platform through the Telegram Bot API.

Bot: [@DiceMasterBot](https://t.me/DiceMasterBot)
