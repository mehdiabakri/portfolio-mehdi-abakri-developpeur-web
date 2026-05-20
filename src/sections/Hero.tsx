import React from 'react'; // Optionnel avec les versions récentes

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-8 md:px-24 lg:px-40">
      <p className="text-cyan-400 font-mono mb-4 md:text-lg">
        👋 Bonjour, je m'appelle
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4">
        Mehdi
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6">
        Je développe des interfaces web.
      </h2>
      <p className="max-w-xl text-slate-400 text-lg mb-10 leading-relaxed">
        Je suis un développeur frontend spécialisé dans l'écosystème <span className="text-cyan-400 font-semibold">React</span>. 
      </p>
      <button className="border border-cyan-400 text-cyan-400 px-7 py-4 rounded-md font-mono hover:bg-cyan-400/10 transition duration-300">
        Découvrir mes projets
      </button>
    </section>
  );
};

export default Hero;