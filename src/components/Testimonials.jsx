import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
// import ProjectsGrid from "./ProjectsGrid";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "The AI solutions delivered by this team transformed our workflow. Tasks that used to take hours now take minutes.",
    name: "Sarah Chen",
    role: "Marketing Director",
    image: "https://picsum.photos/seed/client1/600/450",
  },
  {
    quote:
      "Working with this team completely changed how we approach our brand strategy.",
    name: "James Whitfield",
    role: "Founder, Nova Studio",
    image: "https://picsum.photos/seed/client2/600/450",
  },
  {
    quote:
      "From concept to launch, every step felt intentional and thoughtful.",
    name: "Priya Patel",
    role: "Head of Growth",
    image: "https://picsum.photos/seed/client3/600/450",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const animation = gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      },
    );
    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#111111] text-white py-20 md:py-32 px-4 md:px-8 relative"
    >
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10 md:mb-16">
        <div>
          <span className="text-orange-500 text-sm">✳ testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Voices of our <span className="text-gray-400">clients</span>
          </h2>
        </div>
        <div className="flex gap-3">
          <button className="testimonial-prev w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
            ‹
          </button>
          <button className="testimonial-next w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
            ›
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".testimonial-prev",
          nextEl: ".testimonial-next",
        }}
        slidesPerView={1}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
              <div className="rounded-2xl overflow-hidden aspect-4/3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <blockquote className="text-xl md:text-3xl leading-snug mb-4 md:mb-6">
                  "{t.quote}"
                </blockquote>
                <p className="font-bold">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
