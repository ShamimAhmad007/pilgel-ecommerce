export const products = [
  {
    id: 1,
    title: "Chromatic Vision",
    category: "Branding",
    searchTerm: "colorful portrait studio",
    price: 49,
    description:
      "A bold branding project exploring color theory and modern visual identity systems for ambitious creative brands.",
  },
  {
    id: 2,
    title: "Neon Pulse",
    category: "Digital Art",
    searchTerm: "neon portrait",
    price: 39,
    description:
      "An experimental digital art series blending generative design with vibrant neon aesthetics.",
  },
  {
    id: 3,
    title: "Silent Motion",
    category: "Photography",
    searchTerm: "fashion editorial",
    price: 59,
    description:
      "A photography collection capturing stillness and movement in urban environments.",
  },
  {
    id: 4,
    title: "Urban Flux",
    category: "Editorial",
    searchTerm: "street fashion",
    price: 45,
    description:
      "An editorial spread exploring the ever-changing rhythm of city life through bold typography.",
  },
  {
    id: 5,
    title: "Golden Hour",
    category: "Campaign",
    searchTerm: "golden hour portrait",
    price: 65,
    description:
      "A campaign built around warm, golden lighting and authentic human moments.",
  },
  {
    id: 6,
    title: "Liquid State",
    category: "3D Art",
    searchTerm: "iridescent abstract",
    price: 55,
    description:
      "A 3D art series exploring fluid dynamics and iridescent material studies.",
  },
];

export async function fetchUnsplashImage(query) {
  const key = import.meta.env.VITE_UNSPLASH_KEY;
  // console.log("Unsplash key loaded:", key);
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=5&client_id=${key}`,
  );
  const data = await res.json();
  const results = data.results || [];
  if (results.length === 0) return "";
  const random = results[Math.floor(Math.random() * results.length)];
  return random.urls.regular;
}
