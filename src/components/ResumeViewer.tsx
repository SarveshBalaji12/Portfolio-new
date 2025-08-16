'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function ResumeViewer() {
  const [isOpen, setIsOpen] = useState(false)

  const resumeData = {
    personal: {
      name: "S Sarvesh Balaji",
      email: "sarveshbalaji26@gmail.com",
      phone: "+91-7975588571",
      location: "Bengaluru, India"
    },
    education: [
      {
        degree: "B.E. in CSE (Data Science)",
        institution: "RNS Institute of Technology",
        location: "Bengaluru, India",
        period: "Dec 2022 - Jun 2026",
        cgpa: "9.08/10"
      }
    ],
    experience: [
      {
        title: "AI Trainee",
        company: "Samsung Innovation Campus",
        location: "Bengaluru, India",
        period: "Nov 2024 - Present",
        responsibilities: [
          "Completed hands-on projects in Machine Learning, Computer Vision, and Natural Language Processing",
          "Collaborated with peers on developing scalable AI-driven applications using Python and TensorFlow"
        ]
      },
      {
        title: "Summer Intern - C++ (Linux)",
        company: "Sasken Technologies",
        location: "Remote",
        period: "Jun 2025 - Jul 2025",
        responsibilities: [
          "Built a traffic light controller that adjusts signal timing based on simulated real-time vehicle density",
          "Applied Object-Oriented Programming to create a modular design supporting future features like pedestrian or emergency signals"
        ]
      }
    ],
    projects: [
      {
        title: "ChainDock",
        description: "Multi-chain wallet for Ethereum, Solana, and Bitcoin",
        tech: ["React", "Tailwind CSS", "DaisyUI", "ethers.js", "@solana/web3.js", "bitcoinjs-lib"],
        period: "Aug 2025",
        demo: "https://chaindock.netlify.app/",
        github: "https://github.com/SarveshBalaji12/crypto-wallet"
      },
      {
        title: "AspirePath",
        description: "Career guidance app with AI-driven learning roadmaps",
        tech: ["Python", "MongoDB", "Streamlit"],
        period: "Apr 2025 - May 2025",
        github: "https://github.com/SarveshBalaji12/AspirePath"
      },
      {
        title: "Subjective Answer Evaluation System",
        description: "Automated subjective answer scoring using OCR and NLP",
        tech: ["NLP", "OCR", "NLTK", "Flask"],
        period: "Sep 2024 - Jan 2025",
        demo: "https://subjective-answer-evaluation-system.streamlit.app/",
        github: "https://github.com/SarveshBalaji12/Subjective-Answer-Evaluation-System"
      }
    ],
    skills: {
      "Programming Languages": ["C", "C++", "Python", "R", "HTML", "CSS", "JavaScript", "Solidity", "SQL"],
      "Frameworks & Tools": ["React.js", "Node.js", "Tailwind CSS", "LaTeX", "Git", "GitHub", "API", "Power BI", "Tableau", "Linux"],
      "Coursework": ["Data Structures and Algorithms", "Operating Systems", "Database Management System", "Computer Networks", "Natural Language Processing", "Computer Architecture"]
    },
    certifications: [
      { name: "Data Science for Engineers", issuer: "NPTEL", date: "Apr 2025" },
      { name: "Machine Learning with Python", issuer: "IBM", date: "Feb 2025" },
      { name: "Azure Data Fundamentals", issuer: "Microsoft", date: "Dec 2024" }
    ]
  }

  const downloadResume = () => {
    const resumeContent = `
S SARVESH BALAJI
Computer Science Engineering Student | Data Science Specialist

CONTACT INFORMATION
Email: sarveshbalaji26@gmail.com
Phone: +91-7975588571
Location: Bengaluru, India

EDUCATION
B.E. in CSE (Data Science) | CGPA: 9.08/10
RNS Institute of Technology, Bengaluru, India
Dec 2022 - Jun 2026

EXPERIENCE

AI Trainee
Samsung Innovation Campus, Bengaluru, India
Nov 2024 - Present
- Completed hands-on projects in Machine Learning, Computer Vision, and Natural Language Processing
- Collaborated with peers on developing scalable AI-driven applications using Python and TensorFlow

Summer Intern - C++ (Linux)
Sasken Technologies, Remote
Jun 2025 - Jul 2025
- Built a traffic light controller that adjusts signal timing based on simulated real-time vehicle density
- Applied Object-Oriented Programming to create a modular design supporting future features like pedestrian or emergency signals

PROJECTS

ChainDock | Aug 2025
Multi-chain wallet for Ethereum, Solana, and Bitcoin
Technologies: React, Tailwind CSS, DaisyUI, ethers.js, @solana/web3.js, bitcoinjs-lib

AspirePath | Apr 2025 - May 2025
Career guidance app with AI-driven learning roadmaps
Technologies: Python, MongoDB, Streamlit

Subjective Answer Evaluation System | Sep 2024 - Jan 2025
Automated subjective answer scoring using OCR and NLP
Technologies: NLP, OCR, NLTK, Flask

SKILLS

Programming Languages: C, C++, Python, R, HTML, CSS, JavaScript, Solidity, SQL
Frameworks & Tools: React.js, Node.js, Tailwind CSS, LaTeX, Git, GitHub, API, Power BI, Tableau, Linux
Coursework: Data Structures and Algorithms, Operating Systems, Database Management System, Computer Networks, Natural Language Processing, Computer Architecture

CERTIFICATIONS

Data Science for Engineers - NPTEL | Apr 2025
Machine Learning with Python - IBM | Feb 2025
Azure Data Fundamentals - Microsoft | Dec 2024

INTERESTS
Playing chess, Cricket, Watching movies

ACHIEVEMENTS
- Selected among top 40 of 900 applicants for Samsung Innovation Campus
- Gold Medalist in Mathematics (1st semester)
    `.trim()

    const blob = new Blob([resumeContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'S_Sarvesh_Balaji_Resume.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg rounded-full px-6 py-3"
        size="lg"
      >
        📄 View Resume
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {resumeData.personal.name}
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                      Computer Science Engineering Student | Data Science Specialist
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    className="text-slate-500 hover:text-slate-700"
                  >
                    ✕
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-medium">{resumeData.personal.email}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <p className="text-sm text-slate-500">Phone</p>
                    <p className="font-medium">{resumeData.personal.phone}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="font-medium">{resumeData.personal.location}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-blue-600">Education</h2>
                    {resumeData.education.map((edu, index) => (
                      <Card key={index} className="mb-4">
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold">{edu.degree}</h3>
                          <p className="text-slate-600 dark:text-slate-300">{edu.institution}</p>
                          <p className="text-slate-500">{edu.location} | {edu.period}</p>
                          <p className="text-blue-600 font-medium">CGPA: {edu.cgpa}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-purple-600">Experience</h2>
                    {resumeData.experience.map((exp, index) => (
                      <Card key={index} className="mb-4">
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold">{exp.title}</h3>
                          <p className="text-purple-600 font-medium">{exp.company}</p>
                          <p className="text-slate-500">{exp.location} | {exp.period}</p>
                          <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-300">
                            {exp.responsibilities.map((resp, respIndex) => (
                              <li key={respIndex} className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-green-600">Projects</h2>
                    {resumeData.projects.map((project, index) => (
                      <Card key={index} className="mb-4">
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold">{project.title}</h3>
                          <p className="text-slate-600 dark:text-slate-300 mb-2">{project.description}</p>
                          <p className="text-slate-500 text-sm mb-2">{project.period}</p>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-2">
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline mr-4"
                              >
                                Demo
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                GitHub
                              </a>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-orange-600">Skills</h2>
                    {Object.entries(resumeData.skills).map(([category, skills], index) => (
                      <Card key={index} className="mb-4">
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold mb-2">{category}</h3>
                          <div className="flex flex-wrap gap-2">
                            {skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-red-600">Certifications</h2>
                    {resumeData.certifications.map((cert, index) => (
                      <Card key={index} className="mb-4">
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold">{cert.name}</h3>
                          <p className="text-slate-600 dark:text-slate-300">{cert.issuer}</p>
                          <p className="text-slate-500">{cert.date}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </section>
                </div>

                <div className="mt-8 flex gap-4">
                  <Button
                    onClick={downloadResume}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    📥 Download Resume
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}