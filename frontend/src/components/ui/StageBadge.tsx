import { motion } from 'framer-motion'

interface StageBadgeProps {
  label: string
  color: string
  size?: 'md' | 'lg'
  delay?: number
}

export function StageBadge({ label, color, size = 'md', delay = 0 }: StageBadgeProps) {
  const isLg = size === 'lg'
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: -24 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ delay, type: 'spring', stiffness: 280, damping: 22 }}
      className={`flex items-center justify-center rounded-xl border font-bold tracking-widest ${
        isLg
          ? 'h-14 min-w-[5.5rem] px-5 text-sm presentation:h-16 presentation:text-base presentation-lg:h-[4.5rem] presentation-lg:text-lg'
          : 'h-9 min-w-[4rem] px-3 text-xs'
      }`}
      style={{
        borderColor: `${color}55`,
        background: `${color}18`,
        color,
        boxShadow: `0 0 20px ${color}22`,
      }}
    >
      {label}
    </motion.div>
  )
}
