# CodeVura Portfolio

Projeto React + Vite com site principal multilíngue (`pt`/`en`) e demos segmentadas por nicho.

## Estrutura do projeto

```text
.
├─ public/                         # Arquivos estáticos
├─ src/
│  ├─ assets/                      # Imagens, ícones e recursos visuais
│  ├─ components/                  # Componentes compartilhados
│  │  ├─ Navbar.tsx
│  │  ├─ Footer.tsx
│  │  ├─ MainLayout.tsx
│  │  ├─ ScrollToTop.tsx
│  │  ├─ DemoFeatureGuide.tsx
│  │  └─ DemoWatermark.tsx
│  ├─ demos/                       # Demos por segmento
│  │  ├─ clinica/
│  │  ├─ curate/
│  │  ├─ marketplace/
│  │  ├─ mecanica/
│  │  ├─ restaurante/
│  │  └─ saas/
│  ├─ locales/                     # Arquivos de tradução (i18n)
│  ├─ pages/                       # Páginas do site principal (Home, Portfolio, Contact)
│  ├─ utils/                       # Helpers utilitários (rotas, idioma, etc.)
│  ├─ App.tsx                      # Mapa principal de rotas
│  ├─ main.tsx                     # Bootstrap da aplicação
│  └─ i18n.ts                      # Configuração de internacionalização
├─ .env.example                    # Exemplo de variáveis de ambiente
├─ index.html
├─ package.json
├─ tailwind.config.ts
├─ tsconfig.json
├─ vite.config.ts
└─ vercel.json
```

## Scripts

1. Instalar dependências:
   `npm install`
2. Rodar em desenvolvimento:
   `npm run dev`
3. Gerar build de produção:
   `npm run build`
4. Visualizar build local:
   `npm run preview`
