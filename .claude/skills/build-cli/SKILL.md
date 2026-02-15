---
name: build-cli
description: Build the create-t3-app CLI from source. Use when the user says "/build-cli", "build the cli", "rebuild", or after making changes to CLI source files in cli/src/ that need to be compiled before testing.
---

# Build CLI

Run from the repo root:

```bash
pnpm build:cli
```

Expect output ending with `Build success`. The compiled output is at `cli/dist/index.js`.
