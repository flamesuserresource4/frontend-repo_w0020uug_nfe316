export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333]">About TrueMinds Innovations</h1>
        <p className="text-[#333333]/80 mt-2">We believe technology should empower, not complicate.</p>
      </header>
      <section className="prose max-w-none">
        <p className="text-[#333333]">
          We partner with ambitious African businesses to craft digital products and infrastructure that scale. Our team blends strategy,
          design, engineering, and training to create long‑term impact.
        </p>
        <ul className="list-disc list-inside text-[#333333]/90 mt-4">
          <li>Expertise: Web, Mobile, Cloud, Security, UI/UX</li>
          <li>Approach: Human‑centered, outcome‑driven, transparent</li>
          <li>Impact: Conversion gains, cost savings, faster delivery</li>
        </ul>
      </section>
    </main>
  );
}
