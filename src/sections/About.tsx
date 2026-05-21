import React from "react";
import {
  Code2,
  Terminal,
  MonitorSmartphone,
  Database,
  Layout,
} from "lucide-react";
import portrait from "../assets/photo-mehdi-developpeur-frontend-react-calvados.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-8 md:px-24 lg:px-40 scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-slate-100 flex items-center">
          <span className="text-cyan-400 font-mono text-xl mr-3">01.</span>À
          propos de moi
        </h2>
        <div className="h-px bg-slate-700 grow max-w-md"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Colonne Texte */}
        <div className="md:col-span-2 space-y-5 text-slate-400 text-lg leading-relaxed">
          <p>
            Bonjour, moi c'est{" "}
            <span className="text-cyan-400 font-semibold"> Mehdi</span> ! Basé à
            Honfleur, en Normandie, je suis développeur web passionné par la
            création sous toutes ses formes. Tout a commencé avec ma formation
            chez O'clock, qui m'a donné les clés du développement moderne et
            l'envie d'aller toujours plus loin. Mon intérêt pour le
            développement web a commencé par curiosité, et c'est devenu une
            véritable passion pour la création d'interfaces utilisateur fluides.
          </p>

          <p>
            Aujourd'hui, mon focus principal est de construire des applications
            web performantes avec
            <span className="text-cyan-400 font-semibold"> React</span> et{" "}
            <span className="text-cyan-400 font-semibold">TypeScript</span>. Je
            m'efforce de produire un code propre, maintenable et accessible.
          </p>

          <p>
            <span className="text-slate-100 font-semibold italic underline decoration-cyan-400">
              Ce que je recherche :
            </span>{" "}
            Je suis à la recherche d'opportunités de missions Freelance en tant
            que
            <span className="text-slate-100 font-semibold">
              {" "}
              Développeur Frontend{" "}
            </span>
            pour continuer à apprendre et à contribuer à des projets.
          </p>

          <p className="mt-6 mb-2">
            Voici quelques technologies avec lesquelles j'ai travaillé récemment
            :
          </p>

          <ul className="grid grid-cols-2 gap-3 font-mono text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <Layout size={16} className="text-cyan-400" /> React
            </li>
            <li className="flex items-center gap-2">
              <Code2 size={16} className="text-blue-500" /> TypeScript
            </li>
            <li className="flex items-center gap-2">
              <MonitorSmartphone size={16} className="text-teal-400" /> Tailwind
              CSS
            </li>
            <li className="flex items-center gap-2">
              <Database size={16} className="text-green-400" /> Supabase
            </li>
            <li className="flex items-center gap-2">
              <Terminal size={16} className="text-slate-100" /> Symfony / PHP
            </li>
            <li className="flex items-center gap-2">
              <Database size={16} className="text-blue-400" /> MySQL
            </li>
          </ul>
        </div>

        {/* Colonne Image */}
        <div className="relative group mx-auto md:mx-0 w-62.5 h-62.5 md:w-75 md:h-75">
          <div className="absolute inset-0 bg-linear-to-tr from-cyan-400 to-fuchsia-600 rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>

          {/* Conteneur image */}
          <div className="relative h-full w-full bg-slate-800 rounded-xl overflow-hidden border-2 border-slate-900 z-10">
            <img
              src={portrait}
              alt="Photo de profil de Mehdi"
              className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
