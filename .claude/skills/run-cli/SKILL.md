---
name: run-cli
description: Scaffold a new T3 app using the locally-built CLI. Use when the user says "/run-cli", "run the cli", "scaffold a project", "test the scaffolding", or wants to generate a test project from the local build. Supports pnpm as the package manager.
---

# Run CLI

Ensure the CLI is built first (`cd cli && pnpm build`).

## Scaffold with pnpm

```bash
npm_config_user_agent="pnpm/9.0.0" node cli/dist/index.js <output-path> --CI [flags]
```

The `npm_config_user_agent` env var is required to simulate `pnpm create` behavior (installs with pnpm, copies `.npmrc`, sets `packageManager` field).

## Available flags

| Flag | Description |
|------|-------------|
| `--tailwind` | Include Tailwind CSS |
| `--trpc` | Include tRPC |
| `--prisma` | Include Prisma ORM |
| `--drizzle` | Include Drizzle ORM |
| `--nextAuth` | Include NextAuth.js |
| `--betterAuth` | Include BetterAuth |
| `--eslint` | Include ESLint + Prettier |
| `--biome` | Include Biome |
| `--appRouter` | Use App Router (omit for Pages Router) |
| `--dbProvider <provider>` | `sqlite`, `mysql`, `postgres`, `planetscale` |

## Example: full-stack app

```bash
npm_config_user_agent="pnpm/9.0.0" node cli/dist/index.js /tmp/t3-test --CI --tailwind --trpc --prisma --eslint --appRouter --dbProvider sqlite
```

## Verify generated project

```bash
cd /tmp/t3-test && pnpm lint && pnpm build
```
