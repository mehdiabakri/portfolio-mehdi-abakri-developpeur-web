import React from 'react';
import { skills } from '../data/skillsData';
import { Layout, Database, Wrench, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = ["Frontend", "Backend", "Outils", "Design"];

  const getIcon = (cat: string) => {
    switch (cat) {
      case "Frontend": return <Layout className="text-cyan-400" size={20} />;
      case "Backend": return <Database className="text-fuchsia-500" size={20} />;
      case "Outils": return <Wrench className="text-blue-400" size={20} />;
      case "Design": return <Palette className="text-fuchsia-400" size={20} />;
      default: return null;
    }
  };

  return (
    <section id="skills" className="py-20 px-8 md:px-24 lg:px-40 bg-slate-800/30 scroll-mt-24">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-bold text-slate-100 flex items-center">
          <span className="text-cyan-400 font-mono text-xl mr-3">02.</span>
          Compétences
        </h2>
        <div className="h-px bg-slate-700 grow max-w-md"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {categories.map((cat) => (
          <div key={cat} className="space-y-6">
            <h3 className="flex items-center gap-2 text-slate-200 font-mono text-lg mb-4 border-b border-slate-700/50 pb-2">
              {getIcon(cat)} {cat}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skills
                .filter((skill) => skill.category === cat)
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-md text-slate-300 font-mono text-sm transition-all duration-300 cursor-default hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:-translate-y-1"
                  >
                    {skill.name}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;