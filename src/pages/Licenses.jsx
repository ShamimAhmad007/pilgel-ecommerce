export default function Licenses() {
  return (
    <section className="min-h-screen bg-[#F0EDE6] pt-32 md:pt-40 px-4 md:px-8 pb-20">
      <span className="text-orange-500 text-sm">✳ Legal</span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10">
        Licenses
      </h1>

      <div className="max-w-2xl flex flex-col gap-6 text-gray-700">
        <p>
          This website and its original design elements are the property of
          Pilgel. All rights reserved © {new Date().getFullYear()}.
        </p>
        <p>
          Fonts used: Playfair Display and Inter, licensed under the SIL Open
          Font License via Google Fonts.
        </p>
        <p>
          Photography sourced via the Unsplash API, used under the Unsplash
          License — free for commercial and non-commercial use.
        </p>
        <p>Icons provided by react-icons, distributed under the MIT License.</p>

        <a
          href="/Pilgel-License.pdf.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 w-fit rounded-full bg-orange-500 text-white px-6 py-3 hover:bg-black active:scale-95 transition-all duration-300 mt-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          View License (PDF)
        </a>
      </div>
    </section>
  );
}
