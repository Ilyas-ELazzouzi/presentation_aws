import { motion } from 'framer-motion'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import type { PieLabelRenderProps } from 'recharts'
import { pipelineChartData } from '../../data/slides'

const RADIAN = Math.PI / 180

function renderCustomLabel(props: PieLabelRenderProps) {
  const {
    cx = 0,
    cy = 0,
    midAngle = 0,
    innerRadius = 0,
    outerRadius = 0,
    percent = 0,
    name = '',
  } = props
  if (percent < 0.08) return null
  const radius = Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.55
  const x = Number(cx) + radius * Math.cos(-midAngle * RADIAN)
  const y = Number(cy) + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text
      x={x}
      y={y}
      fill="#e2e8f0"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={11}
      fontWeight={600}
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export function DonutChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pipelineChartData}
            cx="50%"
            cy="50%"
            innerRadius="52%"
            outerRadius="78%"
            paddingAngle={3}
            dataKey="value"
            animationBegin={200}
            animationDuration={1200}
            label={renderCustomLabel}
            labelLine={false}
          >
            {pipelineChartData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} stroke="transparent" />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
