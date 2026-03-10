export default function DatingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="min-h-screen">
      {children}
    </section>
  )
}