import React, { useState, useEffect } from "react";
// Import des logos de marques (react-icons)
import {
  SiReact,
  SiSymfony,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const WORDS = ["Web.", "Performantes.", "Modernes.", "Responsives."];
const Hero: React.FC = () => {
  // --- EFFET MACHINE À ÉCRIRE ---
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        // Pause de 1.5s à la fin du mot avant de l'effacer
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        // Le mot est totalement effacé, on passe au suivant
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % WORDS.length);
      } else {
        setCurrentText(
          word.substring(0, currentText.length + (isDeleting ? -1 : 1)),
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);
  // -------------------------------------------

  return (
    <section className="relative min-h-screen flex items-center px-8 md:px-24 lg:px-40 overflow-hidden">
      {/* --- LES HALOS DE LUMIÈRE --- */}
      {/* Haut Gauche (Cyan) */}
      <div className="absolute top-[-20%] left-[-20%] w-[50vw] h-[50vw] min-w-125 min-h-125 bg-cyan-600/20 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Haut Droite */}
      <div className="absolute top-[-20%] right-[-20%] w-[40vw] h-[40vw] min-w-100 min-h-100 bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Bas Gauche */}
      <div className="absolute bottom-[-20%] left-[-20%] w-[40vw] h-[40vw] min-w-100 min-h-100 bg-purple-600/20 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Bas Droite */}
      <div className="absolute bottom-[-20%] right-[-20%] w-[50vw] h-[50vw] min-w-125 min-h-125 bg-fuchsia-600/20 rounded-full blur-[150px] pointer-events-none"></div>

      {/* --- CONTENEUR PRINCIPAL --- */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between z-10">
        {/* PARTIE GAUCHE */}
        <div className="flex-1 flex flex-col items-start w-full mt-20 md:mt-0">
          <h1 className="text-5xl md:text-3xl font-bold text-slate-100 mb-20">
            👋 Bonjour, je m'appelle {}
            <span className="text-cyan-400">Mehdi</span>
          </h1>

          {/* Titre animé */}
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-slate-400 mb-1 h-25 md:h-35 lg:h-40">
            Je développe des <br /> interfaces{" "}
            <span className="text-cyan-400 border-r-2 border-cyan-400 pr-1 animate-pulse">
              {currentText}
            </span>
          </h2>

          <p className="max-w-xl text-slate-400 text-lg mb-10 leading-relaxed">
            Développeur frontend spécialisé dans l'écosystème{" "}
            <span className="text-cyan-400 font-semibold">React | Symfony</span>
            .
          </p>

          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-cyan-400 text-cyan-400 px-7 py-4 rounded-md font-mono hover:bg-cyan-400/10 transition duration-300 relative group overflow-hidden"
          >
            <span className="relative z-10">Découvrir mes projets</span>
            <div className="absolute inset-0 h-full w-0 bg-cyan-400/10 transition-all duration-300 ease-out group-hover:w-full"></div>
          </button>
        </div>

        {/* PARTIE DROITE */}
        <div className="hidden md:flex flex-1 relative h-125 w-full justify-center items-center">
          {/* React */}
          <div className="absolute top-10 right-32 text-cyan-400 animate-float drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            <SiReact size={80} />
          </div>

          {/* Symfony */}
          <div className="absolute bottom-20 left-20 text-slate-100 animate-float-delayed-1 drop-shadow-[0_0_15px_rgba(241,245,249,0.5)]">
            <SiSymfony size={70} />
          </div>

          {/* TypeScript */}
          <div className="absolute top-40 left-10 text-blue-500 animate-float-delayed-2 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <SiTypescript size={60} />
          </div>

          {/* Tailwind */}
          <div className="absolute bottom-10 right-20 text-teal-400 animate-float-delayed-3 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">
            <SiTailwindcss size={65} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
