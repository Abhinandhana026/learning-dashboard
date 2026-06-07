'use client'

import { motion } from 'framer-motion'
import { Flame, Clock, Zap } from 'lucide-react'
import { itemVariants } from './BentoGrid'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return { text: 'Good morning', emoji: '🌅' }
  if (hour < 17) return { text: 'Good afternoon', emoji: '☀️' }
  return { text: 'Good evening', emoji: '🌙' }
}

export default function HeroTile({ courseCount = 0 }: { courseCount?: number }) {
  const greeting = getGreeting()

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ scale: 1.008 }}
      transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
      className="relative rounded-3xl overflow-hidden border border-[#1f1f2e] p-7 md:p-9 group"
      style={{ background: '#16161f' }}
    >
      {/* mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #7c5cfc 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #5b8df6 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #e040b5 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#7c5cfc 1px, transparent 1px), linear-gradient(90deg, #7c5cfc 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* hover border glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(124, 92, 252, 0.5)' }}
      />

      <div className="relative z-10 flex flex-col gap-5">

        {/* greeting + name row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-base">{greeting.emoji}</span>
              <span
                className="text-sm font-medium tracking-wide"
                style={{ color: '#8888aa' }}
              >
                {greeting.text}
              </span>
            </div>
            <h1
              className="font-display text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
              style={{ color: '#f0f0ff' }}
            >
              Welcome back,{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #7c5cfc 0%, #e040b5 50%, #5b8df6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Abhi
              </span>
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: '#8888aa' }}>
              You&apos;re on a roll — keep pushing and finish strong today.
            </p>
          </div>

          {/* level badge */}
          <div
            className="shrink-0 flex flex-col items-center justify-center rounded-2xl border border-[#2a2a3e] px-4 py-3 gap-0.5"
            style={{
              background: 'linear-gradient(135deg, rgba(124,92,252,0.15), rgba(91,141,246,0.15))',
            }}
          >
            <span
              className="font-display text-2xl font-bold"
              style={{ color: '#7c5cfc' }}
            >
              7
            </span>
            <span
              className="text-[10px] uppercase tracking-widest font-medium"
              style={{ color: '#8888aa' }}
            >
              Level
            </span>
          </div>
        </div>

        {/* divider */}
        <div
          className="h-px"
          style={{
            background:
              'linear-gradient(90deg, rgba(124,92,252,0.3), rgba(91,141,246,0.3), transparent)',
          }}
        />

        {/* stat pills */}
        <div className="flex flex-wrap gap-3">
          {[
            {
              icon: Flame,
              label: '12 Day Streak',
              color: '#f97316',
              bg: 'rgba(249,115,22,0.1)',
              border: 'rgba(249,115,22,0.25)',
            },
            {
              icon: Zap,
              label: `${courseCount} Active Courses`,
              color: '#7c5cfc',
              bg: 'rgba(124,92,252,0.1)',
              border: 'rgba(124,92,252,0.25)',
            },
            {
              icon: Clock,
              label: '24h This Week',
              color: '#5b8df6',
              bg: 'rgba(91,141,246,0.1)',
              border: 'rgba(91,141,246,0.25)',
            },
          ].map(({ icon: Icon, label, color, bg, border }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium"
              style={{ background: bg, border: `1px solid ${border}`, color }}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </div>
          ))}
        </div>

      </div>
    </motion.article>
  )
}