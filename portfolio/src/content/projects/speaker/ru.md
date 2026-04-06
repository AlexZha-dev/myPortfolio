---
title: "Speaker"
projectId: "speaker"
locale: "ru"
summary: "Realtime audio agent на FastAPI: принимает аудио по WebSocket, распознаёт речь через Vosk, отправляет текст в Ollama, синтезирует ответ через Coqui TTS и стримит аудио обратно клиенту."
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
seoDescription: "Realtime audio pipeline service на FastAPI, Vosk, Ollama и Coqui TTS."
---

`Speaker` — реальный проект 2025 года, реализующий realtime audio pipeline. Сервис принимает сырые аудио-чанки по `WebSocket`, распознаёт речь через `Vosk`, отправляет транскрипт в `Ollama`, синтезирует ответ через `Coqui TTS` и стримит сгенерированное аудио обратно в того же клиента.

Ключевая идея проекта — собрать непрерывную голосовую цепочку `ASR -> LLM -> TTS` в одном backend-сервисе, сохранив асинхронную обработку, порядок воспроизведения и предсказуемое поведение на уровне отдельной сессии.

### Что умеет сервис

- принимать audio stream через `ws://<host>/ws/audio`;
- валидировать параметры аудио-сессии;
- распознавать речь через `Vosk`;
- генерировать текстовый ответ через streaming API `Ollama`;
- синтезировать ответ предложениями через async `TTS` worker pool;
- поддерживать ordered playback queue для каждой сессии;
- отправлять heartbeat и queue status события по WebSocket;
- писать session-scoped логи в `logs/session_<session_id>.log`.

### Архитектура

- `src/main.py`: точка входа `FastAPI`, setup логирования, DI wiring и lifespan;
- `src/api/ws/`: WebSocket handler, connection и validation;
- `src/controlers/controller.py`: основная orchestration-логика `ASR -> LLM -> TTS -> playback`;
- `src/controlers/session_registry.py`: runtime state для сессий;
- `src/infrastructure/`: адаптеры `Vosk`, `TTS`, playback engine и infrastructural gateways;
- `src/application/`, `src/domain/`, `src/dto/`, `src/di/`: use-cases, domain objects, DTO и dependency container.

### Что важно в этом кейсе

Для меня это сильный backend-кейс про realtime-коммуникацию и оркестрацию нескольких AI/audio-компонентов внутри одной сессии. Здесь важны не только интеграции сами по себе, но и потоковая обработка, жизненный цикл соединения, очереди воспроизведения, worker pool и предсказуемость event-driven протокола.

### Ограничения и направление роста

В проекте уже отмечены понятные точки для развития: дальнейшее разбиение больших модулей, versioning клиентского протокола и более глубокие integration-тесты под reconnect, cancellation и playback ordering под нагрузкой. Для портфолио это полезно тем, что показывает не только текущую реализацию, но и инженерное понимание следующего шага.
