---
title: "Test Ollama Models"
projectId: "test-ollama-models"
locale: "uk"
summary: "Desktop-застосунок для benchmarking Ollama-compatible моделей: єдиний набір промптів, налаштовувана concurrency, відповіді, latency, token-метрики й TPS у Flet UI."
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
coverAlt: "Desktop dashboard для benchmarking Ollama-compatible моделей"
tags:
  - llm
  - benchmarking
  - desktop
  - ollama
year: 2025
seoDescription: "Desktop-застосунок для порівняння Ollama-compatible моделей за latency, tokens і TPS."
---

`Test Ollama Models` - реальний проєкт 2025 року для benchmarking локальних і віддалених `Ollama`-compatible моделей через desktop-інтерфейс на `Flet`.

Застосунок дозволяє налаштувати список моделей і промптів, проганяти один і той самий набір запитань по кількох моделях, керувати рівнем паралелізму, дивитися відповіді та порівнювати метрики `latency`, `token count` і `tokens per second`, зібрані під час кожного запуску.

### Що вміє застосунок

- запускати один і той самий набір промптів по кількох моделях;
- керувати `concurrency`, щоб симулювати паралельне навантаження;
- показувати прогрес в основному console-view і в окремих instance-консолях;
- відкривати відповіді моделей в окремій вкладці;
- візуалізувати live і historical метрики для latency, token count і TPS;
- автоматично зберігати налаштування й результати запусків у `SQLite` всередині директорії `Data/`.

### Як влаштований проєкт

Застосунок стартує з `main.py`, підіймає dependency container і рендерить tab-based інтерфейс із чотирма основними зонами:

- `Run Tests`
- `Answers`
- `Metrics`
- `Settings`

Під час запуску застосунок:

1. Завантажує моделі та адресу API.
2. Робить health check для вибраних моделей.
3. Надсилає запитання в `Ollama /api/generate`.
4. Рахує latency, token count і tokens per second для кожної відповіді.
5. Зберігає raw і averaged результати в `SQLite`.
6. Прокидує логи, відповіді та графіки назад у UI через внутрішню event-driven логіку.

### Технічний стек

- `Python 3.11`
- `Flet`
- `requests`
- `SQLite`
- `dependency-injector`
- `pytest`, `black`, `isort`, `flake8`, `mypy`, `bandit`, `pre-commit`

### Що важливо в цьому кейсі

Цей проєкт показує мене не лише з боку API й Telegram-ботів, а і як розробника tooling для прикладного тестування моделей: з метриками, збереженням результатів, desktop UI і чистим розбиттям коду на шари `UI`, `Presenter`, `Application`, `Domain`, `Gateway` та `Infrastructure`.
