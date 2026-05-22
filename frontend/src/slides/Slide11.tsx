import { SlideShell } from '../components/ui/SlideShell'
import { CodeWindow } from '../components/ui/CodeWindow'
import { ECRDiagram } from '../components/ECRDiagram'
import { codeSnippets } from '../data/slides'

export function Slide11() {
  return (
    <SlideShell title="Push AWS ECR" subtitle="3 branches parallèles vers les repositories">
      <div className="flex h-full min-h-0 flex-col gap-3">
        <div className="min-h-0 flex-[55]">
          <ECRDiagram />
        </div>
        <div className="flex min-h-0 flex-[45] gap-3">
          <CodeWindow title="ecr-login.sh" code={codeSnippets.loginEcr} delay={0.35} className="flex-1" />
          <CodeWindow title="push-frontend.yml" code={codeSnippets.pushFrontend} delay={0.45} className="flex-1" />
        </div>
      </div>
    </SlideShell>
  )
}
