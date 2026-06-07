'use client'

import { motion } from 'framer-motion'
import { Flame, Trophy, Clock } from 'lucide-react'
import { itemVariants } from './BentoGrid'

export default function HeroTile() {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ scale: 1.005 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-2xl overflow-hidden border border-[#1e1e2e] bg-[#12121a] p-8"
    >
      {/* background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-transparent to-indigo-900/30 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* all content in one relative z-10 container */}
      <div className="relative z-10 flex flex-col gap-4">

        {/* top row: text + badge */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-slate-400 text-sm mb-1">Good morning 👋</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Welcome back,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                Abhi
              </span>
            </h1>
            <p className="text-slate-400 mt-1 text-sm">You&apos;re making great progress. Keep it up!</p>
          </div>

          <div className="flex flex-col items-center justify-center w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 shrink-0">
            <Trophy className="w-5 h-5 text-violet-400" />
            <span className="text-violet-300 text-xs font-bold mt-0.5">Lv.7</span>
          </div>
        </div>

        {/* stats row */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2">
            <Flame className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-semibold">12 Day Streak</span>
          </div>
          <div className="flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2">
            <span className="text-violet-300 text-sm font-semibold">4 Active Courses</span>
          </div>
          <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2">
            <Clock className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 text-sm font-semibold">24h This Week</span>
          </div>
        </div>

      </div>
    </motion.article>
  )
}