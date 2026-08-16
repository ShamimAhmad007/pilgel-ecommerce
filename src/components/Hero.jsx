export default function Hero() {
  return (
    <section className="relative h-screen bg-[#111111] overflow-hidden flex items-center justify-center px-4">
      <h1 className="absolute text-[16vw] md:text-[10vw] font-bold text-white/10 whitespace-nowrap select-none">
        Innovate Innovate Innovate Innovate
      </h1>

      <video
        autoPlay
        muted
        loop
        playsInline
        className="relative w-[280px] sm:w-[400px] md:w-[550px] lg:w-[750px] mix-blend-screen"
      >
        <source src="/hero-shape.mp4" type="video/mp4" />
      </video>

      <p
        className="absolute top-24 right-4 md:top-32 md:right-8 text-white text-right italic text-lg md:text-2xl leading-snug"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Smart creatives
        <br />
        <span className="text-orange-400">innovate</span> & create
      </p>
    </section>
  );
}
