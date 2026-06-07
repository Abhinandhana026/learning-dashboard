'use client'

import { motion } from 'framer-motion'
import { itemVariants } from './BentoGrid'
import { Zap, Target, Award } from 'lucide-react'

const activityData = [
  [4,2,1,3,0,2,4],[1,0,3,2,4,1,0],[2,3,0,4,1,2,3],
  [0,1,4,2,3,0,1],[3,2,1,0,4,2,3],[1,4,2,3,0,1,2],
  [2,0,3,1,4,2,0],[4,1,2,0,3,1,4],[0,3,1,4,2,0,3],
  [2,1,4,0,3,2,1],[3,0,2,4,1,3,0],[1,2,0,3,4,1,2],
]

const intensityClass = (value: number) => {
  if (value === 0) return 'bg-[#1e1e2e]'
  if (value === 1) return 'bg-violet-900/60'
  if (value === 2) return 'bg-violet-700/70'
  if (value === 3) return 'bg-violet-500/80'
  return 'bg-violet-400'
}

const stats = [
  { icon: Zap, label: 'Current Streak', value: '12 days', color: 'text-orange-400' },
  { icon: Target, label: 'Lessons Done', value: '84', color: 'text-violet-400' },
  { icon: Award, label: 'Certificates', value: '3', color: 'text-indigo-400' },
]

export default function ActivityTile() {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ scale: 1.005 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-2xl overflow-hidden border border-[#1e1e2e] bg-[#12121a] p-6 group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-transparent to-violet-900/10 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(139, 92, 246, 0.3)' }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row gap-6">

        {/* graph section */}
        <div className="flex-1">
          <h3 className="text-white font-semibold mb-1">Learning Activity</h3>
          <p className="text-slate-400 text-xs mb-4">Your activity over the last 12 weeks</p>
          <div className="flex gap-1">
            {activityData.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {week.map((day, di) => (
                  <motion.div
                    key={di}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (wi * 7 + di) * 0.005 }}
                    className={`w-3 h-3 rounded-sm ${intensityClass(day)}`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs text-slate-500">Less</span>
            {[0,1,2,3,4].map((v) => (
              <div key={v} className={`w-3 h-3 rounded-sm ${intensityClass(v)}`} />
            ))}
            <span className="text-xs text-slate-500">More</span>
          </div>
        </div>

        {/* stats section */}
        <div className="flex flex-row lg:flex-col justify-between lg:justify-center gap-4 lg:min-w-[160px]">
          {stats.map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="flex flex-col gap-1 bg-[#0a0a0f] rounded-xl p-3 border border-[#1e1e2e]">
              <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${color}`} />
                <span className="text-xs text-slate-500">{label}</span>
              </div>
              <p className={`text-lg font-bold ${color}`}>{value}</p>
            </div>
          ))}
        </div>

      </div>
    </motion.article>
  )
}