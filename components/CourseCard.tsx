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

const cardThemes = [
  { gradient: 'from-violet-600/20 via-purple-600/10 to-transparent', glow: '#7c5cfc', icon: 'rgba(124,92,252,0.15)', iconBorder: 'rgba(124,92,252,0.3)', iconColor: '#7c5cfc', bar: 'linear-gradient(90deg, #7c5cfc, #a78bfa)' },
  { gradient: 'from-blue-600/20 via-indigo-600/10 to-transparent', glow: '#5b8df6', icon: 'rgba(91,141,246,0.15)', iconBorder: 'rgba(91,141,246,0.3)', iconColor: '#5b8df6', bar: 'linear-gradient(90deg, #5b8df6, #93c5fd)' },
  { gradient: 'from-pink-600/20 via-fuchsia-600/10 to-transparent', glow: '#e040b5', icon: 'rgba(224,64,181,0.15)', iconBorder: 'rgba(224,64,181,0.3)', iconColor: '#e040b5', bar: 'linear-gradient(90deg, #e040b5, #f472b6)' },
  { gradient: 'from-cyan-600/20 via-teal-600/10 to-transparent', glow: '#22d3ee', icon: 'rgba(34,211,238,0.15)', iconBorder: 'rgba(34,211,238,0.3)', iconColor: '#22d3ee', bar: 'linear-gradient(90deg, #22d3ee, #67e8f9)' },
]

function getStatus(progress: number) {
  if (progress >= 80) return { emoji: '🔥', text: 'Almost done!' }
  if (progress >= 50) return { emoji: '⚡', text: 'Halfway there' }
  return { emoji: '🚀', text: 'Just getting started' }
}

export default function CourseCard({ course, index }: { course: Course; index: number }) {
  const [displayProgress, setDisplayProgress] = useState(0)
  const theme = cardThemes[index % cardThemes.length]
  const status = getStatus(course.progress)

  useEffect(() => {
    const timer = setTimeout(() => setDisplayProgress(course.progress), 400 + index * 150)
    return () => clearTimeout(timer)
  }, [course.progress, index])

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ scale: 1.04, y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative rounded-2xl overflow-hidden border border-[#1f1f2e] bg-[#16161f] p-6 flex flex-col gap-5 group cursor-pointer`}
      style={{ minHeight: '200px' }}
    >
      {/* card gradient bg */}
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} pointer-events-none`} />

      {/* noise texture */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }} />

      {/* hover glow border */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{ boxShadow: `inset 0 0 0 1px ${theme.glow}66, 0 0 30px ${theme.glow}22` }}
      />

      {/* top corner glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
        style={{ background: theme.glow }} />

      {/* icon + title */}
      <div className="relative z-10 flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border"
          style={{ background: theme.icon, borderColor: theme.iconBorder, color: theme.iconColor }}>
          {iconMap[course.icon_name] ?? <BookOpen className="w-5 h-5" />}
        </div>
        <div className="flex flex-col gap-0.5 pt-0.5">
          <h3 className="font-display text-sm font-semibold text-[#f0f0ff] leading-snug">{course.title}</h3>
          <p className="text-xs text-[#44445a]">In progress</p>
        </div>
      </div>

      {/* progress section */}
      <div className="relative z-10 flex flex-col gap-2.5 mt-auto">
        <div className="flex justify-between items-baseline">
          <span className="text-xs text-[#8888aa] uppercase tracking-widest font-medium">Progress</span>
          <span className="font-display text-lg font-bold" style={{ color: theme.iconColor }}>
            {course.progress}%
          </span>
        </div>

        {/* progress bar track */}
        <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: '#1f1f2e' }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: theme.bar }}
            initial={{ width: '0%' }}
            animate={{ width: `${displayProgress}%` }}
            transition={{ duration: 1.4, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 + index * 0.15 }}
          />
        </div>

        <p className="text-xs text-[#8888aa] flex items-center gap-1.5">
          <span>{status.emoji}</span>
          <span>{status.text}</span>
        </p>
      </div>
    </motion.article>
  )
}