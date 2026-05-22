import { motion } from 'framer-motion'
import { SlideShell } from '../components/ui/SlideShell'
import { teamData } from '../data/slides'

export function Slide02() {
  return (
    <SlideShell title="Équipe projet" subtitle="4 membres — rôles DevOps">
      <div className="grid h-full grid-cols-2 gap-4 presentation:gap-6">
        {teamData.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="glass-panel flex flex-col justify-center rounded-2xl px-6 py-5"
          >
            <p className="text-lg font-semibold text-slate-100 presentation:text-xl">{member.name}</p>
            <p className="mt-1 text-sm text-neon/90">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  )
}
