import { motion } from 'framer-motion'
import { StageBadge } from './ui/StageBadge'
import { pipelineStages } from '../data/slides'

function AnimatedArrow({ delay }: { delay: number }) {
  return (
    <svg className="h-6 w-10 shrink-0 presentation:w-14" viewBox="0 0 56 24" aria-hidden>
      <motion.line
        x1="4"
        y1="12"
        x2="44"
        y2="12"
        stroke="#00D4FF"
        strokeWidth="2"
        strokeOpacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay, duration: 0.4 }}
      />
      <motion.path
        d="M44 12 L36 7 M44 12 L36 17"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.25 }}
      />
    </svg>
  )
}

export function PipelineDiagram() {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="flex items-center justify-center gap-2 presentation:gap-4">
        {pipelineStages.map((stage, index) => (
          <div key={stage.id} className="flex items-center gap-2 presentation:gap-4">
            <StageBadge label={stage.label} color={stage.color} size="lg" delay={index * 0.15} />
            {index < pipelineStages.length - 1 && (
              <AnimatedArrow delay={0.2 + index * 0.2} />
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-6 presentation:gap-10 presentation-lg:gap-14">
        {pipelineStages.map((stage, stageIndex) => (
          <div
            key={`jobs-${stage.id}`}
            className="flex w-[5.5rem] flex-col items-center gap-1.5 presentation:w-[6.5rem] presentation-lg:w-[7.5rem]"
          >
            {stage.jobs.map((job, jobIndex) => (
              <motion.span
                key={job}
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.5 + stageIndex * 0.12 + jobIndex * 0.06,
                  type: 'spring',
                  stiffness: 300,
                  damping: 22,
                }}
                className="rounded-full border px-2 py-0.5 font-mono text-[9px] text-slate-300 presentation:text-[10px] presentation-lg:text-xs"
                style={{
                  borderColor: `${stage.color}44`,
                  background: `${stage.color}12`,
                }}
              >
                {job}
              </motion.span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
