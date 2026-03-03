import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#020617] text-slate-200 antialiased`}>
        {/* No Sidebar here, just a clean centered container */}
        <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
          <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}