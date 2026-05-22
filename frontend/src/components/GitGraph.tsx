import { motion } from 'framer-motion'

export function GitGraph() {
  const branches = [
    { name: 'main', y: 60, color: '#00D4FF', commits: [40, 120, 200, 280] },
    { name: 'develop', y: 130, color: '#10B981', commits: [80, 160, 240] },
    { name: 'feature/ci', y: 200, color: '#7C3AED', commits: [100, 180] },
  ]

  return (
    <svg className="h-full w-full" viewBox="0 0 360 260" aria-label="Graphe des branches Git">
      {branches.map((branch, bi) => (
        <g key={branch.name}>
          <motion.line
            x1="20"
            y1={branch.y}
            x2="340"
            y2={branch.y}
            stroke={branch.color}
            strokeWidth="2"
            strokeOpacity="0.35"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: bi * 0.15, duration: 0.5 }}
          />
          {branch.commits.map((cx, ci) => (
            <motion.circle
              key={`${branch.name}-${cx}`}
              cx={cx}
              cy={branch.y}
              r="7"
              fill="#0A1020"
              stroke={branch.color}
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + bi * 0.1 + ci * 0.08, type: 'spring' }}
            />
          ))}
          <motion.text
            x="12"
            y={branch.y + 4}
            fill={branch.color}
            fontSize="11"
            fontWeight="600"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + bi * 0.12 }}
          >
            {branch.name}
          </motion.text>
        </g>
      ))}
      <motion.path
        d="M 180 60 Q 200 95 160 130"
        fill="none"
        stroke="#64748b"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      />
      <motion.path
        d="M 240 130 Q 260 165 180 200"
        fill="none"
        stroke="#64748b"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.75, duration: 0.5 }}
      />
    </svg>
  )
}
