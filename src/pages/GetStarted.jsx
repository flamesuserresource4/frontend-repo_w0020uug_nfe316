export default function GetStarted() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333]">Start a Project</h1>
        <p className="text-[#333333]/80 mt-2">Tell us about your goals and we’ll tailor a plan.</p>
      </header>
      <form className="p-6 rounded-xl border border-emerald-100 bg-white shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input className="px-3 py-2 rounded-md border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#057834]" placeholder="Full name" />
          <input className="px-3 py-2 rounded-md border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#057834]" placeholder="Company" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input className="px-3 py-2 rounded-md border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#057834]" placeholder="Email" />
          <input className="px-3 py-2 rounded-md border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#057834]" placeholder="Phone" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <select className="px-3 py-2 rounded-md border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#057834]">
            <option>Service category</option>
            <option>Web Development</option>
            <option>UI/UX Design</option>
            <option>Security</option>
            <option>Mobile App</option>
            <option>Cloud/Infrastructure</option>
            <option>Training</option>
          </select>
          <select className="px-3 py-2 rounded-md border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#057834]">
            <option>Budget range</option>
            <option>Under $1,000</option>
            <option>$1,000 – $5,000</option>
            <option>$5,000 – $10,000</option>
            <option>$10,000+</option>
          </select>
        </div>
        <textarea className="w-full px-3 py-2 rounded-md border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-[#057834]" rows="5" placeholder="Project goals, timeline, and success criteria" />
        <button className="px-4 py-2 bg-[#057834] text-white rounded-md">Submit</button>
      </form>
    </main>
  );
}
