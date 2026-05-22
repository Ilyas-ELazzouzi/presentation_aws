import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { slides } from './slides'
import { TOTAL_SLIDES } from './data/slides'

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
}

function App() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const go = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1)
    setIndex(next)
  }, [index])

  const next = useCallback(() => {
    if (index < TOTAL_SLIDES - 1) go(index + 1)
  }, [index, go])

  const prev = useCallback(() => {
    if (index > 0) go(index - 1)
  }, [index, go])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      } else if (e.key === 'Home') {
        go(0)
      } else if (e.key === 'End') {
        go(TOTAL_SLIDES - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, go])

  const CurrentSlide = slides[index]

  return (
    <div className="presentation-root">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute inset-0"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-6 py-4 presentation:px-10"
      >
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-neon/30 bg-deep/80 text-neon transition-opacity disabled:opacity-25"
          aria-label="Slide précédente"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              className="pointer-events-auto h-1.5 rounded-full transition-all"
              style={{
                width: i === index ? 24 : 8,
                background: i === index ? '#00D4FF' : 'rgba(0,212,255,0.25)',
              }}
              aria-label={`Aller à la slide ${i + 1}`}
            />
          ))}
          <span className="font-dm ml-3 text-xs text-[#64748B]">
            {index + 1} / {TOTAL_SLIDES}
          </span>
        </div>

        <button
          type="button"
          onClick={next}
          disabled={index === TOTAL_SLIDES - 1}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-neon/30 bg-deep/80 text-neon transition-opacity disabled:opacity-25"
          aria-label="Slide suivante"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </motion.nav>
    </div>
  )
}

export default App
