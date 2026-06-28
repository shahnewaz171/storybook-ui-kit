# Storybook UI Kit

React 19 component library documented in Storybook. Tailwind CSS 4 design tokens (`--sn-*`) power most components; MUI is used only for Dialog and Select.

## Tech stack

- React 19, TypeScript, Vite 8
- Tailwind CSS 4 (`src/index.css`)
- Storybook 10 (Vitest browser tests, a11y, docs, onboarding)
- MUI 9 + Emotion (Dialog, Select only)
- Biome, Husky

## Structure

```
src/
├── ui/                 # Design-system components + stories
├── theme/              # CSS-var bridge for MUI (sn-css-vars, mui-theme)
├── providers/          # MuiThemeProvider
├── index.css           # --sn-* tokens (light / dark via data-theme)
└── storybook-setup.ts

.storybook/             # Storybook config
```

## Story categories

Components · Transitions · Layout · Overlays · Units · Forms · Widget

## Scripts

```bash
pnpm dev              # Vite app
pnpm storybook        # Storybook on :6006
pnpm build-storybook  # Static build
pnpm test:storybook   # Component tests (Playwright)
pnpm lint             # Biome
```

## Theming

- **Preview canvas:** use the Storybook **Theme** toolbar (light / dark via `data-theme`).
- **Tokens:** edit `--sn-*` variables in `src/index.css`.
- **MUI:** reads resolved CSS variables at runtime; complex components stay in sync with the preview theme.
