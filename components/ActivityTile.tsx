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

const intensityStyle = (value: number): string => {
  if (value === 0) return '#1f1f2e'
  if (value === 1) return '#3b1f7a'
  if (value === 2) return '#5b32b8'
  if (value === 3) return '#7c5cfc'
  return '#a78bfa'
}

const stats = [
  { icon: Zap, label: 'Current Streak', value: '12 days', color: '#f97316', bg: 'rgba(249,115,22,0.1)', border: 'rgba(249,115,22,0.2)' },
  { icon: Target, label: 'Lessons Done', value: '84', color: '#7c5cfc', bg: 'rgba(124,92,252,0.1)', border: 'rgba(124,92,252,0.2)' },
  { icon: Award, label: 'Certificates', value: '3', color: '#22d3ee', bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.2)' },
]

export default function ActivityTile() {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ scale: 1.005 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-3xl overflow-hidden border border-[#1f1f2e] bg-[#16161f] p-8 group"
    >
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #7c5cfc, transparent)' }} />
        <div className="absolute top-0 left-1/2 w-96 h-px opacity-30"
          style={{ background: 'linear-gradient(90deg, transparent, #7c5cfc, transparent)' }} />
      </div>

      {/* hover border */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(124, 92, 252, 0.4)' }} />

      <div className="relative z-10 flex flex-col lg:flex-row gap-10">

        {/* graph section */}
        <div className="flex-1 flex flex-col gap-5">
          <div>
            <h3 className="font-display text-base font-semibold text-[#f0f0ff]">Learning Activity</h3>
            <p className="text-xs text-[#44445a] mt-1">Activity over the last 12 weeks</p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {activityData.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-2 shrink-0">
                {week.map((day, di) => (
                  <motion.div
                    key={di}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (wi * 7 + di) * 0.006, type: 'spring', stiffness: 300 }}
                    className="w-3.5 h-3.5 rounded-sm"
                    style={{ background: intensityStyle(day) }}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <span className="text-[11px] text-[#44445a]">Less</span>
            {[0,1,2,3,4].map((v) => (
              <div key={v} className="w-3 h-3 rounded-sm" style={{ background: intensityStyle(v) }} />
            ))}
            <span className="text-[11px] text-[#44445a]">More</span>
          </div>
        </div>

        {/* vertical divider */}
        <div className="hidden lg:block w-px self-stretch"
          style={{ background: 'linear-gradient(to bottom, transparent, #1f1f2e 20%, #1f1f2e 80%, transparent)' }} />

        {/* stats */}
        <div className="flex flex-row lg:flex-col gap-4 lg:min-w-[190px] lg:justify-center">
          {stats.map(({ icon: Icon, label, value, color, bg, border }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex-1 lg:flex-none flex flex-col gap-3 rounded-2xl p-4 border"
              style={{ background: bg, borderColor: border }}
            >
              <div className="flex items-center gap-2">
                <Icon className="w-3.5 h-3.5" style={{ color }} />
                <span className="text-xs text-[#8888aa] font-medium">{label}</span>
              </div>
              <p className="font-display text-2xl font-bold" style={{ color }}>{value}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.article>
  )
}