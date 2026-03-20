# Overview

Shared ESLint flat config package published to npm as `@softopus/eslint-config`. Consumed by other projects via `import config from "@softopus/eslint-config"`.

- Use `yarn` as package manager
- Use `make` commands for all tasks

# Tools

- `make install` — install dependencies
- `make test` — run tests
- `make lint` — run lint
- `make qa` — run tests and lint
- `make pack` — simulate publish (dry run)

# Publishing

Publishing is done via CI only (`release.yml`) using npm OIDC provenance — no token required. Do not publish manually.

# Code Style

- `index.js` is the only published file — keep it as the single export
- `scripts/` is internal tooling, excluded from linting
- ESM only (`"type": "module"`)
