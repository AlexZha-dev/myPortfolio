---
title: "Speaker"
projectId: "speaker"
locale: "uk"
summary: "Realtime audio agent на FastAPI: приймає аудіо через WebSocket, розпізнає мовлення через Vosk, відправляє текст в Ollama, синтезує відповідь через Coqui TTS і стримить аудіо назад клієнту."
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
coverAlt: "Realtime audio pipeline з FastAPI, Vosk, Ollama і Coqui TTS"
tags:
  - realtime
  - audio
  - llm
  - websocket
year: 2025
seoDescription: "Realtime audio pipeline service на FastAPI, Vosk, Ollama і Coqui TTS."
---

`Speaker` - реальний проєкт 2025 року, що реалізує realtime audio pipeline. Сервіс приймає сирі аудіо-чанки через `WebSocket`, розпізнає мовлення через `Vosk`, відправляє транскрипт в `Ollama`, синтезує відповідь через `Coqui TTS` і стримить згенероване аудіо назад тому самому клієнту.

Ключова ідея проєкту - зібрати безперервний голосовий ланцюжок `ASR -> LLM -> TTS` в одному backend-сервісі, зберігши асинхронну обробку, порядок відтворення та передбачувану поведінку на рівні окремої сесії.

### Що вміє сервіс

- приймати audio stream через `ws://<host>/ws/audio`;
- валідовувати параметри аудіосесії;
- розпізнавати мовлення через `Vosk`;
- генерувати текстову відповідь через streaming API `Ollama`;
- синтезувати відповідь реченнями через async `TTS` worker pool;
- підтримувати ordered playback queue для кожної сесії;
- надсилати heartbeat і queue status події через WebSocket;
- писати session-scoped логи в `logs/session_<session_id>.log`.

### Архітектура

- `src/main.py`: точка входу `FastAPI`, setup логування, DI wiring і lifespan;
- `src/api/ws/`: WebSocket handler, connection і validation;
- `src/controlers/controller.py`: основна orchestration-логіка `ASR -> LLM -> TTS -> playback`;
- `src/controlers/session_registry.py`: runtime state для сесій;
- `src/infrastructure/`: адаптери `Vosk`, `TTS`, playback engine та infrastructural gateways;
- `src/application/`, `src/domain/`, `src/dto/`, `src/di/`: use-cases, domain objects, DTO і dependency container.

### Що важливо в цьому кейсі

Для мене це сильний backend-кейс про realtime-комунікацію й оркестрацію кількох AI/audio-компонентів усередині однієї сесії. Тут важливі не лише інтеграції самі собою, а й потокова обробка, життєвий цикл з'єднання, черги відтворення, worker pool і передбачуваність event-driven протоколу.

### Обмеження та напрям розвитку

У проєкті вже позначені зрозумілі точки для розвитку: подальше розбиття великих модулів, versioning клієнтського протоколу та глибші integration-тести для reconnect, cancellation і playback ordering під навантаженням. Для портфоліо це корисно тим, що показує не лише поточну реалізацію, а й інженерне розуміння наступного кроку.
