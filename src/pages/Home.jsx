import Hero from '../components/Hero';
import Stats from '../components/Stats';

function SectionCard({ title, description, cta, href }) {
  return (
    <div className="p-6 rounded-xl border border-emerald-100 bg-white shadow-sm">
      <h3 className="text-xl font-semibold text-[#333333]">{title}</h3>
      <p className="mt-2 text-[#333333]/80">{description}</p>
      <a href={href} className="inline-block mt-4 text-[#057834] font-medium hover:underline">{cta}</a>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#333333] mb-6">At a glance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectionCard
              title="Services"
              description="Web & mobile development, UI/UX, security, infrastructure, training, and more."
              href="/services"
              cta="Explore Services"
            />
            <SectionCard
              title="Projects"
              description="Case studies like MyTodoApp, Kez Cakes, and Taylor’s Touch with real outcomes."
              href="/projects"
              cta="View Projects"
            />
            <SectionCard
              title="About"
              description="Our values, expertise, and impact across Africa."
              href="/about"
              cta="Learn About Us"
            />
            <SectionCard
              title="Community"
              description="Stories, workshops, and open-source initiatives."
              href="/community"
              cta="Join the Community"
            />
            <SectionCard
              title="Get Started"
              description="Tell us about your goals. We’ll recommend the best path."
              href="/get-started"
              cta="Start a Project"
            />
            <SectionCard
              title="Contact"
              description="Reach out — we’re always happy to help."
              href="/contact"
              cta="Contact Us"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
