import { motion } from 'framer-motion'

export function Slide01() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-12 py-10 text-center presentation:px-16">
      <motion.p
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-dm mb-4 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-neon"
      >
        Hetic · Groupe 6 — DevOps
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
        className="font-syne max-w-4xl text-4xl font-bold leading-tight text-[#EEF2FF] presentation:text-5xl presentation-lg:text-6xl"
      >
        Pipeline CI/CD GitLab
        <span className="block text-neon">vers AWS ECR</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="font-dm mt-6 max-w-2xl text-[0.9rem] leading-relaxed text-[#64748B] presentation:text-lg"
      >
        Automatisation, sécurité et déploiement containerisé
      </motion.p>
    </div>
  )
}
