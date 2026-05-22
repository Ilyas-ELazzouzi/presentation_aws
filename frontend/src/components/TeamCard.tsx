import { motion } from 'framer-motion'
import { Box, Cloud, GitBranch, Shield, type LucideIcon } from 'lucide-react'
import type { TeamIconName, TeamMember } from '../data/slides'

const iconMap: Record<TeamIconName, LucideIcon> = {
  GitBranch,
  Box,
  Cloud,
  Shield,
}

interface TeamCardProps extends TeamMember {
  index: number
}

export function TeamCard({
  name,
  role,
  initials,
  color,
  icon,
  skills,
  description,
  index,
}: TeamCardProps) {
  const Icon = iconMap[icon]
  const watermark = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.02,
        borderColor: `${color}80`,
        boxShadow: `0 0 30px ${color}18`,
      }}
      className="glass-panel relative flex h-auto w-full flex-none flex-col gap-5 overflow-hidden rounded-2xl p-6"
      style={{ border: `1px solid ${color}20` }}
    >
      <span
        className="font-syne pointer-events-none absolute right-5 top-4 select-none font-black leading-none opacity-[0.05]"
        style={{ fontSize: '5rem', color }}
        aria-hidden
      >
        {watermark}
      </span>

      <div className="relative z-10 flex items-center gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${color}25, ${color}10)`,
            border: `1px solid ${color}35`,
          }}
        >
          <span className="font-syne text-[1.1rem] font-extrabold" style={{ color }}>
            {initials}
          </span>
        </div>
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <Icon size={18} color={color} strokeWidth={2} />
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="font-syne text-[1.15rem] font-bold leading-tight text-[#EEF2FF]">{name}</h3>
        <p className="mt-1 text-[0.8rem] font-medium" style={{ color }}>
          {role}
        </p>
      </div>

      <p className="relative z-10 flex-grow text-[0.82rem] leading-[1.55] text-[#64748B]">
        {description}
      </p>

      <div className="relative z-10 flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md px-2 py-0.5 font-mono text-[0.7rem]"
            style={{
              background: `${color}10`,
              color,
              border: `1px solid ${color}25`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
        style={{ background: `linear-gradient(to right, ${color}60, transparent)` }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.article>
  )
}
