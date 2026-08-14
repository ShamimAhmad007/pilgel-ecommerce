import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center px-4 text-center">
      <span className="text-orange-500 text-sm mb-4">✳ 404</span>
      <h1 className="text-5xl md:text-7xl font-bold mb-6">Page not found</h1>
      <p className="text-gray-400 mb-10 max-w-md">
        The page you're looking for doesn't exist or may have been removed.
      </p>
      <Link
        to="/"
        className="rounded-full bg-orange-500 text-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300"
      >
        Back to home
      </Link>
    </section>
  );
}
