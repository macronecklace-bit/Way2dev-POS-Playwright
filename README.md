# Playwright JavaScript + Cucumber BDD Framework

A maintainable UI automation framework using Playwright, Cucumber BDD, and the Page Object Model.

## Prerequisites

- Node.js 18 or newer
- npm

## Install

```bash
npm install
npx playwright install chromium
```

Copy `.env.example` to `.env` when you need custom settings.

## Run tests

```bash
npm test
```

Useful commands:

```bash
npm run test:dry-run  # Validate feature and step discovery without opening a browser
npm run test:smoke    # Run scenarios tagged @smoke
npm run test:headed   # Run with a visible Chromium window
```

The HTML report is generated at `reports/cucumber-report.html`. Failed screenshots, videos, and traces are stored under `reports/`.

## Project structure

```text
features/                 Gherkin feature files
src/pages/                Page Object Model classes
src/steps/                Cucumber step definitions
src/support/hooks.js      Browser and scenario lifecycle
src/support/world.js      Shared scenario context
cucumber.js               Cucumber configuration
playwright.config.js      Playwright runtime configuration
```

## Configuration

Runtime values can be supplied through `.env` or the command line:

- `BASE_URL`: Application URL
- `HEADLESS`: Set to `false` for headed execution
- `SLOW_MO`: Delay Playwright actions in milliseconds
- `PLAYWRIGHT_TIMEOUT`: Default Cucumber step timeout in milliseconds
- `SCREENSHOT`, `VIDEO`, `TRACE`: Set to `off` to disable artifacts
