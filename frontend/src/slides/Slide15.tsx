import { motion } from 'framer-motion'
import { ALBDiagram } from '../components/ALBDiagram'
import { albArchitectureBullets } from '../data/slides'

export function Slide15() {
  return (
    <div className="flex h-full w-full flex-col gap-5 px-12 py-10 presentation:px-16 presentation:py-12">
      <header className="shrink-0">
        <span className="font-dm text-[0.7rem] font-medium uppercase tracking-[0.15em] text-neon">
          AWS · ALB · EC2
        </span>
        <h2 className="font-syne mt-1 text-4xl font-bold text-[#EEF2FF] presentation:text-5xl presentation-lg:text-[2.75rem]">
          Architecture de déploiement prod
        </h2>
      </header>

      <div className="min-h-0 flex-1">
        <ALBDiagram />
      </div>

      <div className="grid shrink-0 grid-cols-2 gap-2 presentation:grid-cols-3 presentation:gap-3">
        {albArchitectureBullets.map((bullet, i) => (
          <motion.div
            key={bullet}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.06 }}
            className="font-dm flex items-start gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-[0.72rem] leading-snug text-[#CBD5E1] presentation:text-xs"
          >
            <span className="font-syne shrink-0 font-bold text-neon/60">
              {String(i + 1).padStart(2, '0')}
            </span>
            {bullet}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
