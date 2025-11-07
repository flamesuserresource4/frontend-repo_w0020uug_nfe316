export default function Contact() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333]">Contact</h1>
        <p className="text-[#333333]/80 mt-2">We’re here to help — let’s talk about your goals.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl border border-emerald-100 bg-white shadow-sm">
          <h3 className="font-semibold text-[#333333] mb-3">Reach us</h3>
          <ul className="space-y-2 text-sm text-[#333333]/80">
            <li>Everywhere, On the Cloud</li>
            <li>(+234) 0903 094 3445</li>
            <li>support@tinnovations.com.ng</li>
          </ul>
        </div>
        <form className="p-6 rounded-xl border border-emerald-100 bg-white shadow-sm space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="px-3 py-2 rounded-md border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#057834]" placeholder="First name" />
            <input className="px-3 py-2 rounded-md border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#057834]" placeholder="Last name" />
          </div>
          <input className="w-full px-3 py-2 rounded-md border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#057834]" placeholder="Email" />
          <input className="w-full px-3 py-2 rounded-md border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#057834]" placeholder="Phone" />
          <textarea className="w-full px-3 py-2 rounded-md border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#057834]" rows="4" placeholder="How can we help?" />
          <button className="px-4 py-2 bg-[#057834] text-white rounded-md">Send message</button>
        </form>
      </div>
    </main>
  );
}
