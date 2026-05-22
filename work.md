### SLIDE 7 — PIPELINE CI/CD
Layout : FlowChart SVG en haut 65% + CodeWindow en bas 35%
Composant `PipelineDiagram.tsx` :
- 4 StageBadge lg horizontaux reliés par flèches animées
- Sous chaque badge : mini-jobs en petites pills (apparition staggered)
  - LINT : compose-lint, hadolint, yamllint, shellcheck
  - PUSH : 3 branches parallèles → ECR frontend/backend/devops
- Animation d'entrée : badges apparaissent gauche→droite, flèches se dessinent
CodeWindow : extrait .gitlab-ci.yml (6 lignes)

### SLIDE 8 — STAGE LINT
Layout : tableau gauche 55% + CodeWindow droite 45%
Tableau avec 4 outils (Tailwind table, fond alterné glass, hover row highlight)
Note en bas italique sur les jobs applicatifs

### SLIDE 9 — SÉCURITÉ TRIVY
Layout : matrice tableau en haut 40% + DonutChart bas-gauche 30% + CodeWindow bas-droite 30%
Matrice : 4 images avec badges sévérité colorés
DonutChart Recharts : données fictives réalistes
  - Lint 15% #F59E0B
  - Test 35% #10B981
  - Build 35% #3B82F6
  - Push 15% #7C3AED
  - Fond transparent, labels custom, animation de remplissage
CodeWindow : extrait test.yml matrix

### SLIDE 10 — BUILD & DIND
Layout : Diagram SVG gauche + CodeWindow droite
Diagramme build : GitLab Runner → service dind → docker compose build → 3 images

### SLIDE 11 — PUSH AWS ECR
Layout : Diagramme 3 branches haut 55% + 2 CodeWindows côte à côte bas 45%
Composant `ECRDiagram.tsx` : 3 flèches divergentes animées vers ECR repos

### SLIDE 12 — VARIABLES & BRANCHES
Layout : GitGraph SVG gauche + 3 cartes variables droite
Cartes variables : icône Lock, nom variable masqué partiellement (••••••), badge "Protected"

### SLIDE 13 — DÉFIS
Layout : 3 GlassCards problème/solution + Timeline en bas
Chaque carte : icône ⚠️ rouge + texte problème + séparateur + icône ✅ vert + solution
Timeline : 5 steps horizontaux animés en séquence avec Framer Motion

### SLIDE 14 — CONCLUSION
Layout : 2 colonnes bilan/next steps + citation en bas centré
Grande citation stylisée avec guillemets décoratifs géants en #00D4FF opacity 0.1
Noms des 4 membres en bas

---

## TRANSITIONS ENTRE SLIDES

Utiliser Framer Motion `AnimatePresence` avec `mode="wait"` :
```tsx
// Direction-aware slide transition
const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0 }),
}
// transition: { type: "spring", stiffness: 300, damping: 30 }
```

---

## FICHIER DATA (src/data/slides.ts)

Centraliser toutes les données ici :
- `teamData` : tableau des 4 membres
- `codeSnippets` : objet avec tous les extraits (gitlabCi, pipelineYml, loginEcr, pushFrontend, nginxConf, trivyTest)
- `trivyMatrix` : données du tableau Trivy
- `pipelineChartData` : données donut Recharts
- `objectives` : 3 objectifs slide 4
- `challenges` : 3 défis slide 13

---

## COMMANDES DE SETUP

Génère également un README.md avec :
```bash
npm create vite@latest hetic-devops-presentation -- --template react-ts
cd hetic-devops-presentation
npm install framer-motion tailwindcss @tailwindcss/vite lucide-react recharts react-syntax-highlighter
npm install -D @types/react-syntax-highlighter
```

Et la config tailwind.config.ts avec extend des couleurs custom.

---

## CONTRAINTES ABSOLUES

- Zéro composant UI library (pas de shadcn, MUI, Ant) — tout custom
- Zéro fond blanc ou gris clair nulle part
- Zéro animation CSS basique — tout Framer Motion
- TypeScript strict (no `any`)
- Chaque slide dans son propre fichier tsx isolé
- Le projet doit tourner avec `npm run dev` sans erreur
- Responsive uniquement pour 1920×1080 et 1280×720 (pas mobile)
- Ajouter `overflow: hidden` sur le container principal (pas de scroll)

Commence par créer la structure complète du projet, puis génère tous les composants dans l'ordre, en commençant par le design system (globals.css, tailwind.config), puis les composants UI, puis les slides.