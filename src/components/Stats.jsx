import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    label: "Creative Loop",
    value: 100,
    suffix: "%",
    title: "Client Satisfaction",
  },
  { label: "AI Boost", value: 77, suffix: "%", title: "Efficiency Increase" },
  { label: "Growth", value: 89, suffix: "%", title: "Project Success Rate" },
  { label: "Web Developers", value: 92, suffix: "%", title: "Developers" },
];

function StatCard({ stat }) {
  const [display, setDisplay] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const counter = { value: 0 };

    // fade/slide the card up into view
    const fadeAnim = gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // count up the number, starts a little after the fade begins
    const countAnim = gsap.to(counter, {
      value: stat.value,
      duration: 2,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
      },
      onUpdate: () => setDisplay(Math.round(counter.value)),
    });

    return () => {
      fadeAnim.scrollTrigger?.kill();
      fadeAnim.kill();
      countAnim.scrollTrigger?.kill();
      countAnim.kill();
    };
  }, [stat.value]);

  return (
    <div ref={cardRef} className="bg-white/60 rounded-2xl p-8 opacity-0">
      <span className="text-xs uppercase tracking-wide text-gray-500">
        {stat.label}
      </span>
      <div className="text-6xl font-bold my-4">
        {display}
        {stat.suffix}
      </div>
      <p className="text-gray-600">{stat.title}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#F0EDE6] py-32 px-8">
      <span className="text-orange-500 text-sm">✳ Creative Loop</span>
      <h2 className="text-6xl font-bold mb-16">Proven results</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} />
        ))}
      </div>
    </section>
  );
}
