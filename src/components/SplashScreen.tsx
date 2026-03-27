import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<'zoom' | 'reveal' | 'done'>('zoom')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('reveal'), 2200)
    const t2 = setTimeout(() => {
      setPhase('done')
      onComplete()
    }, 3200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: 'var(--background)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Subtle glow behind text */}
          <motion.div
            className="absolute w-64 h-64 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 2.5, opacity: phase === 'reveal' ? 0 : 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />

          <motion.h1
            className="font-bagel text-foreground text-4xl sm:text-6xl md:text-8xl tracking-wider select-none relative z-10"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={
              phase === 'zoom'
                ? { scale: 1, opacity: 1 }
                : { scale: 15, opacity: 0 }
            }
            transition={
              phase === 'zoom'
                ? { duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }
                : { duration: 0.8, ease: 'easeIn' }
            }
          >
            COSMIC CAMPUS
          </motion.h1>

          {/* Netflix-style red line sweep */}
          <motion.div
            className="absolute bottom-0 left-0 h-1"
            style={{ backgroundColor: 'var(--accent-blue)' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
