import { motion } from 'framer-motion'
import { CodeWindow } from '../components/ui/CodeWindow'
import { deployCodeSnippets, infraEc2Resources } from '../data/slides'

export function Slide16() {
  return (
    <div className="flex h-full w-full flex-col gap-6 px-12 py-10 presentation:px-16 presentation:py-12">
      <header className="shrink-0">
        <span className="font-dm text-[0.7rem] font-medium uppercase tracking-[0.15em] text-neon">
          deploy.yml · Stage infra
        </span>
        <h2 className="font-syne mt-1 text-4xl font-bold text-[#EEF2FF] presentation:text-5xl">
          Job infra:ec2
        </h2>
        <p className="font-dm mt-1 text-[0.9rem] text-[#64748B]">
          Provisionnement VPC, instances et ALB en un seul job GitLab CI
        </p>
      </header>

      <div className="grid min-h-0 flex-1 grid-cols-2 items-start gap-6">
        <div className="grid grid-cols-2 items-start gap-3">
          {infraEc2Resources.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="glass-panel h-auto rounded-xl p-4"
              style={{ borderColor: `${r.color}25` }}
            >
              <p className="font-syne text-sm font-bold" style={{ color: r.color }}>
                {r.label}
              </p>
              <p className="font-dm mt-1.5 text-[0.75rem] leading-snug text-[#64748B]">{r.detail}</p>
            </motion.div>
          ))}
        </div>
        <CodeWindow title="infra:ec2 — ALB + targets" code={deployCodeSnippets.albListener} delay={0.35} />
      </div>
    </div>
  )
}
