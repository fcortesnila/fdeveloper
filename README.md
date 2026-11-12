# fdeveloper

Portfolio frontend built with React, TypeScript, Vite, and Tailwind CSS.

React Router provides Home, Work, Experience, About, and Contact routes. Hash-based URLs keep direct navigation and refreshes compatible with GitHub Pages.

## Getting started

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm build
pnpm preview
```

## Test and lint

```sh
pnpm test
pnpm lint
```

## End-to-end tests

Install the Playwright Chromium browser once, then run the browser tests:

```sh
pnpm exec playwright install chromium
pnpm test:e2e
```

The Playwright config starts the Vite development server automatically. The single GitHub Actions workflow installs Chromium and runs these tests alongside the unit tests, lint, and production build on pushes and pull requests, then deploys successful builds from `main` to GitHub Pages.
