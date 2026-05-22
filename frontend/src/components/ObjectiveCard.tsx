import { motion } from 'framer-motion'
import type { Objective } from '../data/slides'
import { getLucideIcon } from '../utils/lucideIcons'

interface ObjectiveCardProps extends Objective {
  index: number
}

export function ObjectiveCard({
  icon,
  title,
  description,
  tags,
  color,
  number,
  index,
}: ObjectiveCardProps) {
  const Icon = getLucideIcon(icon)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.13,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4, boxShadow: `0 20px 60px ${color}15` }}
      className="relative flex h-auto w-full flex-none flex-col gap-5 overflow-hidden rounded-2xl p-7"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${color}20`,
      }}
    >
      <span
        className="font-syne pointer-events-none absolute right-5 top-4 select-none font-black leading-none opacity-[0.05]"
        style={{ fontSize: '5rem', color }}
        aria-hidden
      >
        {number}
      </span>

      <div
        className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
      >
        <Icon size={24} color={color} strokeWidth={1.5} />
      </div>

      <h3 className="font-syne relative z-10 text-[1.25rem] font-bold text-[#EEF2FF]">{title}</h3>

      <p className="font-dm relative z-10 text-[0.88rem] leading-[1.6] text-[#64748B]">
        {description}
      </p>

      <div className="relative z-10 mt-auto flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg px-2.5 py-1 font-mono text-[0.7rem]"
            style={{
              background: `${color}10`,
              color,
              border: `1px solid ${color}25`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(to right, ${color}70, transparent)` }}
      />
    </motion.article>
  )
}
