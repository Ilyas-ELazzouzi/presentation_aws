import { MetricsRow } from '../components/MetricsRow'
import { ObjectiveCard } from '../components/ObjectiveCard'
import { objectives } from '../data/slides'

export function Slide04() {
  return (
    <div className="flex h-full w-full flex-col gap-6 px-12 py-10 presentation:px-16 presentation:py-12">
      <header className="shrink-0">
        <span className="font-dm text-[0.7rem] font-medium uppercase tracking-[0.15em] text-neon">
          Objectifs
        </span>
        <h2 className="font-syne mt-1 text-4xl font-bold text-[#EEF2FF] presentation:text-5xl presentation-lg:text-[3rem]">
          3 axes pour valider le pipeline
        </h2>
      </header>

      <div className="grid grid-cols-3 items-start gap-6">
        {objectives.map((obj, i) => (
          <ObjectiveCard key={obj.number} {...obj} index={i} />
        ))}
      </div>

      <MetricsRow />
    </div>
  )
}
