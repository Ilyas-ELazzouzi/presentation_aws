import { motion } from 'framer-motion'

const images = ['hetic-frontend', 'hetic-backend', 'hetic-nginx']

export function BuildDiagram() {
  return (
    <svg className="h-full w-full" viewBox="0 0 400 320" aria-label="Build avec Docker-in-Docker">
      <motion.rect
        x="20"
        y="120"
        width="100"
        height="56"
        rx="10"
        fill="#111827"
        stroke="#F59E0B"
        strokeWidth="1.5"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      />
      <text x="70" y="152" textAnchor="middle" fill="#F59E0B" fontSize="11" fontWeight="700">
        GitLab
      </text>
      <text x="70" y="166" textAnchor="middle" fill="#94a3b8" fontSize="9">
        Runner
      </text>

      <motion.path
        d="M 120 148 L 155 148"
        stroke="#00D4FF"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.3, duration: 0.35 }}
      />

      <motion.rect
        x="155"
        y="108"
        width="90"
        height="80"
        rx="10"
        fill="#0A1020"
        stroke="#3B82F6"
        strokeWidth="1.5"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, type: 'spring' }}
      />
      <text x="200" y="142" textAnchor="middle" fill="#3B82F6" fontSize="11" fontWeight="700">
        docker:dind
      </text>
      <text x="200" y="158" textAnchor="middle" fill="#64748b" fontSize="9">
        service
      </text>

      <motion.path
        d="M 245 148 L 280 148"
        stroke="#00D4FF"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.55, duration: 0.35 }}
      />

      <motion.rect
        x="280"
        y="118"
        width="100"
        height="60"
        rx="10"
        fill="#111827"
        stroke="#10B981"
        strokeWidth="1.5"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      />
      <text x="330" y="144" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="600">
        compose build
      </text>
      <text x="330" y="160" textAnchor="middle" fill="#64748b" fontSize="9">
        3 images
      </text>

      {images.map((img, i) => (
        <g key={img}>
          <motion.path
            d={`M 330 178 Q 330 210 ${120 + i * 90} 240`}
            fill="none"
            stroke={['#3B82F6', '#10B981', '#7C3AED'][i]}
            strokeWidth="1.5"
            strokeDasharray="5 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
          />
          <motion.rect
            x={70 + i * 90}
            y="248"
            width="100"
            height="44"
            rx="8"
            fill="#060B14"
            stroke={['#3B82F6', '#10B981', '#7C3AED'][i]}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.12 }}
          />
          <text
            x={120 + i * 90}
            y="275"
            textAnchor="middle"
            fill="#e2e8f0"
            fontSize="9"
            fontFamily="monospace"
          >
            {img}
          </text>
        </g>
      ))}
    </svg>
  )
}
