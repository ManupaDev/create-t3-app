---
name: run-cli
description: Scaffold a new T3 app using the locally-built CLI. Use when the user says "/run-cli", "run the cli", "scaffold a project", "test the scaffolding", or wants to generate a test project from the local build. Supports pnpm as the package manager.
---

# Run CLI

Ensure the CLI is built first (`pnpm build:cli`).

## Scaffold with pnpm

```bash
pnpm start:cli -- <output-path> --CI [flags]
```

This uses Turborepo to run the CLI's `start` script. Only use with `--CI` flag — interactive mode doesn't work through Turbo.

## Available flags

| Flag | Description |
|------|-------------|
| `--tailwind` | Include Tailwind CSS |
| `--trpc` | Include tRPC |
| `--prisma` | Include Prisma ORM |
| `--drizzle` | Include Drizzle ORM |
| `--nextAuth` | Include NextAuth.js |
| `--betterAuth` | Include BetterAuth |
| `--clerk` | Include Clerk |
| `--eslint` | Include ESLint + Prettier |
| `--biome` | Include Biome |
| `--appRouter` | Use App Router (omit for Pages Router) |
| `--dbProvider <provider>` | `sqlite`, `mysql`, `postgres`, `planetscale` |

## Example: full-stack app

```bash
pnpm start:cli -- ~/Documents/Repositories/t3-test --CI --tailwind --trpc --prisma --eslint --appRouter --dbProvider sqlite
```

## Verify generated project

```bash
cd ~/Documents/Repositories/t3-test && pnpm lint && pnpm build
```
