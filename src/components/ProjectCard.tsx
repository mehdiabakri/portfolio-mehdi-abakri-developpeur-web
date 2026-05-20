import React from 'react';
import type { Project } from '../data/projectsData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-300">
      {/* Image du projet */}
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags des technos */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-[10px] font-mono px-2 py-1 bg-blue-400/10 text-blue-400 rounded-full border border-blue-400/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Liens */}
        <div className="flex gap-4">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            className="text-slate-300 hover:text-white transition-colors"
          >
            GitHub
          </a>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              className="text-blue-400 hover:underline transition-colors"
            >
              Démo Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;