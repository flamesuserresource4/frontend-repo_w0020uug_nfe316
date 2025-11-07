export default function AtGlance() {
  const items = [
    { title: 'Services', desc: 'Web & mobile, UI/UX, security, cloud, training', href: '/services' },
    { title: 'Projects', desc: 'Case studies and measurable outcomes', href: '/projects' },
    { title: 'About', desc: 'Who we are and how we work', href: '/about' },
    { title: 'Community', desc: 'Workshops and open‑source', href: '/community' },
    { title: 'Get Started', desc: 'Share your goals — we’ll guide you', href: '/get-started' },
    { title: 'Contact', desc: 'Talk to the team', href: '/contact' },
  ];

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#333333] mb-6">At a glance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <a key={i.title} href={i.href} className="group p-5 rounded-xl border border-emerald-100 bg-white shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#333333]">{i.title}</h3>
                <span className="text-[#057834] group-hover:translate-x-1 transition">→</span>
              </div>
              <p className="mt-2 text-sm text-[#333333]/80">{i.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
