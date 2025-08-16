'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const containerRect = containerRef.current.getBoundingClientRect()
      const centerX = containerRect.left + containerRect.width / 2
      const centerY = containerRect.top + containerRect.height / 2

      const rotateX = (clientY - centerY) / 20
      const rotateY = (clientX - centerX) / 20

      containerRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const floatingElements = [
    { icon: '💻', delay: 0, x: 10, y: 10 },
    { icon: '🤖', delay: 0.5, x: 80, y: 20 },
    { icon: '📊', delay: 1, x: 20, y: 80 },
    { icon: '🔧', delay: 1.5, x: 70, y: 70 },
    { icon: '🚀', delay: 2, x: 50, y: 30 },
    { icon: '💡', delay: 2.5, x: 30, y: 60 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-20"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  )
}