'use client'

import { motion } from 'framer-motion'
import { Volume2, VolumeX, Menu, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0
      videoRef.current.muted = true
      videoRef.current.defaultMuted = true
      videoRef.current.addEventListener('play', () => {
        if (videoRef.current) {
          videoRef.current.muted = isMuted
          videoRef.current.volume = isMuted ? 0 : 0.7
        }
      })
      videoRef.current.play().catch(() => {})
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
      videoRef.current.volume = isMuted ? 0 : 0.7
    }
  }, [isMuted])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => { if (isMobileMenuOpen) setIsMobileMenuOpen(false) }
    if (isMobileMenuOpen) window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover scale-110" autoPlay muted loop playsInline>
        <source src="https://mojli.s3.us-east-2.amazonaws.com/Mojli+Website+upscaled+(12mb).webm" type="video/webm" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      <motion.nav initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="fixed top-0 left-0 right-0 w-full z-[110]">
        <div className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ease-out ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="font-bagel text-white text-xl tracking-wider">COSMIC CAMPUS</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: 'Branches', href: '#portfolio' },
                { label: 'How It Works', href: '#about' },
                { label: 'Features', href: '#services' },
                { label: 'Team', href: '#team' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <a key={link.href} href={link.href} className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105">{link.label}</a>
              ))}
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3 relative">
              <ThemeSwitcher />
              <div className="relative">
                <button onClick={() => setIsMuted(!isMuted)} className="glass-effect p-3 rounded-full text-white hover:bg-white/20 gentle-animation cursor-pointer">
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                {isMuted && (
                  <div className="absolute -bottom-10 right-0 flex items-center text-white/80">
                    <span className="whitespace-nowrap font-medium text-sm mr-2">Sound On</span>
                    <span className="text-lg">↗</span>
                  </div>
                )}
              </div>
              
              <Link to="/branches" className="hidden sm:block bg-accent-blue backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 gentle-animation ml-4">
                Explore Branches
              </Link>

              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer z-[120] relative">
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {isMobileMenuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80] cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <motion.div initial={{ x: '100%' }} animate={{ x: isMobileMenuOpen ? '0%' : '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-black/90 backdrop-blur-xl border-l border-white/10 z-[90]" onClick={e => e.stopPropagation()}>
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMobileMenuOpen(false)} className="glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col px-6 pb-6 space-y-4 text-white">
            {['Branches', 'How It Works', 'Features', 'Team', 'Contact'].map(label => (
              <a key={label} href={`#${label.toLowerCase().replace(/ /g, '')}`} className="px-4 py-3 hover:bg-white/10 rounded-lg font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                {label}
              </a>
            ))}
            <Link to="/branches" className="bg-accent-blue text-white font-semibold px-6 py-3 rounded-lg text-center mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              Explore Branches
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Hero Text */}
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1.5 }} className="absolute bottom-12 left-6 sm:left-8 lg:left-12 z-40">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white">
            <span className="block">STREAM YOUR</span>
            <span className="block">EDUCATION</span>
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-md">A smarter way to explore your entire syllabus.</p>
          <div className="flex gap-4 mt-6">
            <Link to="/branches" className="bg-accent-blue text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 gentle-animation">
              Explore Branches
            </Link>
            <Link to="/dashboard" className="glass-effect text-white font-semibold px-6 py-3 rounded-md gentle-animation">
              Continue Learning
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
