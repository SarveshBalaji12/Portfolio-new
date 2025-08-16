'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import ParticleBackground from '@/components/ParticleBackground'
import FloatingElements from '@/components/FloatingElements'
import VideoBackground from '@/components/VideoBackground'
import ResumeViewer from '@/components/ResumeViewer'
import DynamicSkills from '@/components/DynamicSkills'
import ResumeDownload from '@/components/ResumeDownload'

type Section = 'hero' | 'about' | 'education' | 'experience' | 'projects' | 'skills' | 'resume'

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState<Section>('hero')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const sections: { id: Section; name: string; icon: string }[] = [
    { id: 'hero', name: 'Home', icon: '🏠' },
    { id: 'about', name: 'About', icon: '👤' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'experience', name: 'Experience', icon: '💼' },
    { id: 'projects', name: 'Projects', icon: '🚀' },
    { id: 'skills', name: 'Skills', icon: '⚡' },
    { id: 'resume', name: 'Resume', icon: '📄' }
  ]

  const projects = [
    {
      title: 'ChainDock',
      description: 'Multi-chain wallet for Ethereum, Solana, and Bitcoin',
      tech: ['React', 'Tailwind CSS', 'DaisyUI', 'ethers.js', '@solana/web3.js', 'bitcoinjs-lib'],
      period: 'Aug 2025',
      demo: 'https://chaindock.netlify.app/',
      github: 'https://github.com/SarveshBalaji12/crypto-wallet'
    },
    {
      title: 'AspirePath',
      description: 'Career guidance app with AI-driven learning roadmaps',
      tech: ['Python', 'MongoDB', 'Streamlit'],
      period: 'Apr 2025 - May 2025',
      github: 'https://github.com/SarveshBalaji12/AspirePath'
    },
    {
      title: 'Subjective Answer Evaluation System',
      description: 'Automated subjective answer scoring using OCR and NLP',
      tech: ['NLP', 'OCR', 'NLTK', 'Flask'],
      period: 'Sep 2024 - Jan 2025',
      demo: 'https://subjective-answer-evaluation-system.streamlit.app/',
      github: 'https://github.com/SarveshBalaji12/Subjective-Answer-Evaluation-System'
    }
  ]

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="min-h-[80vh] flex items-center justify-center"
          >
            <div className="text-center px-4 max-w-4xl mx-auto">
              <motion.div 
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-slate-100 mb-6"
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  S Sarvesh Balaji
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Computer Science Engineering Student | Data Science Specialist
                </motion.p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {[
                    { icon: '📧', text: 'sarveshbalaji26@gmail.com' },
                    { icon: '📱', text: '+91-7975588571' },
                    { icon: '📍', text: 'Bengaluru, India' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-md border border-slate-200 dark:border-slate-600">
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          {item.icon} {item.text}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )

      case 'about':
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-4 py-8"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-600">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">About Me</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                I am a passionate Computer Science Engineering student specializing in Data Science at RNS Institute of Technology. 
                With a CGPA of 9.08/10, I have demonstrated excellence in academics while actively pursuing hands-on experience in 
                AI, Machine Learning, and full-stack development. My journey includes working with industry leaders like Samsung and 
                developing innovative projects that bridge the gap between theory and practical application.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-semibold text-lg mb-4 text-slate-800 dark:text-slate-100">🏆 Achievements</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Selected among top 40 of 900 applicants for Samsung Innovation Campus</li>
                    <li>• Gold Medalist in Mathematics (1st semester)</li>
                  </ul>
                </motion.div>
                <motion.div 
                  className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-semibold text-lg mb-4 text-slate-800 dark:text-slate-100">🎯 Interests</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Playing chess</li>
                    <li>• Cricket</li>
                    <li>• Watching movies</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )

      case 'education':
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-4 py-8"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-600">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">Education</h2>
              <div className="space-y-6">
                <motion.div 
                  className="border-l-4 border-slate-400 dark:border-slate-500 pl-6"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">B.E. in CSE (Data Science)</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300">RNS Institute of Technology</p>
                  <p className="text-slate-500">Bengaluru, India</p>
                  <p className="text-slate-500">Dec 2022 - Jun 2026</p>
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-slate-700 dark:text-slate-200">CGPA</span>
                      <span className="text-lg font-bold text-slate-800 dark:text-slate-100">9.08 / 10</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-3">
                      <motion.div 
                        className="bg-slate-600 dark:bg-slate-400 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '90.8%' }}
                        transition={{ duration: 1.5 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )

      case 'experience':
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-4 py-8"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-600">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">Experience</h2>
              <div className="space-y-8">
                {[
                  {
                    title: "AI Trainee",
                    company: "Samsung Innovation Campus",
                    period: "Nov 2024 - Present",
                    location: "Bengaluru, India",
                    points: [
                      "Completed hands-on projects in Machine Learning, Computer Vision, and Natural Language Processing",
                      "Collaborated with peers on developing scalable AI-driven applications using Python and TensorFlow"
                    ]
                  },
                  {
                    title: "Summer Intern - C++ (Linux)",
                    company: "Sasken Technologies",
                    period: "Jun 2025 - Jul 2025",
                    location: "Remote",
                    points: [
                      "Built a traffic light controller that adjusts signal timing based on simulated real-time vehicle density",
                      "Applied Object-Oriented Programming to create a modular design supporting future features like pedestrian or emergency signals"
                    ]
                  }
                ].map((exp, index) => (
                  <motion.div 
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-600"></div>
                    <div className="relative pl-8">
                      <div className="absolute left-[-8px] top-2 w-4 h-4 bg-slate-400 dark:bg-slate-500 rounded-full"></div>
                      <motion.div 
                        className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{exp.title}</h3>
                        <p className="text-lg text-slate-600 dark:text-slate-300">{exp.company}</p>
                        <p className="text-slate-500">{exp.period}</p>
                        <p className="text-slate-500">{exp.location}</p>
                        <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                          {exp.points.map((point, pointIndex) => (
                            <li key={pointIndex}>• {point}</li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )

      case 'projects':
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto px-4 py-8"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-600">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    whileHover={{ 
                      scale: 1.05,
                      y: -5
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="h-full bg-slate-50 dark:bg-slate-700 rounded-xl p-6 border border-slate-200 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">{project.title}</h3>
                      <p className="text-slate-500 text-sm mb-4">{project.period}</p>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.demo && project.demo !== 'link' && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="text-xs">
                              Demo
                            </Button>
                          </a>
                        )}
                        {project.github && project.github !== 'link' && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="text-xs">
                              GitHub
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )

      case 'skills':
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto px-4 py-8"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-600">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">Skills & Expertise</h2>
              <DynamicSkills />
            </div>
          </motion.div>
        )

      case 'resume':
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto px-4 py-8"
          >
            <ResumeDownload />
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      <VideoBackground />
      <FloatingElements />
      
      {/* Navigation Sidebar */}
      <div className="fixed left-0 top-0 h-full w-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-r border-slate-200 dark:border-slate-700 z-50">
        <div className="flex flex-col items-center py-8 space-y-4">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-2xl mb-1">{section.icon}</span>
              <span className="text-xs font-medium">{section.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ml-20 min-h-screen flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          {renderSection()}
        </AnimatePresence>
      </div>

      {/* Resume Viewer */}
      <ResumeViewer />
    </div>
  )
}