import { motion } from 'framer-motion'
import { timelineSteps } from '../../data/slides'

export function Timeline() {
  return (
    <div className="flex w-full items-start justify-between gap-2">
      {timelineSteps.map((step, index) => (
        <motion.div
          key={step.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8 + index * 0.18,
            type: 'spring',
            stiffness: 260,
            damping: 24,
          }}
          className="relative flex flex-1 flex-col items-center"
        >
          {index < timelineSteps.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1 + index * 0.18, duration: 0.35 }}
              className="absolute left-[calc(50%+1rem)] top-4 h-0.5 w-[calc(100%-2rem)] origin-left bg-neon/40"
            />
          )}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9 + index * 0.18, type: 'spring', stiffness: 300 }}
            className="font-syne z-10 flex h-8 w-8 items-center justify-center rounded-full border border-neon/50 bg-deep text-xs font-bold text-neon"
          >
            {index + 1}
          </motion.div>
          <p className="font-syne mt-2 text-center text-xs font-semibold text-[#EEF2FF] presentation:text-sm">
            {step.label}
          </p>
          <p className="font-dm mt-0.5 text-center text-[10px] text-[#64748B] presentation:text-xs">
            {step.detail}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
