import { useState } from 'react'
import { PageLayout } from '../components/PageLayout'
import { branches } from '../data/mockData'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, BookOpen, Star, AlertTriangle, ChevronDown } from 'lucide-react'

// Most repeated / important topics per subject (curated for IPU exams)
const importantTopicsMap: Record<string, string[]> = {
  // CSE
  'Applied Mathematics': ['Matrices & Determinants', 'Differential Equations', 'Laplace Transform', 'Fourier Series', 'Probability & Statistics'],
  'Applied Physics': ['Wave Optics', 'Laser & Fiber Optics', 'Quantum Mechanics', 'Semiconductor Physics', 'Electromagnetic Theory'],
  'Applied Chemistry': ['Corrosion & Its Prevention', 'Polymers & Composites', 'Water Treatment', 'Fuels & Combustion', 'Spectroscopic Techniques'],
  'Programming in C': ['Pointers & Arrays', 'Structures & Unions', 'File Handling', 'Dynamic Memory Allocation', 'Recursion'],
  'Communication Skills': ['Technical Report Writing', 'Presentation Skills', 'Group Discussion', 'Business Correspondence', 'Interview Techniques'],
  'Data Structures': ['Linked Lists', 'Binary Trees & BST', 'Graph Algorithms', 'Sorting Algorithms', 'Hashing Techniques'],
  'Object Oriented Programming': ['Inheritance & Polymorphism', 'Virtual Functions', 'Templates', 'Exception Handling', 'Operator Overloading'],
  'Digital Electronics': ['Boolean Algebra & K-Maps', 'Combinational Circuits', 'Sequential Circuits', 'Flip-Flops & Counters', 'A/D & D/A Converters'],
  'Discrete Mathematics': ['Graph Theory', 'Propositional Logic', 'Recurrence Relations', 'Group Theory', 'Lattices & Boolean Algebra'],
  'Computer Organization': ['CPU Architecture', 'Memory Organization', 'Instruction Pipelining', 'Cache Memory', 'I/O Organization'],
  'Operating Systems': ['Process Scheduling', 'Deadlock Handling', 'Memory Management', 'Page Replacement Algorithms', 'File Systems'],
  'Database Management': ['Normalization', 'SQL Queries', 'Transaction Management', 'ER Diagrams', 'Indexing & Hashing'],
  'Theory of Computation': ['Regular Languages & Automata', 'Context-Free Grammars', 'Turing Machines', 'Pumping Lemma', 'Decidability'],
  'Design & Analysis of Algorithms': ['Dynamic Programming', 'Greedy Algorithms', 'Graph Algorithms', 'Divide & Conquer', 'NP-Completeness'],
  'Software Engineering': ['SDLC Models', 'UML Diagrams', 'Testing Strategies', 'Software Metrics', 'Agile Methodology'],
  'Computer Networks': ['OSI & TCP/IP Models', 'Routing Algorithms', 'TCP vs UDP', 'Subnetting', 'Network Security'],
  'Compiler Design': ['Lexical Analysis', 'Parsing Techniques', 'Syntax Directed Translation', 'Code Optimization', 'Code Generation'],
  'Machine Learning': ['Linear Regression', 'Decision Trees', 'SVM', 'Neural Networks Basics', 'Clustering Algorithms'],
  'Artificial Intelligence': ['Search Algorithms', 'Knowledge Representation', 'Expert Systems', 'Fuzzy Logic', 'Natural Language Processing'],
  'Web Technology': ['HTML/CSS/JS Fundamentals', 'React Basics', 'REST APIs', 'Node.js', 'Database Integration'],
  'Information Security': ['Cryptography', 'Network Security Protocols', 'Firewalls & IDS', 'Digital Signatures', 'Cyber Laws'],
  'Cloud Computing': ['Virtualization', 'Cloud Service Models', 'AWS/Azure Basics', 'MapReduce', 'Cloud Security'],
  'Big Data Analytics': ['Hadoop Ecosystem', 'MapReduce Programming', 'NoSQL Databases', 'Spark Fundamentals', 'Data Warehousing'],
}

type Section = 'most-repeated' | 'important' | 'quick-revision'

export default function ExamModePage() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]?.id || '')
  const [selectedSemester, setSelectedSemester] = useState<number>(1)
  const [activeSection, setActiveSection] = useState<Section>('most-repeated')
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null)

  const branch = branches.find(b => b.id === selectedBranch)
  const semester = branch?.semesters.find(s => s.number === selectedSemester)

  const sections: { id: Section; label: string; icon: typeof Star; desc: string }[] = [
    { id: 'most-repeated', label: 'Most Repeated', icon: Star, desc: 'Topics that appear in exams again and again' },
    { id: 'important', label: 'Important Topics', icon: AlertTriangle, desc: 'High-weightage topics you cannot skip' },
    { id: 'quick-revision', label: 'Quick Revision', icon: BookOpen, desc: 'Key concepts for last-minute prep' },
  ]

  const getTopicsForSubject = (subjectName: string) => {
    const topics = importantTopicsMap[subjectName]
    if (topics) return topics
    // Fallback: pick first 2 topics from each unit
    const subj = semester?.subjects.find(s => s.name === subjectName)
    if (!subj) return []
    return subj.units.flatMap(u => u.topics.slice(0, 2).map(t => t.title))
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[hsl(45,93%,47%)]/20 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-[hsl(45,93%,47%)]" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-foreground">Exam Mode</h1>
              <p className="text-muted-foreground text-sm">Focus on what matters most for your exams</p>
            </div>
          </div>
        </motion.div>

        {/* Branch & Semester Selector */}
        <div className="flex flex-wrap gap-3 mb-8">
          <select
            value={selectedBranch}
            onChange={e => { setSelectedBranch(e.target.value); setSelectedSemester(1) }}
            className="bg-card border border-border rounded-xl px-4 py-2.5 text-foreground text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
          >
            {branches.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
          </select>
          <select
            value={selectedSemester}
            onChange={e => setSelectedSemester(Number(e.target.value))}
            className="bg-card border border-border rounded-xl px-4 py-2.5 text-foreground text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
          >
            {branch?.semesters.map(s => <option key={s.number} value={s.number}>Semester {s.number}</option>)}
          </select>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {sections.map(sec => (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeSection === sec.id
                  ? 'bg-accent-blue text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent-blue/30'
              }`}
            >
              <sec.icon className="w-4 h-4" />
              {sec.label}
            </button>
          ))}
        </div>

        <p className="text-muted-foreground text-sm mb-6">{sections.find(s => s.id === activeSection)?.desc}</p>

        {/* Subjects */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {semester?.subjects.map((subject, i) => {
              const topics = getTopicsForSubject(subject.name)
              const isOpen = expandedSubject === subject.id
              return (
                <motion.div
                  key={subject.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedSubject(isOpen ? null : subject.id)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{subject.icon}</span>
                      <div>
                        <h3 className="font-bold text-foreground">{subject.name}</h3>
                        <p className="text-xs text-muted-foreground">{topics.length} key topics</p>
                      </div>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {topics.map((topic, ti) => (
                            <div
                              key={ti}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/30 border border-border/50"
                            >
                              <span className="w-6 h-6 rounded-full bg-accent-blue/20 text-accent-blue text-xs font-bold flex items-center justify-center flex-shrink-0">
                                {ti + 1}
                              </span>
                              <span className="text-sm text-foreground font-medium">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </PageLayout>
  )
}
