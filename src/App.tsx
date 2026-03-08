import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Awards } from './components/Awards'
import { About } from './components/About'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import BranchesPage from './pages/BranchesPage'
import BranchPage from './pages/BranchPage'
import SemesterPage from './pages/SemesterPage'
import SubjectPage from './pages/SubjectPage'
import UnitPage from './pages/UnitPage'
import TopicPage from './pages/TopicPage'
import DashboardPage from './pages/DashboardPage'
import SearchPage from './pages/SearchPage'

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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/branches" element={<BranchesPage />} />
        <Route path="/branch/:branchId" element={<BranchPage />} />
        <Route path="/semester/:semesterId" element={<SemesterPage />} />
        <Route path="/subject/:subjectId" element={<SubjectPage />} />
        <Route path="/unit/:unitId" element={<UnitPage />} />
        <Route path="/topic/:topicId" element={<TopicPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  )
}
