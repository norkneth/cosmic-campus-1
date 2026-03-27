'use client'

import { motion } from 'framer-motion'
import { Menu, X, Search } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  const navLinks = [
    { label: 'Branches', to: '/branches' },
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'Search', to: '/search' },
  ]

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div className={`w-full px-4 sm:px-8 lg:px-12 py-3 sm:py-4 transition-all duration-300 ease-out ${
          isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border' : 'bg-background/70 backdrop-blur-md'
        }`}>
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <span className="font-bagel text-foreground text-lg sm:text-xl tracking-wider">COSMIC CAMPUS</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map(link => (
                <Link key={link.to} to={link.to} className="text-foreground/80 hover:text-foreground font-medium text-sm gentle-animation hover:scale-105">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <ThemeSwitcher />
              <Link to="/search" className="glass-effect p-2.5 sm:p-3 rounded-full text-foreground hover:bg-foreground/10 gentle-animation">
                <Search className="w-4 h-4" />
              </Link>
              <Link to="/dashboard" className="hidden sm:block bg-accent-blue text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-md hover:opacity-90 gentle-animation text-sm">
                Dashboard
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 sm:p-3 rounded-full text-foreground hover:bg-foreground/10 gentle-animation cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {isMobileMenuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-md z-[80]" onClick={() => setIsMobileMenuOpen(false)} />
      )}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="lg:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-background border-l border-border z-[90]"
      >
        <div className="flex flex-col p-6 pt-20 space-y-3">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-foreground hover:bg-muted rounded-lg font-medium text-base">
              {link.label}
            </Link>
          ))}
          <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="bg-accent-blue text-white font-semibold px-6 py-3 rounded-lg text-center mt-4">
            Dashboard
          </Link>
        </div>
      </motion.div>
    </>
  )
}
