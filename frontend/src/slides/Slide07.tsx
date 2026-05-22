import { SlideShell } from '../components/ui/SlideShell'
import { CodeWindow } from '../components/ui/CodeWindow'
import { PipelineDiagram } from '../components/PipelineDiagram'
import { codeSnippets } from '../data/slides'

export function Slide07() {
  return (
    <SlideShell title="Pipeline CI/CD" subtitle="4 stages — lint, test, build, push">
      <div className="flex h-full min-h-0 flex-col gap-3">
        <div className="min-h-0 flex-[65]">
          <PipelineDiagram />
        </div>
        <div className="min-h-0 flex-[35]">
          <CodeWindow title=".gitlab-ci.yml" code={codeSnippets.gitlabCi} maxLines={6} delay={0.5} />
        </div>
      </div>
    </SlideShell>
  )
}
