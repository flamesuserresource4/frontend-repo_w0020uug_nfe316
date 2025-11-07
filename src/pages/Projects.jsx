export default function Projects() {
  const projects = [
    { name: 'MyTodoApp', outcome: 'Increased daily active users by 2.4x', metrics: '99.9% uptime', tag: 'Web App' },
    { name: 'Kez Cakes', outcome: 'Online orders up 52%', metrics: '3s page load', tag: 'E‑commerce' },
    { name: "Taylor's Touch", outcome: 'Bookings up 41%', metrics: 'NPS 72', tag: 'Salon' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333]">Projects</h1>
        <p className="text-[#333333]/80 mt-2">Case‑study style summaries with outcome metrics.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.name} className="p-6 rounded-xl border border-emerald-100 bg-white shadow-sm">
            <div className="text-xs inline-block px-2 py-1 bg-[#E6F4EA] text-[#057834] rounded mb-3">{p.tag}</div>
            <h3 className="text-xl font-semibold text-[#333333]">{p.name}</h3>
            <p className="mt-2 text-sm text-[#333333]/80">{p.outcome}</p>
            <div className="mt-3 text-sm font-medium text-[#057834]">{p.metrics}</div>
            <a href="/get-started" className="inline-block mt-4 text-[#057834] hover:underline">Start a similar project</a>
          </article>
        ))}
      </div>
    </main>
  );
}
