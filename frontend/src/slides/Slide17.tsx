import { motion } from 'framer-motion'
import { GitBranch, Globe } from 'lucide-react'
import { deployJobs } from '../data/slides'

export function Slide17() {
  return (
    <div className="flex h-full w-full flex-col gap-6 px-12 py-10 presentation:px-16 presentation:py-12">
      <header className="shrink-0">
        <span className="font-dm text-[0.7rem] font-medium uppercase tracking-[0.15em] text-neon">
          deploy.yml · Stage deploy
        </span>
        <h2 className="font-syne mt-1 text-4xl font-bold text-[#EEF2FF] presentation:text-5xl">
          3 jobs de déploiement parallèles
        </h2>
        <p className="font-dm mt-1 text-[0.9rem] text-[#64748B]">
          Prod via DNS ALB · Preprod en accès direct IP
        </p>
      </header>

      <div className="grid grid-cols-3 items-start gap-5">
        {deployJobs.map((job, i) => (
          <motion.article
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.12 }}
            whileHover={{ y: -4, boxShadow: `0 16px 40px ${job.color}12` }}
            className="glass-panel relative flex h-auto flex-col gap-4 overflow-hidden rounded-2xl p-6"
            style={{ border: `1px solid ${job.color}25` }}
          >
            <div className="flex items-center justify-between">
              <span
                className="font-mono text-[0.68rem] font-semibold uppercase tracking-wide"
                style={{ color: job.color }}
              >
                {job.id}
              </span>
              {job.viaAlb ? (
                <Globe size={18} color={job.color} />
              ) : (
                <GitBranch size={18} color={job.color} />
              )}
            </div>
            <h3 className="font-syne text-lg font-bold text-[#EEF2FF]">{job.title}</h3>
            <div className="font-dm space-y-2 text-[0.82rem] text-[#64748B]">
              <p>
                <span className="text-slate-500">Branche : </span>
                {job.branch}
              </p>
              <p>
                <span className="text-slate-500">EC2_HOST : </span>
                <span className="font-mono text-slate-300">{job.host}</span>
              </p>
              <p>
                <span className="text-slate-500">PUBLIC_URL : </span>
                <span className="font-mono" style={{ color: job.color }}>
                  {job.publicUrl}
                </span>
              </p>
            </div>
            <span
              className="w-fit rounded-md px-2 py-0.5 font-mono text-[0.65rem]"
              style={{
                background: `${job.color}12`,
                color: job.color,
                border: `1px solid ${job.color}30`,
              }}
            >
              {job.viaAlb ? 'via ALB' : 'IP directe'}
            </span>
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{ background: `linear-gradient(to right, ${job.color}70, transparent)` }}
            />
          </motion.article>
        ))}
      </div>
    </div>
  )
}
