import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { totalCount } = useCart();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Orders", path: "/orders" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6">
        <Link
          to="/"
          className="text-white font-bold  text-2xl md:text-3xl hover:text-orange-500 transition-colors duration-300"
        >
          Jarvis
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setCartOpen(true)}
            className="relative text-white hover:scale-110 transition-transform duration-200"
          >
            🛒
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalCount}
            </span>
          </button>

          <button
            onClick={() => setMenuOpen(true)}
            className="rounded-full bg-black text-white px-5 py-2 flex items-center gap-2 hover:bg-orange-500 transition-colors duration-300"
          >
            Menu ☰
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] bg-[#111111] flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-8 text-white text-3xl hover:rotate-90 transition-transform duration-300"
        >
          ✕
        </button>

        <nav className="flex flex-col items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-white text-3xl md:text-5xl font-bold hover:text-orange-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
