import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function GlassCard({ children, className = '', delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`glass-panel rounded-2xl p-5 presentation:p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}
