import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products, fetchUnsplashImage } from "../data/products";
import { useCart } from "../components/CartContext";

export default function ProjectDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [image, setImage] = useState(null);
  const project = products.find((p) => p.id === Number(id));

  useEffect(() => {
    if (project) {
      fetchUnsplashImage(project.searchTerm).then(setImage);
    }
  }, [project]);

  if (!project) {
    return (
      <section className="min-h-screen bg-[#F0EDE6] pt-32 md:pt-40 px-4 md:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Project not found
        </h1>
        <Link to="/projects" className="text-orange-500 underline">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#F0EDE6] pt-24 md:pt-32 px-4 md:px-8 pb-20">
      <Link
        to="/projects"
        className="text-sm text-gray-500 hover:text-black transition-colors"
      >
        ← Back to projects
      </Link>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-8">
        <div className="rounded-2xl overflow-hidden aspect-3/4 relative">
          {!image && (
            <div className="absolute inset-0 animate-skeleton rounded-2xl" />
          )}
          {image && (
            <img
              src={image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div>
          <span className="text-orange-500 text-sm">{project.category}</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            {project.description}
          </p>
          <p className="text-2xl font-bold mb-8">${project.price}</p>
          <button
            onClick={() => image && addToCart({ ...project, image })}
            className="rounded-full bg-orange-500 text-white px-8 py-3 hover:bg-black transition-colors duration-300 w-full sm:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
