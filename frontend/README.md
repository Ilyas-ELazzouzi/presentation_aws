# Hetic DevOps Presentation

Présentation interactive **Pipeline CI/CD GitLab → AWS ECR** (slides 7–14 détaillées + intro).

## Setup

```bash
npm create vite@latest hetic-devops-presentation -- --template react-ts
cd hetic-devops-presentation
npm install framer-motion tailwindcss @tailwindcss/vite lucide-react recharts react-syntax-highlighter
npm install -D @types/react-syntax-highlighter
```

Ce dépôt utilise le dossier `frontend/` déjà configuré. Depuis ce dossier :

```bash
npm install
npm run dev
```

## Navigation

- **→** / **Espace** : slide suivante
- **←** : slide précédente
- **Home** / **End** : première / dernière slide
- Clic sur les points ou les flèches en bas

## Résolutions cibles

- 1920×1080
- 1280×720

## Stack

- React 19 + TypeScript strict
- Vite 8
- Tailwind CSS 4 (couleurs custom dans `tailwind.config.ts`)
- Framer Motion (transitions & animations)
- Recharts (donut slide 9)
- react-syntax-highlighter (fenêtres de code)

## Structure

```
src/
├── data/slides.ts      # Données centralisées
├── components/         # PipelineDiagram, ECRDiagram, GitGraph…
├── components/ui/      # CodeWindow, StageBadge, GlassCard…
└── slides/             # Slide01.tsx … Slide14.tsx (un fichier par slide)
```

## Build

```bash
npm run build
npm run preview
```
