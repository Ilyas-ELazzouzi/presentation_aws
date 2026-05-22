import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import { SlideShell } from '../components/ui/SlideShell'
import { GitGraph } from '../components/GitGraph'
import { variableCards } from '../data/slides'

export function Slide12() {
  return (
    <SlideShell title="Variables & Branches" subtitle="Secrets protégés — flux Git">
      <div className="flex h-full min-h-0 gap-5">
        <div className="min-h-0 w-1/2">
          <GitGraph />
        </div>
        <div className="flex w-1/2 flex-col justify-center gap-4">
          {variableCards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.12 }}
              className="glass-panel flex items-center gap-4 rounded-xl px-5 py-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon/10">
                <Lock className="h-5 w-5 text-neon" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-sm text-slate-300">{card.name}</p>
                <p className="font-mono text-lg tracking-widest text-slate-500">{card.masked}</p>
              </div>
              {card.protected && (
                <span className="rounded-full border border-push/50 bg-push/15 px-3 py-1 text-xs font-semibold text-push">
                  Protected
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  )
}
