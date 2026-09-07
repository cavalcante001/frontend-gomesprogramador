<div align="center">


[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MUI](https://img.shields.io/badge/MUI-v9-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-v11-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)

<br />

[Acessar gomesprogramador.com.br](https://gomesprogramador.com.br) • [LinkedIn](https://www.linkedin.com/in/paulo-cavalcante-21037b225/) • [GitHub](https://github.com/cavalcante001)

</div>

---

## Sobre o Projeto

Código-fonte do portfólio disponível em [gomesprogramador.com.br](https://gomesprogramador.com.br).

### Destaques de Engenharia & Arquitetura
- **App Router com Turbopack**: renderização estática ultra-otimizada (SSG) e Server Components.
- **Material UI (MUI v9) + Emotion SSR**: integrado via `@mui/material-nextjs` para renderização limpa e zero flash de estilo.
- **Geração Dinâmica de PDF**: endpoint nativo de servidor (`/api/curriculo`) que compila o currículo em tempo real via `@react-pdf/renderer`.
- **Supply-Chain Seguro com pnpm v11**: configuração com lockfile estrito e políticas de integridade.

---

## Stack Tecnológica

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Linguagem:** [TypeScript 5](https://www.typescriptlang.org/)
- **Biblioteca de UI:** [React 19](https://react.dev/)
- **Estilização & Componentes:** [Material UI (MUI 9)](https://mui.com/) & [TailwindCSS v4](https://tailwindcss.com/)
- **Geração de PDF:** [@react-pdf/renderer](https://react-pdf.org/)
- **Package Manager:** [pnpm](https://pnpm.io/)

---

## Estrutura de Pastas

```text
├── app/
│   ├── _components/       # Componentes globais e seções da Home (Hero, Education, etc.)
│   ├── _lib/              # Provedores, tema MUI e utilitários
│   ├── api/               # Route Handlers / endpoints backend (ex: /api/curriculo)
│   ├── artigos/           # Páginas estáticas com SSG dos artigos
│   ├── layout.tsx         # Layout raiz e fontes
│   └── page.tsx           # Página inicial (Home)
├── content/
│   └── site.ts            # Única fonte da verdade de dados do portfólio
├── public/                # Assets públicos (imagens, badges, certificados, vídeos)
└── package.json
```

---

## Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 20 ou 24 recomendada)
- [pnpm](https://pnpm.io/) (`corepack enable pnpm`)

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/cavalcante001/frontend-gomesprogramador.git
   cd frontend-gomesprogramador
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   pnpm dev
   ```

4. Acesse no navegador: [http://localhost:3000](http://localhost:3000)
