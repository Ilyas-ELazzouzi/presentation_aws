import { SlideShell } from '../components/ui/SlideShell'
import { CodeWindow } from '../components/ui/CodeWindow'
import { DonutChart } from '../components/ui/DonutChart'
import { SeverityBadge } from '../components/SeverityBadge'
import { codeSnippets, trivyMatrix } from '../data/slides'

export function Slide09() {
  return (
    <SlideShell title="Sécurité Trivy" subtitle="Scan CVE — matrice 4 images">
      <div className="flex h-full min-h-0 flex-col gap-3">
        <div className="min-h-0 basis-[40%] shrink-0">
          <div className="glass-panel h-full overflow-hidden rounded-xl">
            <table className="w-full text-sm presentation:text-base">
              <thead>
                <tr className="border-b border-white/10 bg-panel/80 text-neon">
                  <th className="px-4 py-2.5 text-left">Image</th>
                  <th className="px-4 py-2.5 text-left">Sévérités</th>
                </tr>
              </thead>
              <tbody>
                {trivyMatrix.map((row) => (
                  <tr key={row.image} className="glass-row-alt border-b border-white/5">
                    <td className="px-4 py-2.5 font-mono text-slate-200">{row.image}</td>
                    <td className="flex gap-2 px-4 py-2.5">
                      <SeverityBadge level="critical" count={row.critical} />
                      <SeverityBadge level="high" count={row.high} />
                      <SeverityBadge level="medium" count={row.medium} />
                      <SeverityBadge level="low" count={row.low} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex min-h-0 flex-1 gap-3">
          <div className="glass-panel flex min-h-0 basis-[30%] flex-col rounded-xl p-3">
            <p className="mb-1 shrink-0 text-center text-xs font-semibold text-slate-400">
              Répartition pipeline
            </p>
            <div className="min-h-0 flex-1">
              <DonutChart />
            </div>
          </div>
          <div className="min-h-0 basis-[30%] flex-1">
            <CodeWindow title="test.yml — matrix" code={codeSnippets.trivyTest} delay={0.4} />
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
