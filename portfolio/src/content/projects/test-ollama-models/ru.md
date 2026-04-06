---
title: "Test Ollama Models"
projectId: "test-ollama-models"
locale: "ru"
summary: "Desktop-приложение для benchmarking Ollama-compatible моделей: единый набор промптов, настраиваемая concurrency, ответы, latency, token-метрики и TPS в Flet UI."
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
seoDescription: "Desktop-приложение для сравнения Ollama-compatible моделей по latency, tokens и TPS."
---

`Test Ollama Models` — реальный проект 2025 года для benchmarking локальных и удалённых `Ollama`-compatible моделей через desktop-интерфейс на `Flet`.

Приложение позволяет настроить список моделей и промптов, прогонять один и тот же набор вопросов по нескольким моделям, управлять уровнем параллелизма, смотреть ответы и сравнивать метрики `latency`, `token count` и `tokens per second`, собранные во время каждого запуска.

### Что умеет приложение

- запускать один и тот же набор промптов по нескольким моделям;
- управлять `concurrency`, чтобы симулировать параллельную нагрузку;
- показывать прогресс в основном console-view и отдельных instance-консолях;
- открывать ответы моделей в отдельной вкладке;
- визуализировать live и historical метрики для latency, token count и TPS;
- автоматически сохранять настройки и результаты запусков в `SQLite` внутри директории `Data/`.

### Как устроен проект

Приложение стартует из `main.py`, поднимает dependency container и рендерит tab-based интерфейс с четырьмя основными зонами:

- `Run Tests`
- `Answers`
- `Metrics`
- `Settings`

Во время запуска приложение:

1. Загружает модели и адрес API.
2. Делает health check для выбранных моделей.
3. Отправляет вопросы в `Ollama /api/generate`.
4. Считает latency, token count и tokens per second для каждого ответа.
5. Сохраняет raw и averaged результаты в `SQLite`.
6. Прокидывает логи, ответы и графики обратно в UI через внутреннюю event-driven логику.

### Технический стек

- `Python 3.11`
- `Flet`
- `requests`
- `SQLite`
- `dependency-injector`
- `pytest`, `black`, `isort`, `flake8`, `mypy`, `bandit`, `pre-commit`

### Что важно в этом кейсе

Этот проект показывает меня не только со стороны API и Telegram-ботов, но и как разработчика tooling для прикладного тестирования моделей: с метриками, хранением результатов, desktop UI и чистым разбиением кода на слои `UI`, `Presenter`, `Application`, `Domain`, `Gateway` и `Infrastructure`.
