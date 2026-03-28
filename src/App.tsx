import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Awards } from './components/Awards'
import { FloatingCalculators } from './components/FloatingCalculators'
import { About } from './components/About'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { SplashScreen } from './components/SplashScreen'
import { StudentTypeSelector } from './components/StudentTypeSelector'
import { PageTransition } from './components/PageTransition'
import BranchesPage from './pages/BranchesPage'
import BranchPage from './pages/BranchPage'
import SemesterPage from './pages/SemesterPage'
import SubjectPage from './pages/SubjectPage'
import UnitPage from './pages/UnitPage'
import TopicPage from './pages/TopicPage'
import DashboardPage from './pages/DashboardPage'
import SearchPage from './pages/SearchPage'
import CGPACalculator from './pages/CGPACalculator'
import SGPACalculator from './pages/SGPACalculator'
import BunkCalculator from './pages/BunkCalculator'
import ExamModePage from './pages/ExamModePage'

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ overflow: 'visible' }}>
      <main className="relative" role="main" style={{ overflow: 'visible' }}>
        <section id="hero" aria-label="Hero section">
          <Hero />
        </section>
        <section id="portfolio" aria-label="Featured Courses section">
          <Portfolio />
        </section>
        <section id="awards" aria-label="Achievements section">
          <Awards />
        </section>
        <section id="about" aria-label="How It Works section">
          <About />
        </section>
        <section id="services" aria-label="Services section" style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}>
          <Services />
        </section>
        <section id="team" aria-label="Team section" style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}>
          <Team />
        </section>
        <section id="contact" aria-label="Contact section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/branches" element={<PageTransition><BranchesPage /></PageTransition>} />
        <Route path="/branch/:branchId" element={<PageTransition><BranchPage /></PageTransition>} />
        <Route path="/semester/:semesterId" element={<PageTransition><SemesterPage /></PageTransition>} />
        <Route path="/subject/:subjectId" element={<PageTransition><SubjectPage /></PageTransition>} />
        <Route path="/unit/:unitId" element={<PageTransition><UnitPage /></PageTransition>} />
        <Route path="/topic/:topicId" element={<PageTransition><TopicPage /></PageTransition>} />
        <Route path="/dashboard" element={<PageTransition><DashboardPage /></PageTransition>} />
        <Route path="/search" element={<PageTransition><SearchPage /></PageTransition>} />
        <Route path="/cgpa-calculator" element={<PageTransition><CGPACalculator /></PageTransition>} />
        <Route path="/sgpa-calculator" element={<PageTransition><SGPACalculator /></PageTransition>} />
        <Route path="/bunk-calculator" element={<PageTransition><BunkCalculator /></PageTransition>} />
        <Route path="/exam-mode" element={<PageTransition><ExamModePage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  // Always show splash on every reload
  const hasSeenSplash = false
  const hasSelectedType = !!localStorage.getItem('cc-student-type')

  const [showSplash, setShowSplash] = useState(!hasSeenSplash)
  const [showTypeSelector, setShowTypeSelector] = useState(false)

  const handleSplashComplete = useCallback(() => {
    sessionStorage.setItem('cc-splash-seen', 'true')
    setShowSplash(false)
    if (!hasSelectedType) {
      setShowTypeSelector(true)
    }
  }, [hasSelectedType])

  const handleTypeSelected = useCallback(() => {
    setShowTypeSelector(false)
  }, [])

  return (
    <BrowserRouter>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        {showTypeSelector && <StudentTypeSelector onSelect={handleTypeSelected} />}
      </AnimatePresence>
      {!showSplash && !showTypeSelector && (
        <>
          <AnimatedRoutes />
          <FloatingCalculators />
        </>
      )}
    </BrowserRouter>
  )
}
