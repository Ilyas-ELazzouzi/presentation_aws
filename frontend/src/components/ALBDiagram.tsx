import { motion } from 'framer-motion'

const neon = '#00D4FF'
const orange = '#FF9900'
const green = '#10B981'
const purple = '#7C3AED'

function BoxNode({
  x,
  y,
  w,
  h,
  label,
  sub,
  stroke,
  delay,
  dashed = false,
}: {
  x: number
  y: number
  w: number
  h: number
  label: string
  sub?: string
  stroke: string
  delay: number
  dashed?: boolean
}) {
  return (
    <g>
      <motion.rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        fill="#0A1020"
        stroke={stroke}
        strokeWidth={1.5}
        strokeDasharray={dashed ? '5 4' : undefined}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.4 }}
      />
      <motion.text
        x={x + w / 2}
        y={y + (sub ? h / 2 - 4 : h / 2 + 4)}
        textAnchor="middle"
        fill={stroke}
        fontSize={11}
        fontWeight={700}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.15 }}
      >
        {label}
      </motion.text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 12} textAnchor="middle" fill="#64748b" fontSize={9}>
          {sub}
        </text>
      )}
    </g>
  )
}

function Arrow({ d, delay, color = neon }: { d: string; delay: number; color?: string }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={2}
      markerEnd="url(#arrowhead)"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.9 }}
      transition={{ delay, duration: 0.5 }}
    />
  )
}

export function ALBDiagram() {
  return (
    <div className="flex h-full min-h-[220px] w-full items-center justify-center">
      <svg
        className="h-full w-full max-h-[340px]"
        viewBox="0 0 920 340"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Architecture ALB production"
      >
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={neon} />
          </marker>
        </defs>

        <text x="460" y="22" textAnchor="middle" fill="#64748b" fontSize="10" letterSpacing="0.12em">
          PRODUCTION (via ALB)
        </text>

        <BoxNode x={20} y={50} w={88} h={48} label="Utilisateur" sub="Internet" stroke={neon} delay={0.05} />
        <Arrow d="M 108 74 L 148 74" delay={0.2} />

        <BoxNode
          x={148}
          y={38}
          w={120}
          h={72}
          label="hetic-alb"
          sub="DNS stable · multi-AZ"
          stroke={orange}
          delay={0.25}
        />
        <text x={208} y={128} textAnchor="middle" fill="#64748b" fontSize="8">
          hetic-alb-sg :80/443
        </text>

        <Arrow d="M 268 74 L 308 74" delay={0.35} color={orange} />

        <BoxNode
          x={308}
          y={50}
          w={100}
          h={48}
          label="EC2 prod"
          sub=":80"
          stroke={green}
          delay={0.4}
        />

        <Arrow d="M 358 98 L 358 128" delay={0.48} color={green} />

        <BoxNode x={318} y={128} w={80} h={40} label="nginx" sub=":8088" stroke="#009639" delay={0.52} />
        <Arrow d="M 398 148 L 438 148" delay={0.55} />
        <BoxNode x={438} y={118} w={72} h={36} label="frontend" stroke="#3B82F6" delay={0.58} />
        <Arrow d="M 398 158 L 438 168" delay={0.6} />
        <BoxNode x={438} y={158} w={72} h={36} label="backend" stroke="#10B981" delay={0.62} />
        <Arrow d="M 510 176 L 550 176" delay={0.65} />
        <BoxNode x={550} y={158} w={88} h={40} label="PostgreSQL" sub="v16" stroke="#336791" delay={0.68} />

        <text x={460} y={248} textAnchor="middle" fill="#64748b" fontSize="10" letterSpacing="0.12em">
          PREPROD — HORS ALB (IP directe)
        </text>

        <motion.path
          d="M 64 98 Q 64 200 180 240"
          fill="none"
          stroke={purple}
          strokeWidth="1.5"
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.75, duration: 0.55 }}
        />
        <motion.path
          d="M 64 98 Q 64 220 400 250"
          fill="none"
          stroke={purple}
          strokeWidth="1.5"
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.85, duration: 0.55 }}
        />

        <BoxNode
          x={140}
          y={248}
          w={110}
          h={52}
          label="preprod-1"
          sub="IP publique"
          stroke={purple}
          delay={0.8}
          dashed
        />
        <BoxNode
          x={360}
          y={248}
          w={110}
          h={52}
          label="preprod-2"
          sub="IP publique"
          stroke={purple}
          delay={0.9}
          dashed
        />

        <motion.rect
          x={680}
          y={48}
          width={220}
          height={120}
          rx={10}
          fill="#111827"
          stroke="#F59E0B"
          strokeWidth={1}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        />
        <text x={790} y={72} textAnchor="middle" fill="#F59E0B" fontSize="10" fontWeight={700}>
          Security Groups
        </text>
        <text x={700} y={92} fill="#94a3b8" fontSize="9">
          hetic-alb-sg
        </text>
        <text x={700} y={106} fill="#64748b" fontSize="8">
          → :80 / :443 depuis 0.0.0.0/0
        </text>
        <text x={700} y={124} fill="#94a3b8" fontSize="9">
          hetic-sg (EC2)
        </text>
        <text x={700} y={138} fill="#64748b" fontSize="8">
          → :80 uniquement depuis ALB SG
        </text>
        <text x={700} y={156} fill="#64748b" fontSize="8">
          → :22 SSH (admin)
        </text>
      </svg>
    </div>
  )
}
