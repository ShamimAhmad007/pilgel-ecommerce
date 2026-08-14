import { useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  useEffect(() => {
    function update() {
      ScrollTrigger.update();
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 1.2 }}
      onScroll={ScrollTrigger.update}
    >
      {children}
    </ReactLenis>
  );
}
