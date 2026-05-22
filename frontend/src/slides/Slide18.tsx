import { motion } from 'framer-motion'
import { CodeWindow } from '../components/ui/CodeWindow'
import { deployCodeSnippets, pullAndRunSteps } from '../data/slides'

export function Slide18() {
  return (
    <div className="flex h-full w-full flex-col gap-6 px-12 py-10 presentation:px-16 presentation:py-12">
      <header className="shrink-0">
        <span className="font-dm text-[0.7rem] font-medium uppercase tracking-[0.15em] text-neon">
          deploy.yml · pull-and-run
        </span>
        <h2 className="font-syne mt-1 text-4xl font-bold text-[#EEF2FF] presentation:text-5xl">
          Déploiement SSH + Docker Compose
        </h2>
        <p className="font-dm mt-1 text-[0.9rem] text-[#64748B]">
          Runner GitLab → EC2 : pull ECR, tag latest, compose up sur le port 80
        </p>
      </header>

      <div className="grid min-h-0 flex-1 grid-cols-[48%_52%] items-start gap-6">
        <div className="flex flex-col gap-3">
          {pullAndRunSteps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="flex h-auto items-center gap-4 rounded-xl border border-neon/15 bg-white/[0.03] p-4"
              style={{ borderLeft: '3px solid #00D4FF' }}
            >
              <span className="font-syne text-xl font-black text-neon/40">{s.step}</span>
              <div>
                <p className="font-syne text-sm font-bold text-[#EEF2FF]">{s.label}</p>
                <p className="font-dm text-[0.8rem] text-[#64748B]">{s.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <CodeWindow title="pull-and-run (extrait)" code={deployCodeSnippets.pullAndRun} delay={0.4} />
      </div>
    </div>
  )
}
