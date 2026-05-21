import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    { name: "À propos", href: "about" },
    { name: "Compétences", href: "skills" },
    { name: "Projets", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  // Fonction pour gérer le scroll fluide et fermer le menu mobile
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Empêche le saut par défaut du HTML

    const element = document.getElementById(id);
    if (element) {
      // scroll
      element.scrollIntoView({ behavior: "smooth" });
      // Ferme le menu mobile si on était dessus
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-8 md:px-16 py-4 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo / Nom - Retour en haut */}
        <div className="text-cyan-400 font-mono text-xl font-bold cursor-pointer">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Mehdi ABAKRI
          </a>
        </div>

        {/* Liens de navigation sur Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.href}`}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-slate-300 hover:text-fuchsia-500 font-mono text-sm transition-colors cursor-pointer"
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

        {/* Menu Mobile */}
        <div className="md:hidden text-cyan-400">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-6" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-slate-300 hover:text-fuchsia-500 font-mono text-lg transition-colors flex flex-col items-center cursor-pointer"
              >
                <span className="text-cyan-400 text-xs mb-1">
                  0{navLinks.indexOf(link) + 1}.
                </span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
