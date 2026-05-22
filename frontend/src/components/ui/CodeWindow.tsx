import { motion } from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeWindowProps {
  title: string
  code: string
  language?: string
  maxLines?: number
  className?: string
  delay?: number
}

export function CodeWindow({
  title,
  code,
  language = 'yaml',
  maxLines,
  className = '',
  delay = 0,
}: CodeWindowProps) {
  const displayCode = maxLines
    ? code.split('\n').slice(0, maxLines).join('\n')
    : code

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45 }}
      className={`glass-panel flex h-full min-h-0 flex-col overflow-hidden rounded-xl ${className}`}
    >
      <div className="flex shrink-0 items-center gap-2 border-b border-white/5 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-danger/80" />
        <span className="h-3 w-3 rounded-full bg-lint/80" />
        <span className="h-3 w-3 rounded-full bg-success/80" />
        <span className="ml-2 font-mono text-xs text-slate-400">{title}</span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden text-[11px] presentation:text-xs presentation-lg:text-sm">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '12px 16px',
            background: 'transparent',
            fontSize: 'inherit',
            lineHeight: 1.55,
          }}
          wrapLongLines
        >
          {displayCode}
        </SyntaxHighlighter>
      </div>
    </motion.div>
  )
}
