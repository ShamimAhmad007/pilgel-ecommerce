import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Statement() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.set(containerRef.current, { opacity: 1 });
    const wordEls = containerRef.current.querySelectorAll(".word");

    const anim = gsap.to(wordEls, {
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#111111] text-white py-40 px-8 flex justify-center"
    >
      <p className="text-4xl md:text-6xl font-bold text-center max-w-5xl leading-tight">
        <span className="word opacity-20 mr-3 inline-block">We</span>
        <span className="word opacity-20 mr-3 inline-block">help</span>
        <span className="word opacity-20 mr-3 inline-block">ambitious</span>

        <img
          src="https://picsum.photos/seed/statement-face/80/80"
          alt="brand"
          className="inline-block w-12 h-12 md:w-16 md:h-16 rounded-full object-cover align-middle mx-2 -mt-2"
        />

        <span className="word opacity-20 mr-3 inline-block">brands</span>
        <span className="word opacity-20 mr-3 inline-block">stand</span>
        <span className="word opacity-20 mr-3 inline-block">out</span>
        <span className="word opacity-20 mr-3 inline-block">with</span>
        <span className="word opacity-20 mr-3 inline-block">bold</span>
        <span className="word opacity-20 mr-3 inline-block">creativity</span>
      </p>
    </section>
  );
}
