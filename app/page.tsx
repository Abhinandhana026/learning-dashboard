import { supabase } from '@/lib/supabase'
import { Suspense } from 'react'
import Sidebar from '@/components/Sidebar'
import HeroTile from '@/components/HeroTile'
import CourseCard from '@/components/CourseCard'
import ActivityTile from '@/components/ActivityTile'
import SkeletonCard from '@/components/SkeletonCard'
import BentoGrid from '@/components/BentoGrid'
import type { Course } from '@/types'

async function CoursesGrid() {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    return (
      <div className="col-span-full rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-red-400 text-sm">
        Failed to load courses. Please try again later.
      </div>
    )
  }

  return (
    <>
     
        {data.map((course, index) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}
    </>
  )
}

function CoursesSkeleton() {
  return (
    <>
      <SkeletonCard className="h-[160px]" />
      <SkeletonCard className="h-[160px]" />
      <SkeletonCard className="h-[160px]" />
      <SkeletonCard className="h-[160px]" />
    </>
  )
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#0a0a0f]">
      <Sidebar />
      <main className="flex-1 pt-16 pb-24 px-6 md:pt-8 md:pb-8 md:px-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <BentoGrid>
            <HeroTile />
            <section className="col-span-full">
              <h2 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">
                Active Courses
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                <Suspense fallback={<CoursesSkeleton />}>
                  <CoursesGrid />
                </Suspense>
              </div>
            </section>
            <ActivityTile />
          </BentoGrid>
        </div>
      </main>
    </div>
  )
}