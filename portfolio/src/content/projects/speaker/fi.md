---
title: "Speaker"
projectId: "speaker"
locale: "fi"
summary: "Realtime audio agent FastAPIlla: vastaanottaa audion WebSocketin yli, litteroi puheen Voskilla, lahettaa tekstin Ollamaan, syntetisoi vastauksen Coqui TTS:lla ja streamaa audion takaisin asiakkaalle."
stack:
  - Python
  - FastAPI
  - WebSocket
  - Vosk
  - Ollama
  - Coqui TTS
featured: true
sortOrder: 14
status: "published"
translationState: "ready"
cover: "./cover.svg"
coverAlt: "Realtime audio pipeline with FastAPI, Vosk, Ollama, and Coqui TTS"
tags:
  - realtime
  - audio
  - llm
  - websocket
year: 2025
seoDescription: "Realtime audio pipeline -palvelu FastAPIlla, Voskilla, Ollamalla ja Coqui TTS:lla."
---

`Speaker` on oikea vuoden 2025 projekti, joka toteuttaa realtime audio pipelinen. Palvelu vastaanottaa raakoja audiochunkkeja `WebSocketin` yli, litteroi puheen `Voskilla`, lahettaa transkriptin `Ollamaan`, syntetisoi vastauksen `Coqui TTS`:lla ja streamaa generoiden audion takaisin samalle asiakkaalle.

Projektin ydinajatus on rakentaa `ASR -> LLM -> TTS` -aaniketju yhden backend-palvelun sisaan niin, etta asynkroninen kasittely, playback-jarjestys ja sessiokohtainen ennustettavuus pysyvat hallinnassa.

### Mita palvelu tukee

- realtime audio intake osoitteessa `ws://<host>/ws/audio`;
- audiosession parametrien validointi;
- speech-to-text `Voskilla`;
- vastausten generointi `Ollama` streaming API:n kautta;
- lausekohtainen synteesi async `TTS` worker poolilla;
- ordered playback queue per sessio;
- WebSocket heartbeat- ja queue status -eventit;
- sessiokohtaiset lokit tiedostoihin `logs/session_<session_id>.log`.

### Arkkitehtuuri

- `src/main.py`: `FastAPI` entrypoint, logging setup, DI wiring ja lifespan;
- `src/api/ws/`: WebSocket handler, connection ja validation;
- `src/controlers/controller.py`: paaasiallinen `ASR -> LLM -> TTS -> playback` orchestration;
- `src/controlers/session_registry.py`: sessioiden runtime state;
- `src/infrastructure/`: `Vosk`-, `TTS`- ja playback-adapterit seka infra-gatewayt;
- `src/application/`, `src/domain/`, `src/dto/`, `src/di/`: use-caset, domain-oliot, DTO:t ja dependency container.

### Miksi tama case on tarkea

Minulle tama on vahva backend-case realtime-kommunikaatiosta ja useiden AI- ja audio-komponenttien orchestrationista yhden session sisalla. Haaste ei ole vain integraatioissa, vaan myos streaming flow controlissa, yhteyden elinkaaressa, playback-jonoissa, worker pooleissa ja event-driven protokollan ennustettavuudessa.

### Rajoitukset ja seuraavat parannukset

Projektissa on jo tunnistettu selkeat seuraavat parannukset: suurten moduulien jakaminen pienempiin osiin, protokollan versionointi ja syvemmat integration-testit reconnect-, cancellation- ja playback ordering -tilanteille kuorman alla. Portfolio-casena tama on arvokas, koska se nayttaa nykyisen toteutuksen lisaksi myos insinoorimaisen nakemyksen jatkokehityksesta.
