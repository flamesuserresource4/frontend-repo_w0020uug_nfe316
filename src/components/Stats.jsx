export default function Stats() {
  const items = [
    { value: '80', label: 'Satisfied clients' },
    { value: '25+', label: 'Successful businesses' },
    { value: '100+', label: 'Clients who love us' },
    { value: '★★★★★', label: '5-Star reviews' },
  ];

  return (
    <section className="bg-[#E6F4EA] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.label} className="text-center p-4 rounded-lg bg-white shadow-sm">
            <div className="text-2xl font-bold text-[#057834]">{it.value}</div>
            <div className="text-sm text-[#333333]/80">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
