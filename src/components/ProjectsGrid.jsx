// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "./CartContext";
// import { products, fetchUnsplashImage } from "../data/products";

// function ProjectCard({ project }) {
//   const [image, setImage] = useState(null);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     fetchUnsplashImage(project.searchTerm).then(setImage);
//   }, [project.searchTerm]);

//   return (
//     <div className="group">
//       <Link to={`/projects/${project.id}`}>
//         <div className="overflow-hidden rounded-2xl aspect-[3/4] relative">
//           {!image && (
//             <div className="absolute inset-0 animate-skeleton rounded-2xl" />
//           )}
//           {image && (
//             <img
//               src={image}
//               alt={project.title}
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//             />
//           )}
//         </div>
//       </Link>
//       <div className="mt-4 flex justify-between items-center">
//         <Link to={`/projects/${project.id}`}>
//           <h3 className="text-xl font-bold hover:text-orange-500 transition-colors">
//             {project.title}
//           </h3>
//           <p className="text-gray-500 text-sm">
//             {project.category} · ${project.price}
//           </p>
//         </Link>
//         <button
//           onClick={() => image && addToCart({ ...project, image })}
//           className="rounded-full bg-black text-white px-4 py-2 text-sm hover:bg-orange-500 transition-colors duration-300"
//         >
//           Add
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function ProjectsGrid() {
//   return (
//     <section className="bg-[#F0EDE6] py-32 px-8">
//       <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
//         <div>
//           <span className="text-orange-500 text-sm">✳ projects</span>
//           <h2 className="text-5xl md:text-6xl font-bold">
//             AI-enhanced <span className="text-gray-400">creations</span>
//           </h2>
//         </div>
//         <Link
//           to="/projects"
//           className="rounded-full bg-orange-500 text-white px-6 py-3 whitespace-nowrap hover:bg-black transition-colors duration-300"
//         >
//           view all projects
//         </Link>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((project) => (
//           <ProjectCard key={project.id} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// }
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { products, fetchUnsplashImage } from "../data/products";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project }) {
  const [image, setImage] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchUnsplashImage(project.searchTerm).then(setImage);
  }, [project.searchTerm]);

  return (
    <div className="group">
      <Link to={`/projects/${project.id}`}>
        <div className="overflow-hidden rounded-2xl aspect-[3/4] relative">
          {!image && (
            <div className="absolute inset-0 animate-skeleton rounded-2xl" />
          )}

          {image && (
            <img
              src={image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}
        </div>
      </Link>

      <div className="mt-4 flex justify-between items-center">
        <Link to={`/projects/${project.id}`}>
          <h3 className="text-xl font-bold hover:text-orange-500 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-500 text-sm">
            {project.category} · ${project.price}
          </p>
        </Link>

        <button
          onClick={() => image && addToCart({ ...project, image })}
          className="rounded-full bg-black text-white px-4 py-2 text-sm hover:bg-orange-500 transition-colors duration-300"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default function ProjectsGrid() {
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
    <section ref={sectionRef} className="bg-[#F0EDE6] py-32 px-8">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
        <div>
          <span className="text-orange-500 text-sm">✳ projects</span>

          <h2 className="text-5xl md:text-6xl font-bold">
            AI-enhanced <span className="text-gray-400">creations</span>
          </h2>
        </div>

        <Link
          to="/projects"
          className="rounded-full bg-orange-500 text-white px-6 py-3 whitespace-nowrap hover:bg-black transition-colors duration-300"
        >
          view all projects
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
