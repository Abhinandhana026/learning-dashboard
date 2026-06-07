'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Code2, Server, Palette, Cpu, BookOpen, Layers } from 'lucide-react'
import type { Course } from '@/types'
import { itemVariants } from './BentoGrid'

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
}

const cardGradients = [
  'from-violet-900/20 to-indigo-900/20',
  'from-indigo-900/20 to-blue-900/20',
  'from-fuchsia-900/20 to-violet-900/20',
  'from-blue-900/20 to-cyan-900/20',
]

const glowColors = [
  'rgba(139, 92, 246, 0.4)',
  'rgba(99, 102, 241, 0.4)',
  'rgba(217, 70, 239, 0.4)',
  'rgba(59, 130, 246, 0.4)',
]

export default function CourseCard({ course, index }: { course: Course; index: number }) {
  const [displayProgress, setDisplayProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayProgress(course.progress)
    }, 300 + index * 120)
    return () => clearTimeout(timer)
  }, [course.progress, index])

  const gradient = cardGradients[index % cardGradients.length]
  const glow = glowColors[index % glowColors.length]

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-2xl overflow-hidden border border-[#1e1e2e] bg-[#12121a] p-6 flex flex-col gap-4 group cursor-pointer"
    >
      {/* background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} pointer-events-none`} />

      {/* grain texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* hover glow border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${glow}` }}
      />

      {/* top glow blob */}
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none bg-violet-500" />

      {/* icon + title */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
          {iconMap[course.icon_name] ?? <BookOpen className="w-5 h-5" />}
        </div>
        <h3 className="text-white font-semibold text-sm leading-tight">{course.title}</h3>
      </div>

      {/* progress */}
      <div className="relative z-10 flex flex-col gap-2 mt-auto">
        <div className="flex justify-between items-center">
          <span className="text-xs text-slate-400">Progress</span>
          <span className="text-xs text-violet-400 font-bold">{course.progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-[#1e1e2e] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
            initial={{ width: '0%' }}
            animate={{ width: `${displayProgress}%` }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 + index * 0.12 }}
          />
        </div>
        <p className="text-xs text-slate-500">
          {course.progress >= 80 ? '🔥 Almost done!' : course.progress >= 50 ? '⚡ Halfway there' : '🚀 Just getting started'}
        </p>
      </div>
    </motion.article>
  )
}