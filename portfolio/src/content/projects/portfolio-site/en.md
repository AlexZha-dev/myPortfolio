---
title: "myPortfolio"
projectId: "portfolio-site"
locale: "en"
summary: "A personal portfolio website built with React and TypeScript, featuring markdown-driven content, multilingual architecture, hash-based project modals, and a custom Vite loader for sections and case studies."
stack:
  - React
  - TypeScript
  - Vite
  - Markdown
  - Zod
featured: false
sortOrder: 20
status: "published"
translationState: "ready"
repoUrl: "https://github.com/AlexZha-dev/myPortfolio"
cover: "./cover.svg"
coverAlt: "Architecture overview of the myPortfolio site"
tags:
  - portfolio
  - frontend
  - markdown
  - i18n
year: 2026
seoDescription: "A multilingual content-driven portfolio site with markdown architecture, a custom Vite loader, and page-based UI composition."
---

`myPortfolio` is the portfolio website itself, treated as a project inside the same repository. It exists not only as a showcase for my other work, but also as a standalone technical case around content architecture, localization, markdown loading, and a clean UI structure.

The site is built with `React 19`, `TypeScript`, and `Vite`. The main architectural idea is that content lives separately from presentation. Page sections and project cards are loaded from `src/content/pages` and `src/content/projects`, pass through a custom markdown loader in `vite.config.ts`, are validated with `zod`, and only then are rendered into the UI.

### How the structure is organized

- `src/app`: application entry layer;
- `src/pages/home`: the main page split into `ui` and `styles`;
- `src/content`: markdown content for sections and projects;
- `src/content/loaders`: content assembly and locale-aware delivery;
- `src/i18n`: interface dictionaries for `ru`, `en`, `fi`, and `uk`;
- `src/shared`: schemas, types, markdown renderer, and support utilities.

It also matters that the structure is already prepared for further scaling with `app`, `pages`, `shared`, `config`, and `content`, while reserving boundaries for `entities`, `features`, and `widgets`.

### What is implemented here

- multilingual UI in `ru`, `en`, `fi`, and `uk`;
- markdown-driven case studies and page sections;
- frontmatter validation through `zod`;
- locale-aware content loading with fallback behavior;
- hash-based project modal opening;
- split page styles for shell, atmosphere, sections, modal, and responsive layers;
- a custom visual direction in a `Premium Tech` style.

### Why this case matters

This site reflects how I approach engineering even on the frontend side: I do not keep everything inside large components and hardcoded strings, but instead build a system where content is separated from presentation, localization is part of the architecture, and the project stays easy to extend over time.

### What makes this implementation valuable

For me, this is not just a personal landing page. It is a small content platform where new projects, locales, sections, and UI blocks can be added without rewriting the entire page. In practice, it works as a compact content engine for a technical portfolio.
