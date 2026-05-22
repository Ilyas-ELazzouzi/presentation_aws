import { motion } from 'framer-motion'
import { SlideShell } from '../components/ui/SlideShell'
import { bilanPoints, conclusionQuote, nextSteps, teamData } from '../data/slides'

export function Slide14() {
  return (
    <SlideShell title="Conclusion" subtitle="Bilan et perspectives">
      <div className="relative flex h-full min-h-0 flex-col">
        <div className="grid min-h-0 flex-1 grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel rounded-2xl p-5"
          >
            <h3 className="mb-3 font-bold text-neon">Bilan</h3>
            <ul className="space-y-2 text-sm text-slate-300 presentation:text-base">
              {bilanPoints.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex gap-2"
                >
                  <span className="text-neon">▸</span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel rounded-2xl p-5"
          >
            <h3 className="mb-3 font-bold text-push">Next steps</h3>
            <ul className="space-y-2 text-sm text-slate-300 presentation:text-base">
              {nextSteps.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex gap-2"
                >
                  <span className="text-push">▸</span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative mx-auto my-4 max-w-3xl px-8 text-center"
        >
          <span
            className="pointer-events-none absolute -left-2 -top-6 font-serif text-7xl leading-none text-neon opacity-10 presentation:text-8xl"
            aria-hidden
          >
            "
          </span>
          <p className="relative z-10 text-sm italic leading-relaxed text-slate-300 presentation:text-base presentation-lg:text-lg">
            {conclusionQuote}
          </p>
          <span
            className="pointer-events-none absolute -right-2 -bottom-8 font-serif text-7xl leading-none text-neon opacity-10 presentation:text-8xl"
            aria-hidden
          >
            "
          </span>
        </motion.blockquote>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex shrink-0 justify-center gap-6 border-t border-white/5 pt-3 text-sm text-slate-400"
        >
          {teamData.map((m) => (
            <span key={m.name}>
              <span className="text-slate-200">{m.name}</span>
              <span className="text-slate-600"> · </span>
              {m.role}
            </span>
          ))}
        </motion.footer>
      </div>
    </SlideShell>
  )
}
