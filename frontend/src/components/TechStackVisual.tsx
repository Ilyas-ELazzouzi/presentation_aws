import { motion } from 'framer-motion'
import type { TechStackEntry } from '../data/slides'
import { techStack } from '../data/slides'
import { getLucideIcon } from '../utils/lucideIcons'

interface TechCardProps extends TechStackEntry {
  index: number
}

function TechCard({ label, sublabel, color, icon, index }: TechCardProps) {
  const Icon = getLucideIcon(icon)

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 + index * 0.08, duration: 0.45 }}
      whileHover={{
        scale: 1.03,
        borderColor: `${color}50`,
        boxShadow: `0 8px 24px ${color}12`,
      }}
      className="glass-panel flex h-auto flex-col gap-2 rounded-xl p-3"
      style={{ border: `1px solid ${color}18` }}
    >
      <div
        className="flex h-9 w-9 items-center justify-center rounded-lg"
        style={{ background: `${color}18`, border: `1px solid ${color}35` }}
      >
        <Icon size={18} color={color} strokeWidth={2} />
      </div>
      <p className="font-syne text-sm font-bold leading-tight text-[#EEF2FF]">{label}</p>
      <p className="font-dm text-[0.68rem] text-[#64748B]">{sublabel}</p>
    </motion.div>
  )
}

export function TechStackVisual() {
  return (
    <div className="flex h-auto flex-col gap-4">
      <span className="font-dm text-[0.7rem] uppercase tracking-[0.12em] text-[#64748B]">
        Stack technique
      </span>
      <div className="grid grid-cols-3 items-start gap-3">
        {techStack.map((tech, i) => (
          <TechCard key={tech.label} {...tech} index={i} />
        ))}
      </div>
    </div>
  )
}
