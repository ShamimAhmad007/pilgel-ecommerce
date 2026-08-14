export default function Marquee({ text = "Creativity", className = "" }) {
  return (
    <div
      className={`overflow-hidden whitespace-nowrap bg-inherit ${className}`}
    >
      <div className="inline-block animate-marquee">
        <span className="text-[8vw] font-bold px-8">{text}</span>
        <span className="text-[8vw] font-bold px-8">{text}</span>
        <span className="text-[8vw] font-bold px-8">{text}</span>
        <span className="text-[8vw] font-bold px-8">{text}</span>
      </div>
    </div>
  );
}
