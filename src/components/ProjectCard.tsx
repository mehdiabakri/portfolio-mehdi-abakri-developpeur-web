import React from "react";
import type { Project } from "../data/projectsData";

interface ProjectCardProps {
  project: Project;
  onOpen: () => void; // On ajoute la prop onOpen
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpen }) => {
  return (
    <div 
      onClick={onOpen} // Toute la carte est cliquable
      className="group bg-slate-800/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-400/50 hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full"
    >
      <div className="h-56 overflow-hidden relative">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
           <span className="bg-white text-slate-950 px-6 py-2 rounded-full font-bold text-sm">Voir le projet</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-wider">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm line-clamp-2 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
           {project.technologies.slice(0, 3).map(tech => (
             <span key={tech} className="text-[10px] font-mono text-cyan-400/70">#{tech}</span>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
