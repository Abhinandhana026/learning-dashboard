export default function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-2xl bg-[#12121a] border border-[#1e1e2e] animate-pulse ${className}`}>
      <div className="p-6 flex flex-col gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#1e1e2e]" />
        <div className="h-4 w-3/4 rounded-lg bg-[#1e1e2e]" />
        <div className="h-3 w-1/2 rounded-lg bg-[#1e1e2e]" />
        <div className="h-2 w-full rounded-full bg-[#1e1e2e]" />
      </div>
    </div>
  )
}