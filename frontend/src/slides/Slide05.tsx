import { motion } from 'framer-motion'
import { SlideShell } from '../components/ui/SlideShell'

const stack = [
  { name: 'GitLab CI', desc: 'Orchestration YAML multi-fichiers', color: '#F59E0B' },
  { name: 'Docker + DinD', desc: 'Build images dans le job', color: '#3B82F6' },
  { name: 'Trivy', desc: 'Scan CVE sur matrice d\'images', color: '#10B981' },
  { name: 'AWS ECR', desc: 'Registry privé par service', color: '#7C3AED' },
]

export function Slide05() {
  return (
    <SlideShell title="Stack technique" subtitle="Outils du pipeline">
      <div className="flex h-full items-center justify-center gap-6 presentation:gap-10">
        {stack.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.12, type: 'spring' }}
            className="glass-panel flex h-48 w-44 flex-col items-center justify-center rounded-2xl p-4 presentation:h-56 presentation:w-52"
            style={{ borderColor: `${item.color}33` }}
          >
            <div
              className="mb-3 h-12 w-12 rounded-xl"
              style={{ background: `${item.color}22`, boxShadow: `0 0 16px ${item.color}33` }}
            />
            <p className="font-bold" style={{ color: item.color }}>
              {item.name}
            </p>
            <p className="mt-2 text-center text-xs text-slate-400 presentation:text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  )
}
