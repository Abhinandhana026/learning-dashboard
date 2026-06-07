'use client'

import { motion } from 'framer-motion'
import { Flame, Trophy, Clock } from 'lucide-react'
import { itemVariants } from './BentoGrid'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning 🌅'
  if (hour < 17) return 'Good afternoon ☀️'
  return 'Good evening 🌙'
}

export default function HeroTile({ courseCount = 0 }: { courseCount?: number }) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ scale: 1.005 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-2xl overflow-hidden border border-[#1e1e2e] bg-[#12121a] p-8 md:p-10"
    >
      {/* background gradients - more pronounced */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-transparent to-indigo-900/40 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-6">

        {/* top row: text + badge */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-slate-400 text-sm tracking-wide">{getGreeting()}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Welcome back,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                Abhi
              </span>
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              You&apos;re making great progress. Keep it up!
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 shrink-0 gap-1">
            <Trophy className="w-5 h-5 text-violet-400" />
            <span className="text-violet-300 text-xs font-bold">Lv.7</span>
          </div>
        </div>

        {/* divider */}
        <div className="h-px bg-gradient-to-r from-violet-500/20 via-indigo-500/20 to-transparent" />

        {/* stats row */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2.5 bg-orange-500/10 border border-orange-500/20 rounded-full px-5 py-2.5">
            <Flame className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-semibold">12 Day Streak</span>
          </div>
          <div className="flex items-center gap-2.5 bg-violet-500/10 border border-violet-500/20 rounded-full px-5 py-2.5">
            <span className="text-violet-300 text-sm font-semibold">
              {courseCount} Active Course{courseCount !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="flex items-center gap-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-5 py-2.5">
            <Clock className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 text-sm font-semibold">24h This Week</span>
          </div>
        </div>

      </div>
    </motion.article>
  )
}