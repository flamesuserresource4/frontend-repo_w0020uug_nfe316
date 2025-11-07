export default function Services() {
  const services = [
    {
      title: 'Web Design & Development',
      rating: 4.9,
      reviews: 124,
      expect: ['Responsive UI', 'SEO ready', 'Performance focused'],
      story: 'Helped a Lagos retailer increase conversions by 38% after redesign.',
    },
    {
      title: 'UI/UX Design',
      rating: 4.8,
      reviews: 97,
      expect: ['User research', 'Prototyping', 'Design systems'],
      story: 'Banking app prototype cut onboarding time by 45%.',
    },
    {
      title: 'Web Security',
      rating: 4.9,
      reviews: 76,
      expect: ['Vulnerability scans', 'Hardening', 'Monitoring'],
      story: 'Secured an e‑commerce site; blocked 10k+ malicious requests/mo.',
    },
    {
      title: 'Custom Software Development',
      rating: 4.9,
      reviews: 61,
      expect: ['Scalable APIs', 'Clean architecture', 'Quality assurance'],
      story: 'Built ERP module that saved 18 hours/week for operations.',
    },
    {
      title: 'Mobile App Creation',
      rating: 4.7,
      reviews: 54,
      expect: ['Cross‑platform', 'Offline first', 'Analytics'],
      story: 'Delivery app improved route efficiency by 22%.',
    },
    {
      title: 'IT Infrastructure Consulting',
      rating: 4.8,
      reviews: 49,
      expect: ['Cloud migration', 'Cost optimization', 'DevOps'],
      story: 'Moved workloads to cloud; cut hosting costs by 35%.',
    },
    {
      title: 'Corporate Training & Workshops',
      rating: 4.9,
      reviews: 140,
      expect: ['Hands‑on labs', 'Tailored curriculum', 'Certificates'],
      story: 'Upskilled a 30‑person team in modern DevOps practices.',
    },
    {
      title: 'Coding Classes',
      rating: 4.8,
      reviews: 210,
      expect: ['Beginner to advanced', 'Mentorship', 'Projects'],
      story: 'Alumni launched successful startups and tech careers.',
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333]">Services</h1>
        <p className="text-[#333333]/80 mt-2">Detailed descriptions, expectations, and client stories.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <article key={s.title} className="p-6 rounded-xl border border-emerald-100 bg-white shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-[#333333]">{s.title}</h3>
              <div className="text-sm text-[#057834] font-medium">★ {s.rating} ({s.reviews})</div>
            </div>
            <div className="mt-3">
              <h4 className="text-sm font-semibold text-[#333333]">What to expect</h4>
              <ul className="mt-2 list-disc list-inside text-sm text-[#333333]/80 space-y-1">
                {s.expect.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
            <div className="mt-3 p-3 rounded-lg bg-[#E6F4EA] text-sm text-[#333333]">
              <span className="font-semibold text-[#057834]">Client story:</span> {s.story}
            </div>
            <div className="mt-4 flex gap-3">
              <a href="/get-started" className="px-4 py-2 bg-[#057834] text-white rounded-md">Get Started</a>
              <a href="/contact" className="px-4 py-2 bg-[#F57C00] text-white rounded-md">Talk to us</a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
