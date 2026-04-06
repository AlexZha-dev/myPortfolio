---
title: "Speaker"
projectId: "speaker"
locale: "en"
summary: "A realtime audio agent built on FastAPI: receives audio over WebSocket, transcribes with Vosk, sends text to Ollama, synthesizes the reply with Coqui TTS, and streams audio back to the client."
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
seoDescription: "A realtime audio pipeline service built with FastAPI, Vosk, Ollama, and Coqui TTS."
---

`Speaker` is a real 2025 project implementing a realtime audio pipeline. The service receives raw audio chunks over `WebSocket`, transcribes speech with `Vosk`, sends the transcript to `Ollama`, synthesizes the response with `Coqui TTS`, and streams the generated audio back to the same client.

The core idea is to keep an `ASR -> LLM -> TTS` voice chain inside one backend service while preserving async processing, playback ordering, and predictable behavior at the per-session level.

### What the service supports

- realtime audio ingestion through `ws://<host>/ws/audio`;
- validation of audio session parameters;
- speech-to-text with `Vosk`;
- response generation through the `Ollama` streaming API;
- sentence-by-sentence synthesis through an async `TTS` worker pool;
- ordered playback queues per session;
- WebSocket heartbeat and queue status events;
- session-scoped logs in `logs/session_<session_id>.log`.

### Architecture

- `src/main.py`: `FastAPI` entrypoint, logging setup, DI wiring, and lifespan;
- `src/api/ws/`: WebSocket handler, connection, and validation;
- `src/controlers/controller.py`: main `ASR -> LLM -> TTS -> playback` orchestration;
- `src/controlers/session_registry.py`: runtime session state;
- `src/infrastructure/`: `Vosk`, `TTS`, playback adapters, and infra gateways;
- `src/application/`, `src/domain/`, `src/dto/`, `src/di/`: use cases, domain objects, DTOs, and dependency container.

### Why this case matters

For me, this is a strong backend case around realtime communication and orchestration across multiple AI and audio components inside a single session. The challenge is not only the integrations themselves, but also streaming flow control, connection lifecycle, playback queues, worker pools, and the predictability of an event-driven protocol.

### Limitations and next steps

The project already identifies clear next improvements: splitting large modules further, introducing protocol versioning, and adding deeper integration coverage for reconnects, cancellation, and playback ordering under load. That makes it useful as a portfolio case because it shows not only the current implementation, but also the engineering view of what should come next.
