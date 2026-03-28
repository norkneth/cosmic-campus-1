import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calculator, TrendingUp, CalendarOff, ChevronRight, GraduationCap } from 'lucide-react'

const calculators = [
  {
    label: 'CGPA',
    to: '/cgpa-calculator',
    icon: TrendingUp,
    glow: 'shadow-[0_0_20px_rgba(59,130,246,0.4)]',
    bg: 'bg-[hsl(217,91%,60%)]/15',
    border: 'border-[hsl(217,91%,60%)]/30',
    iconColor: 'text-[hsl(217,91%,60%)]',
  },
  {
    label: 'SGPA',
    to: '/sgpa-calculator',
    icon: Calculator,
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.4)]',
    bg: 'bg-[hsl(160,84%,39%)]/15',
    border: 'border-[hsl(160,84%,39%)]/30',
    iconColor: 'text-[hsl(160,84%,39%)]',
  },
  {
    label: 'Bunk',
    to: '/bunk-calculator',
    icon: CalendarOff,
    glow: 'shadow-[0_0_20px_rgba(139,92,246,0.4)]',
    bg: 'bg-[hsl(258,90%,66%)]/15',
    border: 'border-[hsl(258,90%,66%)]/30',
    iconColor: 'text-[hsl(258,90%,66%)]',
  },
]

export function FloatingCalculators() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Exam Mode Button */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.15 }}
            >
              <Link
                to="/exam-mode"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[hsl(45,93%,47%)]/15 border border-[hsl(45,93%,47%)]/30 backdrop-blur-xl hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(234,179,8,0.4)]"
              >
                <GraduationCap className="w-5 h-5 text-[hsl(45,93%,47%)]" />
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">Exam Mode</span>
                <ChevronRight className="w-4 h-4 text-foreground/50" />
              </Link>
            </motion.div>

            {calculators.map((calc, i) => (
              <motion.div
                key={calc.label}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
              >
                <Link
                  to={calc.to}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl ${calc.bg} border ${calc.border} backdrop-blur-xl hover:scale-105 transition-transform duration-200 ${calc.glow}`}
                >
                  <calc.icon className={`w-5 h-5 ${calc.iconColor}`} />
                  <span className="text-sm font-semibold text-foreground whitespace-nowrap">{calc.label} Calculator</span>
                  <ChevronRight className="w-4 h-4 text-foreground/50" />
                </Link>
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 rounded-full bg-accent-blue backdrop-blur-xl border border-[hsl(217,91%,60%)]/40 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] cursor-pointer relative"
      >
        {/* Glow ring animation */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[hsl(217,91%,60%)]/50"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div animate={{ rotate: isExpanded ? 45 : 0 }} transition={{ duration: 0.2 }}>
          <Calculator className="w-6 h-6 text-white" />
        </motion.div>
      </motion.button>
    </div>
  )
}
