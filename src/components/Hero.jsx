import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/3A3eXgPs0q5m0y6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F4EA] text-[#057834] text-xs font-semibold">TrueMinds Innovations Ltd</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#333333] leading-tight">
            Empowering African Businesses with Modern IT Solutions
          </h1>
          <p className="mt-4 text-[#333333]/80">
            We design, build, and secure digital experiences that drive growth. From web and mobile to infrastructure and training.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/get-started" className="px-5 py-3 bg-[#057834] text-white rounded-md hover:bg-emerald-700">Get Started</a>
            <a href="/services" className="px-5 py-3 bg-[#F57C00] text-white rounded-md hover:bg-orange-600">View Services</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white" />
    </section>
  );
}
