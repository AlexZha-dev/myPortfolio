---
title: "Telegram VPN Bot"
projectId: "telegram-vpn-bot"
locale: "fi"
summary: "Ei-kaupallinen aiogram-opiskeluprojekti, joka rakennettiin vuonna 2025 aiogram-arkkitehtuurin, valikoiden, middlewarejen, i18n:n ja tavallisten Telegram-bottiflowden ymmartamiseksi."
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
seoDescription: "Aiogram-opiskeluprojekti Telegram-botin arkkitehtuurin, middlewaren, i18n:n ja SQLite-repositorion ymmartamiseen."
---

`Telegram VPN Bot` on ei-kaupallinen vuoden 2025 opiskeluprojekti, jonka toistin en kaupallisena casena vaan keinona ymmartaa paremmin `aiogramia`, reititysta, middlewarea, lokalisointia ja Telegram-botin kokonaisrakennetta silloin, kun mukana on useita kayttajaflowta.

Toiminnallisesti botti kattaa user managementin, VPN-konfiguraatioiden kasittelyn, payment UI -flowt, referral-ohjelman ja monikielisen kayttoliittyman. Tarkeaa on kuitenkin konteksti: kyseessa on opiskeluprojekti, ei production-tason VPN-tuote oikealla backend-integraatiolla.

### Mita projektissa on toteutettu

- kayttajan rekisterointi ja protokollan valinta;
- omien VPN-konfiguraatioiden tarkastelu;
- kielen vaihto ja balanssin tarkistus;
- konfiguraatioiden lisays, listaus, deaktivointi ja poisto;
- payment-flowt maksutavan ja hinnan valinnalla;
- referral-flowt kutsulinkeilla ja nostotiedoilla;
- monikielinen kayttoliittyma `I18nMiddleware`-ratkaisulla ja YAML-locale-tiedostoilla;
- reply- ja inline-keyboardit valikoille, maksuille, referral-ohjelmalle ja info-osioille.

### Tekninen stack

- `Python 3.11+`
- `aiogram`
- `aiosqlite`
- `python-dotenv`
- `SQLite`
- `YAML` kaannoksille

### Miksi tama on hyodyllinen arkkitehtuurin kannalta

Projekti on hyodyllinen kaytannon tarkasteluna siita, miten `aiogram` jarjestaa `routerit`, middlewaren, feature-pohjaisen rakenteen, lokalisoinnin, keyboardit ja repository-tyyliset kerrokset `SQLite`-tallennuksen paalle. Se ei ole case kypsasta domain-mallista, mutta se auttaa ymmartamaan frameworkia useamman nayttotilan ja vuorovaikutuspolun kautta.

### Miksi pidan sen portfoliossa

Sailytan taman projektin portfoliossa en vahvimpana production-casena vaan rehellisena opiskeluartefaktina: se nayttaa, etta en ainoastaan rakenna omia backend-jarjestelmia, vaan myos puran tietoisesti olemassa olevia ratkaisuja ymmartaakseni paremmin `aiogram`-patternit, Telegram-bottien UX-rakenteen ja tavan organisoida koodia niiden ymparille.
