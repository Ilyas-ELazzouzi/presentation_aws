import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SlideShellProps {
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function SlideShell({ title, subtitle, children, className = '' }: SlideShellProps) {
  return (
    <div className={`flex h-full w-full flex-col px-8 py-6 presentation:px-12 presentation-lg:px-16 ${className}`}>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-4 shrink-0"
      >
        <h2 className="text-2xl font-bold tracking-tight text-neon presentation:text-3xl presentation-lg:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-slate-400 presentation:text-base">{subtitle}</p>
        )}
      </motion.header>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  )
}
