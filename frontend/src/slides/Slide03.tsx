import { ContextItem } from '../components/ContextItem'
import { TechStackVisual } from '../components/TechStackVisual'
import { contextItems } from '../data/slides'

export function Slide03() {
  return (
    <div className="flex h-full w-full flex-col gap-8 px-12 py-10 presentation:px-16 presentation:py-12">
      <header className="shrink-0">
        <span className="font-dm text-[0.7rem] font-medium uppercase tracking-[0.15em] text-neon">
          Hetic · Groupe 6
        </span>
        <h2 className="font-syne mt-1 text-4xl font-bold text-[#EEF2FF] presentation:text-5xl presentation-lg:text-[3rem]">
          Contexte
        </h2>
        <p className="font-dm mt-1 text-[0.9rem] text-[#64748B]">
          Projet fil rouge — infrastructure as pipeline
        </p>
      </header>

      <div className="grid min-h-0 flex-1 grid-cols-[55%_45%] items-start gap-10">
        <div className="flex flex-col gap-3">
          {contextItems.map((item, i) => (
            <ContextItem key={item.number} {...item} index={i} />
          ))}
        </div>

        <TechStackVisual />
      </div>
    </div>
  )
}
