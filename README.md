# david-as.github.io

Portfólio pessoal de David Amorim — https://david-as.github.io

Next.js 16 (export estático) · React 19 · Tailwind CSS 4 · TypeScript 7 · Biome

## Comandos

```bash
npm install
npm run dev        # servidor de desenvolvimento
npm run build      # gera o site estático em ./out
npm run lint       # Biome (lint + formatação + imports)
npm run lint:fix   # aplica as correções do Biome
npm run typecheck  # tsc --noEmit
```

## Conteúdo

Todo o texto do site (pt/en) fica em `src/content/profile.ts`.

O deploy para o GitHub Pages roda via `.github/workflows/nextjs.yml` a cada push na `master`.
