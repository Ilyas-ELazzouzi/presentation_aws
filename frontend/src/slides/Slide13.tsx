import { SlideShell } from '../components/ui/SlideShell'
import { GlassCard } from '../components/ui/GlassCard'
import { Timeline } from '../components/ui/Timeline'
import { challenges } from '../data/slides'

export function Slide13() {
  return (
    <SlideShell title="Défis rencontrés" subtitle="Problèmes et solutions">
      <div className="flex h-full min-h-0 flex-col gap-4">
        <div className="grid min-h-0 flex-1 grid-cols-3 gap-4">
          {challenges.map((c, i) => (
            <GlassCard key={c.problem} delay={0.15 + i * 0.1} className="flex flex-col">
              <div className="flex items-start gap-2">
                <span className="text-lg text-danger">⚠️</span>
                <p className="font-dm text-sm leading-snug text-slate-300 presentation:text-base">{c.problem}</p>
              </div>
              <div className="my-3 h-px bg-white/10" />
              <div className="flex items-start gap-2">
                <span className="text-lg text-success">✅</span>
                <p className="font-dm text-sm leading-snug text-[#64748B] presentation:text-base">{c.solution}</p>
              </div>
            </GlassCard>
          ))}
        </div>
        <div className="glass-panel shrink-0 rounded-xl px-6 py-4">
          <Timeline />
        </div>
      </div>
    </SlideShell>
  )
}
