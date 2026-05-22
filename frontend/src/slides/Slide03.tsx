import { motion } from 'framer-motion'
import { SlideShell } from '../components/ui/SlideShell'

const contextPoints = [
  'Monorepo Docker Compose : frontend React, backend API, nginx, outils DevOps',
  'GitLab CI comme orchestrateur unique des stages lint → push',
  'Registry cible : Amazon ECR (3 repositories dédiés)',
  'Contrainte : zéro déploiement manuel sur la branche main',
]

export function Slide03() {
  return (
    <SlideShell title="Contexte" subtitle="Projet fil rouge — infrastructure as pipeline">
      <ul className="flex h-full flex-col justify-center gap-5">
        {contextPoints.map((point, i) => (
          <motion.li
            key={point}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.12 }}
            className="glass-panel flex items-start gap-4 rounded-xl px-5 py-4 text-slate-300 presentation:text-lg"
          >
            <span className="mt-0.5 shrink-0 font-bold text-neon">{String(i + 1).padStart(2, '0')}</span>
            {point}
          </motion.li>
        ))}
      </ul>
    </SlideShell>
  )
}
