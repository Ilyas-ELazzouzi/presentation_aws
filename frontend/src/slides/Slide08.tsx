import { SlideShell } from '../components/ui/SlideShell'
import { CodeWindow } from '../components/ui/CodeWindow'
import { codeSnippets, lintNote, lintTools } from '../data/slides'

export function Slide08() {
  return (
    <SlideShell title="Stage Lint" subtitle="Qualité statique avant tout build">
      <div className="flex h-full min-h-0 gap-4">
        <div className="flex min-h-0 w-[55%] flex-col">
          <div className="glass-panel min-h-0 flex-1 overflow-hidden rounded-xl">
            <table className="font-dm w-full text-left text-sm presentation:text-base">
              <thead>
                <tr className="border-b border-white/10 bg-panel/80 text-neon">
                  <th className="font-syne px-4 py-3 font-semibold">Outil</th>
                  <th className="font-syne px-4 py-3 font-semibold">Périmètre</th>
                  <th className="font-syne px-4 py-3 font-semibold">Config</th>
                </tr>
              </thead>
              <tbody>
                {lintTools.map((tool) => (
                  <tr key={tool.name} className="glass-row-alt border-b border-white/5 transition-colors">
                    <td className="px-4 py-3 font-mono text-lint">{tool.name}</td>
                    <td className="px-4 py-3 text-slate-300">{tool.scope}</td>
                    <td className="px-4 py-3 font-mono text-xs text-slate-400">{tool.config}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-dm mt-3 shrink-0 text-xs italic text-[#64748B] presentation:text-sm">{lintNote}</p>
        </div>
        <div className="min-h-0 w-[45%]">
          <CodeWindow title="ci/pipeline.yml" code={codeSnippets.pipelineYml} delay={0.3} />
        </div>
      </div>
    </SlideShell>
  )
}
