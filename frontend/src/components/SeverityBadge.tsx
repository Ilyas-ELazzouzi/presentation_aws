interface SeverityBadgeProps {
  level: 'critical' | 'high' | 'medium' | 'low'
  count: number
}

const styles: Record<SeverityBadgeProps['level'], string> = {
  critical: 'bg-danger/25 text-red-300 border-danger/50',
  high: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
  medium: 'bg-lint/20 text-amber-200 border-lint/40',
  low: 'bg-slate-500/20 text-slate-300 border-slate-500/40',
}

const labels: Record<SeverityBadgeProps['level'], string> = {
  critical: 'C',
  high: 'H',
  medium: 'M',
  low: 'L',
}

export function SeverityBadge({ level, count }: SeverityBadgeProps) {
  return (
    <span
      className={`inline-flex min-w-[2rem] items-center justify-center gap-0.5 rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-semibold presentation:text-xs ${styles[level]}`}
      title={`${level}: ${count}`}
    >
      <span className="opacity-70">{labels[level]}</span>
      {count}
    </span>
  )
}
