'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ResumeFile {
  name: string
  size: string
  type: string
  uploadDate: string
  url: string
}

export default function ResumeDownload() {
  const [resumeFiles, setResumeFiles] = useState<ResumeFile[]>([
    {
      name: "S_Sarvesh_Balaji_Resume.pdf",
      size: "2.4 MB",
      type: "PDF",
      uploadDate: "2024-01-15",
      url: "/resume/S_Sarvesh_Balaji_Resume.pdf"
    }
  ])

  const handleDownload = async (fileUrl: string, fileName: string) => {
    try {
      // Try to fetch the file first (works for same-origin static files)
      let res = await fetch(fileUrl, { cache: 'no-store' })

      // If not found and path contains /resume/, try fallback to root
      if (!res.ok && fileUrl.startsWith('/resume/')) {
        const fallback = fileUrl.replace('/resume/', '/')
        res = await fetch(fallback, { cache: 'no-store' })
      }

      if (res.ok) {
        const blob = await res.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = fileName
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
        return
      }

      // Fallback: create a direct link (may work if the file is served statically)
      const link = document.createElement('a')
      link.href = fileUrl
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err) {
      console.error('Download failed, attempting direct link fallback', err)
      const link = document.createElement('a')
      link.href = fileUrl
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleView = (fileUrl: string) => {
    // Open file in new tab for viewing
    window.open(fileUrl, '_blank')
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
          Download Resume
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Access my professional resume to learn more about my qualifications and experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resumeFiles.map((file, index) => (
          <motion.div
            key={file.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="h-full w-full"
          >
            <Card className="h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-4 md:p-6 min-h-0">
              <CardHeader className="text-center">
                <div className="mx-auto w-14 h-14 md:w-16 md:h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <CardTitle className="text-base md:text-lg text-slate-800 dark:text-slate-100">
                  {file.name}
                </CardTitle>
                <CardDescription className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                  {file.type} • {file.size}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4 max-h-[50vh] md:max-h-full overflow-y-auto pr-2">
                <div className="flex justify-center">
                  <Badge variant="outline" className="text-xs border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400">
                    Uploaded: {file.uploadDate}
                  </Badge>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Button
                    onClick={() => handleView(file.url)}
                    variant="outline"
                    className="w-full border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 py-2 text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Resume
                  </Button>
                  
                  <Button
                    onClick={() => handleDownload(file.url, file.name)}
                    className="w-full bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 hover:bg-slate-700 dark:hover:bg-slate-300 py-2 text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">
            Need a Different Format?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            If you require my resume in a specific format or have any questions, please don't hesitate to contact me.
          </p>
          <Button
            variant="outline"
            className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me
          </Button>
        </div>
      </motion.div>
    </div>
  )
}