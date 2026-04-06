---
title: "Raspberry Pi Audio Console"
projectId: "raspberry-pi-audio-console"
locale: "en"
summary: "A Raspberry Pi client application that sends microphone audio to a WebSocket backend and plays the server response through a speaker, with a console UI and optional hardware integration."
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
seoDescription: "A Raspberry Pi client for sending microphone audio to a WebSocket backend and playing streamed responses."
---

`Raspberry Pi Audio Console` is a real 2025 project: an edge-side application for `Raspberry Pi` that streams microphone audio to a `WebSocket` backend and plays the server response through a speaker.

The project includes an interactive console UI for device selection and session control, a single-run mode for quick end-to-end checks, and a local echo `WebSocket` server for development and testing.

### What the application supports

- real-time microphone capture and speaker playback;
- both binary and JSON `WebSocket` protocol modes;
- non-blocking session execution through a session runner;
- optional local hardware integration for `LCD` and `GPIO` button control;
- safer transport defaults, including enforced `wss://` for remote endpoints.

### Project structure

- `src/application/`: session orchestration and `session_runner`;
- `src/infrastructure/`: microphone, speaker, websocket, LCD, and button adapters;
- `src/controllers/`: console workflow coordination;
- `src/ui/`: terminal and LCD presentation layer;
- `src/dto/`: message and data codecs;
- `src/config/`: env and preferences configuration;
- `src/tests/`: local server, integration helpers, and automated tests.

Entry points:

- `src/console_main.py`: interactive console mode;
- `src/main.py`: single session mode.

### Why this case matters

For me, this is a strong project at the boundary between backend integration and edge/runtime execution. It is not only about network protocol and streaming audio, but also device selection, system audio libraries, transport constraints, local hardware, and a practical way to verify the full `mic -> websocket -> speaker` path.

### Why it strengthens the portfolio

This case complements `Speaker` well: if `Speaker` shows the server-side orchestration of a voice pipeline, `Raspberry Pi Audio Console` shows the client side of the same class of problem — a real device, real audio I/O, transport rules, and a practical runtime on an edge device.
