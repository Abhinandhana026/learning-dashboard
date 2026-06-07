'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Menu,
  X,
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: BookOpen, label: 'Courses' },
  { icon: BarChart2, label: 'Progress' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('Dashboard')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* ── DESKTOP SIDEBAR (md and above) ── */}
      <motion.nav
        animate={{ width: collapsed ? 64 : 200 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="hidden md:flex relative flex-col bg-[#12121a] border-r border-[#1e1e2e] h-screen sticky top-0 overflow-hidden shrink-0"
      >
        {/* logo */}
        <div className="flex items-center gap-3 px-3 py-5 border-b border-[#1e1e2e]">
          <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center shrink-0">
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-white font-bold text-sm whitespace-nowrap"
              >
                LearnSpace
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* nav items */}
        <div className="flex flex-col gap-1 p-2 flex-1">
          {navItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className="relative flex items-center gap-3 px-2.5 py-2 rounded-xl text-left w-full"
            >
              {active === label && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-violet-600/20 border border-violet-500/30 rounded-xl"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <Icon
                className={`w-5 h-5 shrink-0 relative z-10 ${
                  active === label ? 'text-violet-400' : 'text-slate-500'
                }`}
              />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className={`text-sm relative z-10 whitespace-nowrap ${
                      active === label ? 'text-violet-300 font-medium' : 'text-slate-400'
                    }`}
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
          className="flex items-center justify-center m-3 p-2 rounded-xl border border-[#1e1e2e] text-slate-400 hover:text-white hover:bg-[#1e1e2e] transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </motion.nav>

      {/* ── MOBILE TOP BAR ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-[#12121a] border-b border-[#1e1e2e]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
            <GraduationCap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-white font-bold text-sm">LearnSpace</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-slate-400 hover:text-white transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/60"
            />
            <motion.nav
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-0 left-0 bottom-0 z-50 w-64 bg-[#12121a] border-r border-[#1e1e2e] flex flex-col"
            >
              <div className="flex items-center gap-2 px-4 py-5 border-b border-[#1e1e2e]">
                <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
                  <GraduationCap className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-white font-bold text-sm">LearnSpace</span>
              </div>

              <div className="flex flex-col gap-1 p-3 flex-1">
                {navItems.map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    onClick={() => { setActive(label); setMobileOpen(false) }}
                    className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-left w-full"
                  >
                    {active === label && (
                      <motion.div
                        layoutId="active-pill-mobile"
                        className="absolute inset-0 bg-violet-600/20 border border-violet-500/30 rounded-xl"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <Icon
                      className={`w-5 h-5 shrink-0 relative z-10 ${
                        active === label ? 'text-violet-400' : 'text-slate-500'
                      }`}
                    />
                    <span
                      className={`text-sm relative z-10 ${
                        active === label ? 'text-violet-300 font-medium' : 'text-slate-400'
                      }`}
                    >
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
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-2 py-2 bg-[#12121a] border-t border-[#1e1e2e]">
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className="relative flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl"
          >
            {active === label && (
              <motion.div
                layoutId="active-pill-bottom"
                className="absolute inset-0 bg-violet-600/20 rounded-xl"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <Icon
              className={`w-5 h-5 relative z-10 ${
                active === label ? 'text-violet-400' : 'text-slate-500'
              }`}
            />
            <span
              className={`text-[10px] relative z-10 ${
                active === label ? 'text-violet-300' : 'text-slate-500'
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </nav>
    </>
  )
}