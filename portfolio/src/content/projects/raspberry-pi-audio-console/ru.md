---
title: "Raspberry Pi Audio Console"
projectId: "raspberry-pi-audio-console"
locale: "ru"
summary: "Клиентская программа для Raspberry Pi, которая отправляет звук с микрофона на WebSocket-сервер и воспроизводит ответ через динамик, добавляя console UI и локальную hardware-интеграцию."
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
coverAlt: "Raspberry Pi audio console for microphone to WebSocket to speaker streaming"
tags:
  - raspberry-pi
  - audio
  - websocket
  - edge-client
year: 2025
seoDescription: "Raspberry Pi клиент для отправки микрофонного аудио на WebSocket backend и воспроизведения ответов."
---

`Raspberry Pi Audio Console` — реальный проект 2025 года: edge-side программа для `Raspberry Pi`, которая передаёт аудио с микрофона на `WebSocket` backend и воспроизводит серверный ответ через динамик.

Проект включает интерактивный console UI для выбора устройств и управления сессией, single-run режим для быстрых end-to-end проверок и локальный echo `WebSocket` сервер для разработки и тестирования.

### Что умеет приложение

- захватывать аудио с микрофона и воспроизводить ответ через speaker в реальном времени;
- работать с binary и JSON `WebSocket` протоколом;
- запускать сессию через non-blocking session runner;
- использовать локальную hardware-интеграцию для `LCD` и `GPIO` кнопки;
- применять более безопасные transport defaults, включая обязательный `wss://` для удалённых endpoint.

### Как устроен проект

- `src/application/`: orchestration сессии и `session_runner`;
- `src/infrastructure/`: микрофон, speaker, websocket, LCD и button adapters;
- `src/controllers/`: console workflow coordination;
- `src/ui/`: terminal и LCD presentation layer;
- `src/dto/`: message и data codecs;
- `src/config/`: env и preferences configuration;
- `src/tests/`: локальный сервер, integration helpers и automated tests.

Точки входа:

- `src/console_main.py`: интерактивный console mode;
- `src/main.py`: single session mode.

### Что важно в этом кейсе

Для меня это хороший проект на стыке backend-интеграции и edge/runtime окружения. Здесь важны не только сетевой протокол и потоковая передача аудио, но и выбор устройств, работа с системными аудио-библиотеками, ограничения транспорта, локальное железо и удобный способ быстро проверить всю цепочку `mic -> websocket -> speaker`.

### Почему это усиливает портфолио

Этот кейс хорошо дополняет `Speaker`: если тот показывает серверную orchestration-логику voice pipeline, то `Raspberry Pi Audio Console` показывает клиентскую сторону той же задачи — реальное устройство, реальный звук, транспортные ограничения и прикладной runtime на edge-устройстве.
