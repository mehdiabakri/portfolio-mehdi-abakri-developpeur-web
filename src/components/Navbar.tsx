import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-8 md:px-16 py-4 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-3"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Nom */}
        <div className="text-cyan-400 font-mono text-xl font-bold cursor-pointer">
          <a href="#">Med</a>
        </div>

        {/* Liens de navigation (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-fuchsia-500 font-mono text-sm transition-colors"
                >
                  <span className="text-cyan-400 mr-1">
                    0{navLinks.indexOf(link) + 1}.
                  </span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

        </div>

        {/* Menu Mobile (Simplifié pour l'instant) */}
        <div className="md:hidden text-cyan-400">
          <button>Menu</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
