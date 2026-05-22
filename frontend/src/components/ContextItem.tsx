import { motion } from 'framer-motion'
import type { ContextItem as ContextItemData } from '../data/slides'
import { getLucideIcon } from '../utils/lucideIcons'

interface ContextItemProps extends ContextItemData {
  index: number
}

export function ContextItem({ number, text, icon, color, tag, index }: ContextItemProps) {
  const Icon = getLucideIcon(icon)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.12, duration: 0.45 }}
      whileHover={{
        x: 6,
        borderLeftColor: color,
        backgroundColor: `${color}08`,
      }}
      className="flex h-auto flex-none items-center gap-4 rounded-xl p-4"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${color}20`,
        borderLeft: `3px solid ${color}`,
      }}
    >
      <span
        className="font-syne min-w-[2rem] text-[1.4rem] font-black opacity-40"
        style={{ color }}
      >
        {number}
      </span>

      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
      >
        <Icon size={17} color={color} strokeWidth={2} />
      </div>

      <p className="font-dm flex-1 text-[0.9rem] leading-snug text-[#CBD5E1]">{text}</p>

      <span
        className="shrink-0 rounded-md px-2 py-1 font-mono text-[0.68rem]"
        style={{
          background: `${color}12`,
          color,
          border: `1px solid ${color}25`,
        }}
      >
        {tag}
      </span>
    </motion.div>
  )
}
