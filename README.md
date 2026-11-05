# fdeveloper

Portfolio frontend built with React, TypeScript, Vite, and Tailwind CSS.

React Router provides Home, Work, Experience, About, and Contact routes. Hash-based URLs keep direct navigation and refreshes compatible with GitHub Pages.

## Getting started

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Test and lint

```sh
npm test
npm run lint
```

## End-to-end tests

Install the Playwright Chromium browser once, then run the browser tests:

```sh
npx playwright install chromium
npm run test:e2e
```

The Playwright config starts the Vite development server automatically. GitHub Actions installs Chromium and runs these tests alongside the unit tests, lint, and production build on pushes and pull requests.
