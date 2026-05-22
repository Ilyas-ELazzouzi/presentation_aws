import { motion } from 'framer-motion'
import { CodeWindow } from '../components/ui/CodeWindow'
import { deployCodeSnippets, extendedPipelineStages } from '../data/slides'

export function Slide19() {
  return (
    <div className="flex h-full w-full flex-col gap-6 px-12 py-10 presentation:px-16 presentation:py-12">
      <header className="shrink-0">
        <span className="font-dm text-[0.7rem] font-medium uppercase tracking-[0.15em] text-neon">
          Pipeline étendu
        </span>
        <h2 className="font-syne mt-1 text-4xl font-bold text-[#EEF2FF] presentation:text-5xl">
          De ECR push à la prod ALB
        </h2>
        <p className="font-dm mt-1 text-[0.9rem] text-[#64748B]">
          6 stages — lint → test → build → push → infra → deploy
        </p>
      </header>

      <div className="flex flex-wrap items-center justify-center gap-2 presentation:gap-3">
        {extendedPipelineStages.map((stage, i) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08, type: 'spring' }}
            className="flex items-center gap-2"
          >
            <span
              className="font-syne rounded-xl border px-4 py-2.5 text-sm font-bold tracking-wider presentation:px-5 presentation:text-base"
              style={{
                borderColor: `${stage.color}44`,
                background: `${stage.color}14`,
                color: stage.color,
              }}
            >
              {stage.label}
            </span>
            {i < extendedPipelineStages.length - 1 && (
              <span className="text-neon/50">→</span>
            )}
          </motion.div>
        ))}
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-2 gap-4">
        <CodeWindow title="deploy:prod" code={deployCodeSnippets.deployProd} delay={0.45} />
        <CodeWindow title="deploy:preprod-1" code={deployCodeSnippets.deployPreprod} delay={0.55} />
      </div>
    </div>
  )
}
