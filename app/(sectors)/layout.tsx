// app/(sectors)/layout.tsx
export default function SectorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      {/* A simple back button to get back to the dashboard */}
      <a href="/dashboard" className="text-zinc-500 hover:text-white mb-10 inline-block text-[10px] font-black uppercase tracking-widest">
        ← Exit Sector
      </a>
      {children}
    </div>
  )
}