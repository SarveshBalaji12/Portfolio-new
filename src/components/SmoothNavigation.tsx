'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface SmoothNavigationProps {
  sections: string[]
}

export default function SmoothNavigation({ sections }: SmoothNavigationProps) {
  const [activeSection, setActiveSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)

      // Determine active section based on scroll position
      const sectionElements = sections.map(id => document.getElementById(id))
      const scrollPosition = scrollTop + window.innerHeight / 2

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index])
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Navigation Dots */}
      <div className="nav-dots">
        {sections.map((section, index) => (
          <motion.div
            key={section}
            className={`nav-dot ${activeSection === index ? 'active' : ''}`}
            onClick={() => scrollToSection(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>

      {/* Keyboard Navigation */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-3 py-2">
          <motion.button
            onClick={() => scrollToSection(Math.max(0, activeSection - 1))}
            className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={activeSection === 0}
          >
            ↑
          </motion.button>
          <span className="text-xs text-slate-600 dark:text-slate-300 flex items-center px-2">
            {activeSection + 1} / {sections.length}
          </span>
          <motion.button
            onClick={() => scrollToSection(Math.min(sections.length - 1, activeSection + 1))}
            className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={activeSection === sections.length - 1}
          >
            ↓
          </motion.button>
        </div>
      </div>
    </>
  )
}