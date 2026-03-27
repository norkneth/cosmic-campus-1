import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calculator, TrendingUp, CalendarOff, ChevronRight } from 'lucide-react'

const calculators = [
  {
    label: 'CGPA',
    to: '/cgpa-calculator',
    icon: TrendingUp,
    color: 'from-blue-500/20 to-blue-600/20',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  {
    label: 'SGPA',
    to: '/sgpa-calculator',
    icon: Calculator,
    color: 'from-emerald-500/20 to-emerald-600/20',
    border: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
  {
    label: 'Bunk',
    to: '/bunk-calculator',
    icon: CalendarOff,
    color: 'from-purple-500/20 to-purple-600/20',
    border: 'border-purple-500/30',
    iconColor: 'text-purple-400',
  },
]

export function FloatingCalculators() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && calculators.map((calc, i) => (
          <motion.div
            key={calc.label}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2, delay: i * 0.05 }}
          >
            <Link
              to={calc.to}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r ${calc.color} border ${calc.border} backdrop-blur-xl hover:scale-105 transition-transform duration-200`}
            >
              <calc.icon className={`w-5 h-5 ${calc.iconColor}`} />
              <span className="text-sm font-semibold text-foreground whitespace-nowrap">{calc.label} Calculator</span>
              <ChevronRight className="w-4 h-4 text-foreground/50" />
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 rounded-full bg-accent-blue/90 backdrop-blur-xl border border-blue-400/30 flex items-center justify-center shadow-lg shadow-blue-500/20 cursor-pointer"
      >
        <motion.div animate={{ rotate: isExpanded ? 45 : 0 }} transition={{ duration: 0.2 }}>
          <Calculator className="w-6 h-6 text-white" />
        </motion.div>
      </motion.button>
    </div>
  )
}
