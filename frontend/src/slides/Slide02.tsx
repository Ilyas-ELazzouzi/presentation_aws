import { TeamCard } from '../components/TeamCard'
import { teamData } from '../data/slides'

export function Slide02() {
  return (
    <div className="flex h-full w-full flex-col gap-8 px-12 py-10 presentation:px-16 presentation:py-12 presentation-lg:gap-8">
      <header className="flex shrink-0 items-end justify-between">
        <div>
          <span className="font-dm text-[0.7rem] font-medium uppercase tracking-[0.15em] text-neon">
            Hetic · Groupe 6
          </span>
          <h2 className="font-syne mt-1 text-4xl font-bold text-[#EEF2FF] presentation:text-5xl presentation-lg:text-[3rem]">
            Notre Équipe
          </h2>
        </div>
        <span className="font-dm text-[0.85rem] text-[#64748B]">4 membres — rôles DevOps</span>
      </header>

      <div className="grid w-full grid-cols-4 items-start content-start gap-5">
        {teamData.map((member, i) => (
          <TeamCard key={member.name} {...member} index={i} />
        ))}
      </div>
    </div>
  )
}
