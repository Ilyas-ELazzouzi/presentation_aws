import { motion } from 'framer-motion'

export function Slide01() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-12 text-center">
      <motion.p
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 text-sm tracking-[0.35em] text-neon/80 uppercase"
      >
        Hetic — DevOps
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
        className="max-w-4xl text-4xl font-bold leading-tight text-slate-100 presentation:text-5xl presentation-lg:text-6xl"
      >
        Pipeline CI/CD GitLab
        <span className="block text-neon">vers AWS ECR</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 max-w-2xl text-slate-400 presentation:text-lg"
      >
        Automatisation, sécurité et déploiement containerisé
      </motion.p>
    </div>
  )
}
