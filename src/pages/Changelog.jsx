const updates = [
  {
    date: "August 2026",
    title: "Cart persistence & order history",
    desc: "Added localStorage-backed cart and a full order history page.",
  },
  {
    date: "August 2026",
    title: "Live product imagery",
    desc: "Integrated the Unsplash API for dynamic, category-relevant photography.",
  },
  {
    date: "July 2026",
    title: "Initial launch",
    desc: "Launched the full Pilgel site with multi-page routing, animations, and a working checkout flow.",
  },
];

export default function Changelog() {
  return (
    <section className="min-h-screen bg-[#F0EDE6] pt-32 md:pt-40 px-4 md:px-8 pb-20">
      <span className="text-orange-500 text-sm">✳ Updates</span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10">
        Changelog
      </h1>

      <div className="max-w-2xl flex flex-col gap-8">
        {updates.map((u, i) => (
          <div key={i} className="border-l-2 border-orange-500 pl-6">
            <p className="text-sm text-gray-500 mb-1">{u.date}</p>
            <h3 className="text-xl font-bold mb-2">{u.title}</h3>
            <p className="text-gray-600">{u.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
