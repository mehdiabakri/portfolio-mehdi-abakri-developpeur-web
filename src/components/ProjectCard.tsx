import React from "react";
import type { Project } from "../data/projectsData";
import { Eye } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
      {/* Image du projet */}
      <div className="h-48 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>

      {/* Contenu */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm mb-4 line-clamp-3 grow">
          {project.description}
        </p>

        {/* Tags des technos */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Liens : GitHub (via react-icons) et Live Demo (via Lucide) */}
        <div className="flex items-center gap-6 mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-fuchsia-500 transition-all duration-300 flex items-center gap-2 group/link"
              title="Voir la démo en direct"
            >
              <Eye
                size={30}
                className="group-hover/link:scale-110 transition-transform"
              />
              <span className="text-[10px] font-mono font-bold opacity-0 group-hover/link:opacity-100 transition-opacity">
                Voir le projet
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
