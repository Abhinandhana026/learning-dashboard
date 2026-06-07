import { createSupabaseServerClient } from '@/lib/supabase'
import { Suspense } from 'react'
import Sidebar from '@/components/Sidebar'
import HeroTile from '@/components/HeroTile'
import CourseCard from '@/components/CourseCard'
import ActivityTile from '@/components/ActivityTile'
import SkeletonCard from '@/components/SkeletonCard'
import BentoGrid from '@/components/BentoGrid'
import type { Course } from '@/types'

async function CoursesGrid() {
  const supabase = await createSupabaseServerClient()

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
      {data.map((course: Course, index: number) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}
    </>
  )
}

async function HeroSection() {
  const supabase = await createSupabaseServerClient()
  const { count } = await supabase
    .from('courses')
    .select('*', { count: 'exact', head: true })

  return <HeroTile courseCount={count ?? 0} />
}

function CoursesSkeleton() {
  return (
    <>
      <SkeletonCard className="h-[200px]" />
      <SkeletonCard className="h-[200px]" />
      <SkeletonCard className="h-[200px]" />
      <SkeletonCard className="h-[200px]" />
    </>
  )
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen" style={{ background: 'var(--bg-base)' }}>
      <Sidebar />
      <main className="flex-1 min-w-0 pt-16 pb-24 px-5 md:pt-10 md:pb-10 md:px-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <BentoGrid>

            <Suspense fallback={<SkeletonCard className="h-[240px]" />}>
              <HeroSection />
            </Suspense>

            <section className="flex flex-col gap-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest px-1"
                style={{ color: 'var(--text-muted)' }}>
                Active Courses
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
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