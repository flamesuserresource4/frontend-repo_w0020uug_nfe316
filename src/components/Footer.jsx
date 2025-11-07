export default function Footer() {
  return (
    <footer className="mt-20 border-t border-emerald-100 bg-[#E6F4EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#057834] text-white flex items-center justify-center font-bold">TI</div>
            <span className="font-semibold text-[#333333]">TrueMinds Innovations Ltd</span>
          </div>
          <p className="text-sm text-[#333333]/70">We believe technology should empower, not complicate.</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#333333] mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-[#333333]/80">
            <li>Everywhere, On the Cloud</li>
            <li>(+234) 0903 094 3445</li>
            <li>support@tinnovations.com.ng</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#333333] mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-[#333333]/80">
            <li><a href="/services" className="hover:text-[#057834]">Services</a></li>
            <li><a href="/projects" className="hover:text-[#057834]">Projects</a></li>
            <li><a href="/community" className="hover:text-[#057834]">Community</a></li>
            <li><a href="/get-started" className="hover:text-[#057834]">Get Started</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#333333] mb-3">Newsletter</h4>
          <form className="flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 rounded-md border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#057834]" />
            <button className="px-4 py-2 bg-[#057834] text-white rounded-md hover:bg-emerald-700">Subscribe</button>
          </form>
          <p className="text-xs text-[#333333]/60 mt-2">By subscribing you agree to our privacy policy.</p>
        </div>
      </div>
      <div className="text-center text-xs text-[#333333]/60 py-4">© {new Date().getFullYear()} TrueMinds Innovations Ltd. All rights reserved.</div>
    </footer>
  );
}
