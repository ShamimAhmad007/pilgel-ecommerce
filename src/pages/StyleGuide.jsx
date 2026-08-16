export default function StyleGuide() {
  const colors = [
    { name: "Cream Background", hex: "#F0EDE6" },
    { name: "Ink Black", hex: "#111111" },
    { name: "Accent Orange", hex: "#FF5A1F" },
  ];

  return (
    <section className="min-h-screen bg-[#F0EDE6] pt-32 md:pt-40 px-4 md:px-8 pb-20">
      <span className="text-orange-500 text-sm">✳ Design</span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10">
        Style Guide
      </h1>

      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Colors</h2>
        <div className="flex flex-wrap gap-6 mb-12">
          {colors.map((c) => (
            <div key={c.hex} className="flex flex-col items-center gap-2">
              <div
                className="w-20 h-20 rounded-2xl border border-black/10"
                style={{ backgroundColor: c.hex }}
              />
              <p className="text-sm font-medium">{c.name}</p>
              <p className="text-xs text-gray-500">{c.hex}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Typography</h2>
        <p
          className="font-display text-4xl mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Playfair Display — Headings
        </p>
        <p
          className="text-lg mb-12"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Inter — Body text and UI elements
        </p>

        <h2 className="text-2xl font-bold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="rounded-full bg-orange-500 text-white px-6 py-3 hover:bg-black transition-colors duration-300">
            Primary Button
          </button>
          <button className="rounded-full border border-gray-300 px-6 py-3 hover:bg-black hover:text-white transition-colors duration-300">
            Secondary Button
          </button>
        </div>
      </div>
    </section>
  );
}
