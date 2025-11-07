export default function Community() {
  const items = [
    { title: 'Workshops', desc: 'Monthly hands‑on sessions on modern web and cloud.' },
    { title: 'Stories', desc: 'Client and alumni journeys across industries.' },
    { title: 'Open Source', desc: 'Tools and starters we maintain for the ecosystem.' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333]">Community</h1>
        <p className="text-[#333333]/80 mt-2">Stories, workshops, and open‑source initiatives.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((i) => (
          <article key={i.title} className="p-6 rounded-xl border border-emerald-100 bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-[#333333]">{i.title}</h3>
            <p className="mt-2 text-sm text-[#333333]/80">{i.desc}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
