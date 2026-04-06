---
title: "Test Ollama Models"
projectId: "test-ollama-models"
locale: "en"
summary: "A desktop benchmarking app for Ollama-compatible models: shared prompt sets, configurable concurrency, generated answers, latency, token metrics, and TPS in a Flet UI."
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
seoDescription: "A desktop app for comparing Ollama-compatible models by latency, token count, and TPS."
---

`Test Ollama Models` is a real 2025 project for benchmarking local and remote `Ollama`-compatible models through a desktop interface built with `Flet`.

The application lets you configure a list of models and prompts, run the same question set against multiple models, control concurrency, inspect generated answers, and compare `latency`, `token count`, and `tokens per second` metrics collected during each run.

### What the app supports

- running the same prompt set against multiple models;
- controlling `concurrency` to simulate parallel usage;
- tracking progress in the main console and per-instance consoles;
- reviewing generated answers in a dedicated tab;
- visualizing live and historical metrics for latency, token count, and TPS;
- automatically persisting settings and run results in `SQLite` inside the `Data/` directory.

### How the project is structured

The app starts from `main.py`, builds the dependency container, and renders a tab-based interface with four main areas:

- `Run Tests`
- `Answers`
- `Metrics`
- `Settings`

During a run, the application:

1. Loads the configured models and API endpoint.
2. Performs a health check for each selected model.
3. Sends each question to the `Ollama /api/generate` endpoint.
4. Measures latency, token count, and tokens per second for every response.
5. Saves raw and averaged results into `SQLite`.
6. Streams logs, answers, and chart data back into the UI through the internal event-driven flow.

### Tech stack

- `Python 3.11`
- `Flet`
- `requests`
- `SQLite`
- `dependency-injector`
- `pytest`, `black`, `isort`, `flake8`, `mypy`, `bandit`, `pre-commit`

### Why this case matters

This project shows me not only as an API and Telegram developer, but also as someone who builds practical tooling for model evaluation: with metrics, result persistence, desktop UI, and a clean separation into `UI`, `Presenter`, `Application`, `Domain`, `Gateway`, and `Infrastructure` layers.
