'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

interface Skill {
  name: string
  category: string
  color: string
  icon?: string
  description?: string
}

interface SkillCategory {
  name: string
  skills: Skill[]
  description: string
}

export default function DynamicSkills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      description: "Core programming languages I'm proficient in",
      skills: [
        { name: "Python", category: "Programming", color: "from-slate-600 to-slate-800", icon: "🐍", description: "Versatile language for data science and web development" },
        { name: "JavaScript", category: "Programming", color: "from-slate-500 to-slate-700", icon: "🟨", description: "Essential for modern web development" },
        { name: "C/C++", category: "Programming", color: "from-slate-600 to-slate-800", icon: "⚡", description: "Systems programming and high-performance applications" },
        { name: "SQL", category: "Programming", color: "from-slate-500 to-slate-700", icon: "🗄️", description: "Database querying and management" },
        { name: "R", category: "Programming", color: "from-slate-600 to-slate-800", icon: "📊", description: "Statistical computing and data analysis" },
        { name: "HTML/CSS", category: "Programming", color: "from-slate-500 to-slate-700", icon: "🎨", description: "Web structure and styling fundamentals" },
        { name: "Solidity", category: "Programming", color: "from-slate-600 to-slate-800", icon: "⛓️", description: "Smart contract development for blockchain" }
      ]
    },
    {
      name: "Frameworks & Tools",
      description: "Modern frameworks and development tools",
      skills: [
        { name: "React.js", category: "Frameworks", color: "from-slate-500 to-slate-700", icon: "⚛️", description: "Component-based UI library" },
        { name: "Node.js", category: "Frameworks", color: "from-slate-600 to-slate-800", icon: "🟢", description: "Server-side JavaScript runtime" },
        { name: "Tailwind CSS", category: "Frameworks", color: "from-slate-500 to-slate-700", icon: "🎯", description: "Utility-first CSS framework" },
        { name: "Git/GitHub", category: "Frameworks", color: "from-slate-600 to-slate-800", icon: "📦", description: "Version control and collaboration" },
        { name: "Power BI", category: "Frameworks", color: "from-slate-500 to-slate-700", icon: "📈", description: "Business intelligence and data visualization" },
        { name: "Tableau", category: "Frameworks", color: "from-slate-600 to-slate-800", icon: "📊", description: "Interactive data visualization platform" },
        { name: "Linux", category: "Frameworks", color: "from-slate-600 to-slate-800", icon: "🐧", description: "Operating system and server management" }
      ]
    },
    {
      name: "AI/ML & Data Science",
      description: "Specialized skills in artificial intelligence and data science",
      skills: [
        { name: "Machine Learning", category: "AI/ML", color: "from-slate-600 to-slate-800", icon: "🤖", description: "Algorithms and predictive modeling" },
        { name: "Natural Language Processing", category: "AI/ML", color: "from-slate-600 to-slate-800", icon: "🗣️", description: "Text analysis and language understanding" },
        { name: "Computer Vision", category: "AI/ML", color: "from-slate-600 to-slate-800", icon: "👁️", description: "Image and video analysis" },
        { name: "Data Analysis", category: "AI/ML", color: "from-slate-500 to-slate-700", icon: "📊", description: "Statistical analysis and insights" },
        { name: "TensorFlow", category: "AI/ML", color: "from-slate-600 to-slate-800", icon: "🔥", description: "Deep learning framework" },
        { name: "Pandas", category: "AI/ML", color: "from-slate-600 to-slate-800", icon: "🐼", description: "Data manipulation and analysis" },
        { name: "NumPy", category: "AI/ML", color: "from-slate-600 to-slate-800", icon: "🔢", description: "Numerical computing foundation" }
      ]
    },
    {
      name: "Coursework & Academics",
      description: "Key academic subjects and theoretical knowledge",
      skills: [
        { name: "Data Structures & Algorithms", category: "Academics", color: "from-slate-600 to-slate-800", icon: "🏗️", description: "Fundamental programming concepts" },
        { name: "Operating Systems", category: "Academics", color: "from-slate-600 to-slate-800", icon: "💻", description: "System architecture and processes" },
        { name: "Database Management", category: "Academics", color: "from-slate-600 to-slate-800", icon: "🗄️", description: "Data storage and retrieval systems" },
        { name: "Computer Networks", category: "Academics", color: "from-slate-600 to-slate-800", icon: "🌐", description: "Network protocols and communication" },
        { name: "Natural Language Processing", category: "Academics", color: "from-slate-600 to-slate-800", icon: "🗣️", description: "Computational linguistics" },
        { name: "Computer Architecture", category: "Academics", color: "from-slate-600 to-slate-800", icon: "🏛️", description: "Hardware design and organization" },
      ]
    }
  ]

  const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
    const [isHovered, setIsHovered] = useState(false)
    
    return (
      <motion.div
        key={skill.name}
        className="relative group"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ 
          scale: 1.05,
          y: -10,
          z: 50
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className={`bg-gradient-to-br ${skill.color} p-1 rounded-xl shadow-lg h-full`}>
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 h-full flex flex-col items-center text-center">
            <motion.div
              className="text-5xl mb-4"
              animate={{ 
                scale: isHovered ? 1.2 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              {skill.icon}
            </motion.div>
            
            <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-100">
              {skill.name}
            </h3>
            
            {skill.description && (
              <motion.p 
                className="text-sm text-slate-600 dark:text-slate-400 mb-3"
                initial={{ opacity: 0.7 }}
                animate={{ opacity: isHovered ? 1 : 0.7 }}
                transition={{ duration: 0.2 }}
              >
                {skill.description}
              </motion.p>
            )}
            
            <Badge variant="outline" className="text-xs border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400">
              {skill.category}
            </Badge>
            
            {/* Decorative corner elements */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-slate-400 rounded-full opacity-50"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 bg-slate-400 rounded-full opacity-50"></div>
          </div>
        </div>
      </motion.div>
    )
  }

  const SkillGrid = ({ skills }: { skills: Skill[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  )

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {skillCategories.map((category, index) => (
          <motion.button
            key={category.name}
            onClick={() => setActiveCategory(index)}
            className={`relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${
              activeCategory === index
                ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 shadow-xl'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{category.name}</span>
            {activeCategory === index && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-800"
                layoutId="activeCategory"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Category Description */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          {skillCategories[activeCategory].description}
        </p>
      </motion.div>

      {/* Skills Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Grid Layout */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-100">
                Skills Overview
              </h3>
              <div className="w-12 h-1 bg-slate-300 dark:bg-slate-600 rounded-full ml-4"></div>
            </div>
            <SkillGrid skills={skillCategories[activeCategory].skills} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}