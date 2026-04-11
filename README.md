# React 19 Boilerplate

A production-ready boilerplate for building React 19 applications with TypeScript, featuring a feature-based architecture, modern tooling, and best practices baked in.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.8 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Routing | React Router 7 |
| Forms | React Hook Form + Zod |
| Animation | Framer Motion |
| Icons | Lucide React |
| Notifications | Sonner |
| Compiler | React Compiler (Babel) |
| Linter/Formatter | Biome |
| Git Hooks | Husky + lint-staged |

## Project Structure

```
src/
├── assets/                  # Static assets (images, fonts, etc.)
├── components/
│   ├── core/                # App-wide core components
│   │   ├── ErrorBoundary.tsx
│   │   └── NotificationProvider.tsx
│   ├── icons/               # Custom icon components
│   ├── layouts/             # Layout wrappers
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── PrivateLayout.tsx   # Authenticated route wrapper
│   │   └── PublicLayout.tsx    # Public route wrapper
│   └── ui/                  # Reusable UI primitives
│       ├── Button.tsx
│       └── form/
│           └── Input.tsx
├── data/                    # Static/mock data
├── features/                # Feature-based modules
│   └── authentication/      # Self-contained auth feature
│       ├── auth-actions.ts
│       ├── auth-queries.ts
│       ├── auth-schema.ts   # Zod validation schemas
│       ├── auth-types.ts
│       ├── components/
│       │   ├── login/
│       │   └── register/
│       ├── hooks/
│       ├── services/
│       └── utils/
├── hooks/                   # Shared custom hooks
├── lib/
│   ├── axiosConfig.ts       # Axios instance & interceptors
│   └── router/
│       ├── index.ts         # Route definitions
│       └── lazy-routes.ts   # Lazy-loaded page components
├── pages/                   # Top-level page components
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   └── NotFound.tsx
├── store/
│   ├── context/             # React Context store
│   └── redux/               # Redux store (placeholder)
├── types/                   # Global TypeScript types
│   ├── Auth.ts
│   └── User.ts
└── utils/                   # Shared utility functions
    ├── cn.ts                # Tailwind class merging (clsx + tailwind-merge)
    ├── date.ts
    ├── env.ts               # Type-safe environment variables
    ├── motion.ts            # Framer Motion variants
    └── validation.ts
```

## Architecture

### Feature-Based Structure

Each feature under `src/features/` is self-contained and includes its own components, hooks, services, schemas, and types. This keeps related code co-located and makes features easy to add, modify, or remove.

### Routing

Routes are defined in `src/lib/router/index.ts` using React Router 7. Pages are lazy-loaded via `lazy-routes.ts` for optimal bundle splitting. Routes are split into `PrivateLayout` (authenticated) and `PublicLayout` (unauthenticated) wrappers.

### Forms & Validation

Forms are built with **React Hook Form** and validated with **Zod** schemas. Schemas live alongside their feature (`auth-schema.ts`) and are reused for both form validation and TypeScript types via `z.infer<>`.

### Styling

Tailwind CSS 4 is used via the `@tailwindcss/vite` plugin. The `cn()` utility in `src/utils/cn.ts` combines `clsx` and `tailwind-merge` for safe conditional class composition.

## Code Quality

- **Biome** handles both linting and formatting (replaces ESLint + Prettier).
- **Husky** runs lint-staged checks on pre-commit.
- **React Compiler** is enabled via Babel for automatic memoization.
- TypeScript strict mode is enabled.

## Environment Variables

Add environment variables to a `.env` file at the project root. Access them in a type-safe manner via `src/utils/env.ts`.

```env
VITE_API_URL=https://api.example.com
```
