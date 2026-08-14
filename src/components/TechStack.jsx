import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const icons = [
  { icon: <FaHtml5 />, color: "#E44D26", delay: "0s", top: "5%", left: "8%" },
  {
    icon: <FaCss3Alt />,
    color: "#2965F1",
    delay: "0.5s",
    top: "15%",
    left: "78%",
  },
  {
    icon: <FaJsSquare />,
    color: "#F0DB4F",
    delay: "1s",
    top: "55%",
    left: "5%",
  },
  {
    icon: <FaReact />,
    color: "#61DBFB",
    delay: "1.5s",
    top: "2%",
    left: "45%",
  },
  {
    icon: <FaNodeJs />,
    color: "#68A063",
    delay: "0.8s",
    top: "60%",
    left: "80%",
  },
  {
    icon: <SiMongodb />,
    color: "#4DB33D",
    delay: "1.2s",
    top: "75%",
    left: "35%",
  },
  {
    icon: <FaPython />,
    color: "#3776AB",
    delay: "0.3s",
    top: "40%",
    left: "88%",
  },
  {
    icon: <SiMysql />,
    color: "#4479A1",
    delay: "1.8s",
    top: "80%",
    left: "60%",
  },
];

export default function TechStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const iconEls = sectionRef.current.querySelectorAll(".tech-icon");
    const anim = gsap.fromTo(
      iconEls,
      { opacity: 0, scale: 0.3 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      },
    );
    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F0EDE6] py-32 px-8 overflow-hidden"
    >
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <span className="text-orange-500 text-sm">✳ Tech Stack</span>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Built with modern tools
        </h2>
        <p className="text-gray-600 text-lg">
          Combining industry-standard technologies to craft fast, scalable, and
          intelligent digital experiences.
        </p>
      </div>

      <div className="relative h-100 md:h-[500px] max-w-5xl mx-auto mt-12">
        {icons.map((item, i) => (
          <div
            key={i}
            className="tech-icon absolute animate-float"
            style={{
              top: item.top,
              left: item.left,
              animationDelay: item.delay,
              color: item.color,
              fontSize: "3.5rem",
            }}
          >
            <div className="bg-white rounded-full p-5 shadow-lg">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
