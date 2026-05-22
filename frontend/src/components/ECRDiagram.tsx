import { motion } from 'framer-motion'

const branches = [
  { label: 'Frontend', repo: 'hetic-frontend', color: '#3B82F6', delay: 0.2 },
  { label: 'Backend', repo: 'hetic-backend', color: '#10B981', delay: 0.35 },
  { label: 'DevOps', repo: 'hetic-devops', color: '#7C3AED', delay: 0.5 },
]

export function ECRDiagram() {
  return (
    <div className="flex h-full items-center justify-center">
      <svg
        className="h-full w-full max-h-[280px]"
        viewBox="0 0 720 280"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Push vers AWS ECR"
      >
        <motion.rect
          x="300"
          y="20"
          width="120"
          height="48"
          rx="10"
          fill="#111827"
          stroke="#00D4FF"
          strokeWidth="1.5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        />
        <text x="360" y="50" textAnchor="middle" fill="#00D4FF" fontSize="13" fontWeight="700">
          GITLAB PUSH
        </text>

        {branches.map((b, i) => {
          const startX = 360
          const startY = 68
          const endX = 120 + i * 240
          const endY = 220
          const midY = 140
          return (
            <g key={b.repo}>
              <motion.path
                d={`M ${startX} ${startY} Q ${startX} ${midY} ${endX} ${endY - 40}`}
                fill="none"
                stroke={b.color}
                strokeWidth="2"
                strokeDasharray="6 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.85 }}
                transition={{ delay: b.delay, duration: 0.7 }}
              />
              <motion.polygon
                points={`${endX},${endY - 48} ${endX - 8},${endY - 58} ${endX + 8},${endY - 58}`}
                fill={b.color}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: b.delay + 0.5 }}
              />
              <motion.rect
                x={endX - 70}
                y={endY - 40}
                width="140"
                height="56"
                rx="10"
                fill="#0A1020"
                stroke={b.color}
                strokeWidth="1.5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: b.delay + 0.4, type: 'spring' }}
              />
              <text x={endX} y={endY - 14} textAnchor="middle" fill={b.color} fontSize="12" fontWeight="600">
                {b.label}
              </text>
              <text x={endX} y={endY + 4} textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                ECR / {b.repo}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
