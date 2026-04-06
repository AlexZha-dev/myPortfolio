---
title: "DiceMaster"
projectId: "dice-master"
locale: "fi"
summary: "Valmis Telegram-botti Dungeons & Dragons -peleihin, joka automatisoi nopanheitot ja kasittelee pelikomennot nopeasti suoraan chatissa."
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
seoDescription: "DiceMaster on Aiogramilla tehty Telegram-botti Dungeons & Dragons -nopanheittojen automatisointiin."
---

`DiceMaster` on oikea valmis projekti vuodelta 2025: Telegram-botti `Dungeons & Dragons` -pelisessioihin. Sen tarkoitus on poistaa manuaalisten nopanheittojen kitkaa ja pitaa pelin rytmi nopeana suoraan chatissa.

Botti tukee tavallisia noppia `d4`, `d6`, `d8`, `d10`, `d12` ja `d20`, osaa heittaa useita noppia samalla komennolla, kasittelee modifierit kuten `/roll 2d8 + 3` ja tunnistaa `d20`-heittojen critical hit- ja fumble-tilanteet.

### Mita botti tukee

- tavalliset D&amp;D-nopanheitot;
- useita noppia yhdella komennolla, esimerkiksi `3d6`;
- modifierit heittoihin;
- nopeat perusheitot ja omat makrot;
- kevyt ja nopea kaytto aktiivisessa Telegram-chatissa.

### Komennot

| Command | Description |
| --- | --- |
| `/start` | Kaynnistaa botin ja nayttaa perusteet |
| `/roll` | Heittaa nopat, esimerkiksi `/roll d20` tai `/roll 2d6+1` |
| `/help` | Nayttaa kaytto-ohjeet |
| `/about` | Kertoo lyhyesti DiceMasterista |

### Esimerkit

```text
/roll d20
/roll 3d6
/roll 2d8 + 3
```

### Mita tama case osoittaa

Minulle tama on hyva backend-esimerkki komentopohjaisesta kayttoliittymasta, kayttajasyotteen jasentamisesta, deterministisesta laskentalogiikasta ja integraatiosta ulkoiseen alustaan Telegram Bot API:n kautta.

Botti: [@DiceMasterBot](https://t.me/DiceMasterBot)
