import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { GraduationCap, Brain, Laugh, Sparkles } from 'lucide-react'

const studentTypes = [
  { id: 'topper', label: 'A Topper', icon: Brain, desc: 'Always ahead of the syllabus', color: 'var(--accent-blue)' },
  { id: 'average', label: 'An Average Student', icon: GraduationCap, desc: 'Balanced and consistent', color: 'var(--accent-emerald)' },
  { id: 'backbencher', label: 'A Backbencher', icon: Laugh, desc: 'Present in spirit, absent in class', color: 'var(--accent-purple)' },
  { id: 'baddie', label: 'A Baddie', icon: Sparkles, desc: 'Here to slay and pass anyway', color: '#f43f5e' },
]

interface Props {
  onSelect: (type: string) => void
}

export function StudentTypeSelector({ onSelect }: Props) {
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (id: string) => {
    setSelected(id)
    localStorage.setItem('cc-student-type', id)
    setTimeout(() => onSelect(id), 600)
  }

  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center px-4"
      style={{ backgroundColor: 'var(--background)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-2xl w-full text-center">
        <motion.h2
          className="font-bagel text-foreground text-3xl sm:text-4xl mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Who are you?
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-10 text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          Choose your vibe. This personalizes your experience.
        </motion.p>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {studentTypes.map((type, i) => {
            const Icon = type.icon
            return (
              <motion.button
                key={type.id}
                className={`glass-effect p-6 sm:p-8 rounded-2xl text-left cursor-pointer gentle-animation group ${
                  selected === type.id ? 'ring-2' : ''
                }`}
                style={selected === type.id ? { borderColor: type.color, boxShadow: `0 0 30px ${type.color}33` } : {}}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelect(type.id)}
              >
                <Icon className="w-8 h-8 mb-3 text-foreground/70 group-hover:text-foreground gentle-animation" style={selected === type.id ? { color: type.color } : {}} />
                <h3 className="text-foreground font-bold text-lg mb-1">{type.label}</h3>
                <p className="text-muted-foreground text-sm">{type.desc}</p>
              </motion.button>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
