import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Discover",
    desc: "We research your brand, audience, and market to uncover opportunities.",
  },
  {
    title: "Design",
    desc: "We craft bold visual concepts that align with your brand strategy.",
  },
  {
    title: "Build",
    desc: "We bring designs to life with clean, scalable development.",
  },
  {
    title: "Launch",
    desc: "We deploy, test, and optimize for real-world performance.",
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const cardAnim = gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.8, y: 60 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      },
    );

    const videoAnim = gsap.fromTo(
      videoRef.current,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      },
    );

    return () => {
      cardAnim.scrollTrigger?.kill();
      cardAnim.kill();
      videoAnim.scrollTrigger?.kill();
      videoAnim.kill();
    };
  }, []);

  return (
    <section className="bg-[#F0EDE6] py-20 md:py-32 px-4 md:px-8">
      <span className="text-orange-500 text-sm">✳ Our Process</span>
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
        AI-driven for creative <span className="text-gray-400">excellence</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mt-10 md:mt-20 items-center">
        <div
          ref={cardRef}
          className="bg-white rounded-3xl p-6 md:p-10 opacity-0"
        >
          <div className="flex gap-2 mb-8">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 hover:bg-orange-300 ${
                  i === active ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {steps[active].title}
          </h3>
          <p className="text-gray-600 text-base md:text-lg">
            {steps[active].desc}
          </p>

          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setActive((p) => Math.max(0, p - 1))}
              className="px-4 py-2 rounded-full border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-colors duration-300 text-sm md:text-base"
            >
              ← Prev
            </button>
            <button
              onClick={() =>
                setActive((p) => Math.min(steps.length - 1, p + 1))
              }
              className="px-4 py-2 rounded-full border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-colors duration-300 text-sm md:text-base"
            >
              Next →
            </button>
          </div>
        </div>

        <div
          ref={videoRef}
          className="rounded-3xl overflow-hidden aspect-square max-w-sm mx-auto opacity-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/process-visual.mp4.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
