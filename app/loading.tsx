import SkeletonCard from '@/components/SkeletonCard'

export default function Loading() {
  return (
    <div className="flex min-h-screen" style={{ background: '#060608' }}>
      <div className="hidden md:block w-[220px] border-r border-[#1f1f2e] h-screen shrink-0"
        style={{ background: '#0e0e14' }} />
      <main className="flex-1 min-w-0 p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          <SkeletonCard className="h-[240px]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            <SkeletonCard className="h-[200px]" />
            <SkeletonCard className="h-[200px]" />
            <SkeletonCard className="h-[200px]" />
            <SkeletonCard className="h-[200px]" />
          </div>
          <SkeletonCard className="h-[280px]" />
        </div>
      </main>
    </div>
  )
}