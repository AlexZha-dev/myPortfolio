---
title: "Raspberry Pi Audio Console"
projectId: "raspberry-pi-audio-console"
locale: "uk"
summary: "Клієнтська програма для Raspberry Pi, яка надсилає звук із мікрофона на WebSocket-сервер і відтворює відповідь через динамік, додаючи console UI та локальну hardware-інтеграцію."
stack:
  - Python
  - WebSocket
  - Raspberry Pi
  - PortAudio
  - GPIO/LCD
featured: true
sortOrder: 16
status: "published"
translationState: "ready"
cover: "./cover.svg"
coverAlt: "Raspberry Pi audio console для стримінгу mic -> WebSocket -> speaker"
tags:
  - raspberry-pi
  - audio
  - websocket
  - edge-client
year: 2025
seoDescription: "Raspberry Pi клієнт для надсилання мікрофонного аудіо на WebSocket backend і відтворення відповідей."
---

`Raspberry Pi Audio Console` - реальний проєкт 2025 року: edge-side програма для `Raspberry Pi`, яка передає аудіо з мікрофона на `WebSocket` backend і відтворює серверну відповідь через динамік.

Проєкт включає інтерактивний console UI для вибору пристроїв і керування сесією, single-run режим для швидких end-to-end перевірок і локальний echo `WebSocket` сервер для розробки та тестування.

### Що вміє застосунок

- захоплювати аудіо з мікрофона й відтворювати відповідь через speaker у реальному часі;
- працювати з binary і JSON `WebSocket` протоколом;
- запускати сесію через non-blocking session runner;
- використовувати локальну hardware-інтеграцію для `LCD` і `GPIO` кнопки;
- застосовувати безпечніші transport defaults, включно з обов'язковим `wss://` для віддалених endpoint-ів.

### Як влаштований проєкт

- `src/application/`: orchestration сесії та `session_runner`;
- `src/infrastructure/`: мікрофон, speaker, websocket, LCD і button adapters;
- `src/controllers/`: console workflow coordination;
- `src/ui/`: terminal і LCD presentation layer;
- `src/dto/`: message і data codecs;
- `src/config/`: env і preferences configuration;
- `src/tests/`: локальний сервер, integration helpers і automated tests.

Точки входу:

- `src/console_main.py`: інтерактивний console mode;
- `src/main.py`: single session mode.

### Що важливо в цьому кейсі

Для мене це хороший проєкт на стику backend-інтеграції й edge/runtime середовища. Тут важливі не лише мережевий протокол і потокова передача аудіо, а й вибір пристроїв, робота із системними аудіобібліотеками, транспортні обмеження, локальне залізо та зручний спосіб швидко перевірити весь ланцюжок `mic -> websocket -> speaker`.

### Чому це підсилює портфоліо

Цей кейс добре доповнює `Speaker`: якщо той показує серверну orchestration-логіку voice pipeline, то `Raspberry Pi Audio Console` показує клієнтський бік тієї самої задачі - реальний пристрій, реальний звук, транспортні обмеження та прикладний runtime на edge-пристрої.
