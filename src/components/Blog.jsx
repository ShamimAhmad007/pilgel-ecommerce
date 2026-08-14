import TechStack from "./TechStack";
const posts = [
  {
    title: "The Future of AI-Driven Design",
    date: "July 2026",
    excerpt: "How machine learning is reshaping the creative process.",
  },
  {
    title: "Building Brands That Last",
    date: "June 2026",
    excerpt: "Strategy fundamentals every ambitious brand needs.",
  },
  {
    title: "Inside Our Creative Process",
    date: "May 2026",
    excerpt: "A behind-the-scenes look at how we work.",
  },
];

export default function Blog() {
  return (
    <section className="min-h-screen bg-[#F0EDE6] pt-32 md:pt-40 px-4 md:px-8 pb-20">
      <span className="text-orange-500 text-sm">✳ our blogs</span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-16">
        Creative journal
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-white/60 rounded-2xl p-6 md:p-8 hover:bg-white hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <h3 className="text-xl md:text-2xl font-bold mb-3">{post.title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{post.excerpt}</p>
          </div>
        ))}
        <div className="sm:col-span-2 md:col-span-3">
          <TechStack />
        </div>
      </div>
    </section>
  );
}
