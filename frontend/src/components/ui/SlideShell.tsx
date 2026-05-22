import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SlideShellProps {
  title: string
  subtitle?: string
  eyebrow?: string
  children: ReactNode
  className?: string
}

export function SlideShell({
  title,
  subtitle,
  eyebrow = 'Hetic · Groupe 6',
  children,
  className = '',
}: SlideShellProps) {
  return (
    <div
      className={`flex h-full w-full flex-col px-12 py-10 presentation:px-16 presentation:py-12 ${className}`}
    >
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 shrink-0"
      >
        <span className="font-dm text-[0.7rem] font-medium uppercase tracking-[0.15em] text-neon">
          {eyebrow}
        </span>
        <h2 className="font-syne mt-1 text-3xl font-bold leading-tight text-[#EEF2FF] presentation:text-4xl presentation-lg:text-[2.75rem]">
          {title}
        </h2>
        {subtitle && (
          <p className="font-dm mt-2 text-[0.85rem] text-[#64748B] presentation:text-base">{subtitle}</p>
        )}
      </motion.header>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  )
}
