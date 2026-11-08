# david-as.github.io

Portfólio pessoal de David Amorim — https://david-as.github.io

Next.js 16 (export estático) · React 19 · Tailwind CSS 4 · TypeScript 7 · Biome · Node 26 · pnpm 12

## Comandos

```bash
pnpm install
pnpm dev        # servidor de desenvolvimento
pnpm build      # gera o site estático em ./out
pnpm lint       # Biome (lint + formatação + imports)
pnpm lint:fix   # aplica as correções do Biome
pnpm typecheck  # tsc --noEmit
```

## Conteúdo

Todo o texto do site (pt/en) fica em `src/content/profile.ts`.

O deploy para o GitHub Pages roda via `.github/workflows/nextjs.yml` a cada push na `master`.
