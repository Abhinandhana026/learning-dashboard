import SkeletonCard from '@/components/SkeletonCard'

export default function Loading() {
  return (
    <div className="flex h-screen bg-[#0a0a0f]">
      {/* sidebar skeleton */}
      <div className="hidden md:block w-[220px] bg-[#12121a] border-r border-[#1e1e2e] h-screen" />

      {/* main skeleton */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-6xl mx-auto flex flex-col gap-4">
          <SkeletonCard className="h-[200px]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SkeletonCard className="h-[160px]" />
            <SkeletonCard className="h-[160px]" />
            <SkeletonCard className="h-[160px]" />
            <SkeletonCard className="h-[160px]" />
          </div>
          <SkeletonCard className="h-[200px]" />
        </div>
      </main>
    </div>
  )
}