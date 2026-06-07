export default function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-[#1f1f2e] bg-[#16161f] animate-pulse ${className}`}>
      <div className="p-6 flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#1f1f2e]" />
          <div className="flex flex-col gap-2 flex-1">
            <div className="h-3.5 w-3/4 rounded-lg bg-[#1f1f2e]" />
            <div className="h-2.5 w-1/2 rounded-lg bg-[#1f1f2e]" />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-auto">
          <div className="h-2.5 w-full rounded-full bg-[#1f1f2e]" />
          <div className="h-2 w-1/3 rounded-lg bg-[#1f1f2e]" />
        </div>
      </div>
    </div>
  )
}