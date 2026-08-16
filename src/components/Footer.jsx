import Marquee from "./Marquee";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-[#1a1410] text-white">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-6 border-t border-white/10 gap-4">
        <p className="text-sm text-white/60">
          Copyright © <span className="font-bold text-white">Shamim</span> |
          Designed by <span className="font-bold text-white">Shamim</span> -
          Assisted by AI .
        </p>
        <div className="flex gap-6 text-sm text-white/60">
          <Link to="/licenses" className="hover:text-white">
            Licenses
          </Link>
          <Link to="/style-guide" className="hover:text-white">
            Style Guide
          </Link>
          <Link to="/changelog" className="hover:text-white">
            Changelog
          </Link>
        </div>
      </div>
      <div className="bg-black py-8 overflow-hidden">
        <Marquee text="Creativity ✳ Strategy" />
      </div>
    </footer>
  );
}
