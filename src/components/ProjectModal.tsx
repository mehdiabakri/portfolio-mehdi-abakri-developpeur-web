import React from 'react';
import { X, Eye, Code2, Globe } from 'lucide-react';
import type { Project } from '../data/projectsData';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
      {/* Overlay (Arrière-plan flou) */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Contenu de la Modale */}
      <div className="relative bg-slate-900 border border-slate-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
        
        {/* Bouton Fermer (Sticky en haut à droite) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-900/50 backdrop-blur-md rounded-full text-slate-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col">
          {/* Grande Image */}
          <div className="w-full h-64 md:h-100">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Détails */}
          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100">{project.title}</h2>
              
              <div className="flex gap-4">
            
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-slate-950 font-bold rounded-lg hover:bg-cyan-300 transition-all"
                  >
                    <Eye size={20} /> <span className="text-sm font-mono font-bold">Voir</span>
                  </a>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Colonne gauche : Description */}
              <div className="md:col-span-2">
                <h3 className="text-cyan-400 font-mono mb-4 flex items-center gap-2">
                  <Globe size={18} /> À propos du projet
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>

              {/* Colonne droite : Technos */}
              <div>
                <h3 className="text-fuchsia-500 font-mono mb-4 flex items-center gap-2">
                  <Code2 size={18} /> Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded-md text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;