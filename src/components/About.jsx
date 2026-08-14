import TechStack from "../components/TechStack";

export default function About() {
  return (
    <>
      <section className="min-h-screen bg-[#F0EDE6] pt-32 md:pt-40 px-4 md:px-8 pb-20">
        <span className="text-orange-500 text-sm">✳ About Us</span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 max-w-4xl">
          Where creativity meets AI to build brands that matter
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          We're a creative studio blending human intuition with AI-driven
          insight — helping ambitious brands stand out through bold design,
          smart strategy, and intelligent execution.
        </p>
      </section>

      <TechStack />
    </>
  );
}
