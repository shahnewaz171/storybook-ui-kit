# Storybook UI Kit

React 19 component library documented in Storybook. Tailwind CSS 4 design tokens (`--sui-*`) power all components, including Dialog and Select built on Base UI.

## Tech stack

- React 19, TypeScript, Vite 8
- Tailwind CSS 4 (`src/index.css`)
- Storybook 10 (Vitest browser tests, a11y, docs, onboarding)
- Base UI (`@base-ui/react`) for Dialog and Select
- Biome, Husky

## Structure

```
src/
├── ui/                 # Design-system components + stories
├── index.css           # --sui-* tokens (light / dark via data-theme)
└── storybook-setup.ts

.storybook/             # Storybook config
```

## Story categories

Components · Transitions · Layout · Overlays · Units · Forms · Widget

## Scripts

```bash
pnpm dev              # Vite app
pnpm storybook        # Storybook on :6006
pnpm build:storybook  # Static build
pnpm test:storybook   # Component tests (Playwright)
pnpm lint             # Biome
```

## Theming

- **Preview canvas:** use the Storybook **Theme** toolbar (light / dark via `data-theme`).
- **Tokens:** edit `--sui-*` variables in `src/index.css`. Base UI components use the same Tailwind token utilities as the rest of the kit.
