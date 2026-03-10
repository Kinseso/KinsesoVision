export default function DatingPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Dating</h1>

      <div className="grid grid-cols-3 gap-6 mt-6">

        <a href="/dating/profiles" className="p-6 border rounded-xl">
          Profiles
        </a>

        <a href="/dating/matches" className="p-6 border rounded-xl">
          Matches
        </a>

        <a href="/dating/messages" className="p-6 border rounded-xl">
          Messages
        </a>

      </div>
    </main>
  )
}