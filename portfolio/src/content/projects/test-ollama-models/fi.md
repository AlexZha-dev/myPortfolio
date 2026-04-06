---
title: "Test Ollama Models"
projectId: "test-ollama-models"
locale: "fi"
summary: "Desktop-benchmarking-sovellus Ollama-compatible malleille: yhteiset promptit, saadettava concurrency, vastaukset, latency-, token- ja TPS-metriikat Flet-kayttoliittymassa."
stack:
  - Python
  - Flet
  - SQLite
  - requests
  - dependency-injector
featured: true
sortOrder: 12
status: "published"
translationState: "ready"
cover: "./cover.svg"
coverAlt: "Desktop benchmarking dashboard for Ollama-compatible models"
tags:
  - llm
  - benchmarking
  - desktop
  - ollama
year: 2025
seoDescription: "Desktop-sovellus Ollama-compatible mallien vertailuun latency-, token- ja TPS-metriikoilla."
---

`Test Ollama Models` on oikea vuoden 2025 projekti paikallisten ja etaisten `Ollama`-compatible mallien benchmarkingiin `Flet`-pohjaisen desktop-kayttoliittyman kautta.

Sovellus antaa maarittaa mallit ja promptit, ajaa saman kysymysjoukon useita malleja vasten, hallita `concurrency`-tasoa, tarkastella generoituja vastauksia ja vertailla `latency`-, `token count`- ja `tokens per second` -metriikoita, jotka kerataan jokaisesta ajosta.

### Mita sovellus tukee

- saman prompt-joukon ajaminen useille malleille;
- `concurrency`-tason hallinta rinnakkaisen kayton simulointiin;
- etenemisen seuranta paa-konsolissa ja instance-kohtaisissa konsoleissa;
- generoitujen vastausten tarkastelu omassa valilehdessa;
- live- ja historical-metriikoiden visualisointi latencylle, token-maaralle ja TPS:lle;
- asetusten ja testitulosten automaattinen tallennus `SQLite`:en `Data/`-hakemistossa.

### Projektin rakenne

Sovellus kaynnistyy tiedostosta `main.py`, rakentaa dependency containerin ja renderoi valilehtipohjaisen kayttoliittyman neljalla paa-alueella:

- `Run Tests`
- `Answers`
- `Metrics`
- `Settings`

Ajon aikana sovellus:

1. Lataa mallit ja API-osoitteen.
2. Tekee health checkin valituille malleille.
3. Lahettaa kysymykset `Ollama /api/generate` -endpointtiin.
4. Mittaa jokaiselle vastaukselle latencyn, token-maaran ja tokens per second -arvon.
5. Tallentaa raw- ja averaged-tulokset `SQLite`:en.
6. Valittaa lokit, vastaukset ja chart-data takaisin UI:hin sisaisen event-driven logiikan kautta.

### Tekninen stack

- `Python 3.11`
- `Flet`
- `requests`
- `SQLite`
- `dependency-injector`
- `pytest`, `black`, `isort`, `flake8`, `mypy`, `bandit`, `pre-commit`

### Miksi tama case on tarkea

Tama projekti nayttaa minut ei vain API- ja Telegram-kehittajana, vaan myos kehittajana, joka rakentaa kaytannollista toolingia mallien arviointiin: mukana on metriikat, tulosten tallennus, desktop UI ja siisti jako kerroksiin `UI`, `Presenter`, `Application`, `Domain`, `Gateway` ja `Infrastructure`.
