import { motion } from 'framer-motion'
import { objectiveMetrics } from '../data/slides'

export function MetricsRow() {
  return (
    <div
      className="flex shrink-0 justify-center gap-12 border-t border-white/[0.06] pt-6 presentation:gap-16"
    >
      {objectiveMetrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.08 }}
          className="text-center"
        >
          <div className="font-syne text-[2.2rem] font-black" style={{ color: m.color }}>
            {m.value}
          </div>
          <div className="font-dm mt-1 text-[0.72rem] uppercase tracking-[0.1em] text-[#64748B]">
            {m.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
