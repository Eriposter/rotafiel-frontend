# ROTA FIEL — Website

Site institucional da **ROTA FIEL**, empresa angolana de comércio e prestação de serviços vocacionada para o
provisionamento e fornecimento de materiais, equipamentos e soluções para operações industriais.

## Stack

- **Angular 21** (standalone components, signals, zoneless, SSR-ready)
- **Tailwind CSS v4** (tema personalizado `brand` / `accent` em `src/styles.css`)
- Componentes com **separação TS / HTML / CSS** (`templateUrl` + `styleUrl`)

## Estrutura

```
src/app/
├── core/services/company-data.service.ts   # Dados centralizados (serviços, setores, contactos…)
├── shared/components/
│   ├── header/    (header.ts | header.html | header.css)
│   └── footer/    (footer.ts | footer.html | footer.css)
├── pages/
│   ├── home/        →  /            Início (hero, stats, serviços, setores, processo, CTA)
│   ├── sobre/       →  /sobre       Missão, Visão, Valores, diferenciais
│   ├── servicos/    →  /servicos    Serviços detalhados + metodologia
│   ├── setores/     →  /setores     Setores de actividade
│   └── contactos/   →  /contactos   Info + formulário de pedido de cotação
├── app.routes.ts    # Rotas lazy-loaded
└── app.config.ts    # provideRouter + scroll restoration
```

## Desenvolvimento

```bash
npm install
npm start          # http://localhost:4200
npm run build      # build de produção em dist/
```

> Conteúdos editoráveis (textos, serviços, contactos) estão todos em `CompanyDataService` — basta alterar um ficheiro.
