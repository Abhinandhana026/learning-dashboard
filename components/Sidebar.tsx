'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, BookOpen, BarChart2, Settings,
  ChevronLeft, ChevronRight, GraduationCap, Menu, X,
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: BookOpen,        label: 'Courses'   },
  { icon: BarChart2,       label: 'Progress'  },
  { icon: Settings,        label: 'Settings'  },
]

export default function Sidebar() {
  const [collapsed, setCollapsed]   = useState(false)
  const [active, setActive]         = useState('Dashboard')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* ── DESKTOP SIDEBAR ── */}
      <motion.nav
        animate={{ width: collapsed ? 68 : 220 }}
        transition={{ type: 'spring' as const, stiffness: 300, damping: 30 }}
        className="hidden md:flex relative flex-col h-screen sticky top-0 overflow-hidden shrink-0 border-r border-[#1f1f2e]"
        style={{ background: '#0e0e14' }}
      >
        {/* top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #7c5cfc, transparent)' }} />

        {/* logo */}
        <div className="flex items-center gap-3 px-4 py-6 border-b border-[#1f1f2e]">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: 'linear-gradient(135deg, #7c5cfc, #5b8df6)' }}>
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-display font-bold text-sm whitespace-nowrap"
                style={{ color: '#f0f0ff' }}
              >
                LearnSpace
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* nav items */}
        <div className="flex flex-col gap-1.5 p-3 flex-1 mt-2">
          {navItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-left w-full group/item"
            >
              {active === label && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: 'rgba(124,92,252,0.15)', border: '1px solid rgba(124,92,252,0.3)' }}
                  transition={{ type: 'spring' as const, stiffness: 300, damping: 30 }}
                />
              )}
              <Icon
                className="w-5 h-5 shrink-0 relative z-10 transition-colors"
                style={{ color: active === label ? '#7c5cfc' : '#8888aa' }}
              />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    className="text-sm relative z-10 whitespace-nowrap font-medium"
                    style={{ color: active === label ? '#a78bfa' : '#8888aa' }}
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>

        {/* collapse button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center m-3 p-2.5 rounded-xl border border-[#1f1f2e] transition-all hover:border-[#2a2a3e]"
          style={{ background: '#13131c', color: '#8888aa' }}
        >
          {collapsed
            ? <ChevronRight className="w-4 h-4" />
            : <ChevronLeft className="w-4 h-4" />}
        </button>
      </motion.nav>

      {/* ── MOBILE TOP BAR ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 border-b border-[#1f1f2e]"
        style={{ background: 'rgba(14,14,20,0.95)', backdropFilter: 'blur(12px)' }}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #7c5cfc, #5b8df6)' }}>
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold text-sm" style={{ color: '#f0f0ff' }}>LearnSpace</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-1 transition-colors"
          style={{ color: '#8888aa' }}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/70"
              style={{ backdropFilter: 'blur(4px)' }}
            />
            <motion.nav
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: 'spring' as const, stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-0 left-0 bottom-0 z-50 w-72 border-r border-[#1f1f2e] flex flex-col"
              style={{ background: '#0e0e14' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #7c5cfc, transparent)' }} />

              <div className="flex items-center gap-3 px-5 py-6 border-b border-[#1f1f2e]">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #7c5cfc, #5b8df6)' }}>
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="font-display font-bold text-sm" style={{ color: '#f0f0ff' }}>LearnSpace</span>
              </div>

              <div className="flex flex-col gap-1.5 p-4 flex-1 mt-2">
                {navItems.map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    onClick={() => { setActive(label); setMobileOpen(false) }}
                    className="relative flex items-center gap-3 px-4 py-3 rounded-xl text-left w-full"
                  >
                    {active === label && (
                      <motion.div
                        layoutId="active-pill-mobile"
                        className="absolute inset-0 rounded-xl"
                        style={{ background: 'rgba(124,92,252,0.15)', border: '1px solid rgba(124,92,252,0.3)' }}
                        transition={{ type: 'spring' as const, stiffness: 300, damping: 30 }}
                      />
                    )}
                    <Icon className="w-5 h-5 shrink-0 relative z-10"
                      style={{ color: active === label ? '#7c5cfc' : '#8888aa' }} />
                    <span className="text-sm relative z-10 font-medium"
                      style={{ color: active === label ? '#a78bfa' : '#8888aa' }}>
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* ── MOBILE BOTTOM NAV ── */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-3 py-3 border-t border-[#1f1f2e]"
        style={{ background: 'rgba(14,14,20,0.95)', backdropFilter: 'blur(12px)' }}
      >
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className="relative flex flex-col items-center gap-1.5 px-4 py-2 rounded-xl"
          >
            {active === label && (
              <motion.div
                layoutId="active-pill-bottom"
                className="absolute inset-0 rounded-xl"
                style={{ background: 'rgba(124,92,252,0.15)' }}
                transition={{ type: 'spring' as const, stiffness: 300, damping: 30 }}
              />
            )}
            <Icon className="w-5 h-5 relative z-10"
              style={{ color: active === label ? '#7c5cfc' : '#8888aa' }} />
            <span className="text-[10px] relative z-10 font-medium"
              style={{ color: active === label ? '#a78bfa' : '#8888aa' }}>
              {label}
            </span>
          </button>
        ))}
      </nav>
    </>
  )
}