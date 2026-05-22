import { motion } from 'framer-motion'
import { SlideShell } from '../components/ui/SlideShell'

export function Slide06() {
  return (
    <SlideShell title="Vue d'ensemble" subtitle="Du commit au registry AWS">
      <div className="flex h-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-dm flex flex-wrap items-center justify-center gap-3 text-sm presentation:text-base presentation-lg:text-lg"
        >
          {['Commit', 'Lint', 'Test + Trivy', 'Build DinD', 'Push ECR'].map((step, i) => (
            <motion.span
              key={step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="font-syne glass-panel rounded-lg px-4 py-2 font-semibold text-[#EEF2FF]">{step}</span>
              {i < 4 && <span className="text-neon">→</span>}
            </motion.span>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-dm mt-10 max-w-2xl text-center text-[#64748B]"
        >
          Les slides suivantes détaillent chaque stage du pipeline CI/CD.
        </motion.p>
      </div>
    </SlideShell>
  )
}
