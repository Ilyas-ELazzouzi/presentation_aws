import { motion } from 'framer-motion'
import { SlideShell } from '../components/ui/SlideShell'
import { objectives } from '../data/slides'

export function Slide04() {
  return (
    <SlideShell title="Objectifs" subtitle="3 axes pour valider le pipeline">
      <div className="grid h-full grid-cols-3 gap-4 presentation:gap-6">
        {objectives.map((obj, i) => (
          <motion.div
            key={obj.title}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="glass-panel flex flex-col rounded-2xl p-6"
          >
            <span className="text-3xl presentation:text-4xl">{obj.icon}</span>
            <h3 className="mt-4 text-lg font-bold text-neon presentation:text-xl">{obj.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400 presentation:text-base">
              {obj.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  )
}
