import { SlideShell } from '../components/ui/SlideShell'
import { CodeWindow } from '../components/ui/CodeWindow'
import { BuildDiagram } from '../components/BuildDiagram'
import { codeSnippets } from '../data/slides'

export function Slide10() {
  return (
    <SlideShell title="Build & DinD" subtitle="Docker-in-Docker — compose build">
      <div className="flex h-full min-h-0 gap-5">
        <div className="min-h-0 w-1/2">
          <BuildDiagram />
        </div>
        <div className="min-h-0 w-1/2">
          <CodeWindow title="build job" code={codeSnippets.nginxConf} delay={0.25} />
        </div>
      </div>
    </SlideShell>
  )
}
