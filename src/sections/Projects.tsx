import React from "react";
import { projects } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 px-8 md:px-24 lg:px-40 scroll-mt-24"
    >
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-slate-100 flex items-center">
          <span className="text-cyan-400 font-mono text-xl mr-3">03.</span>
          Mes Projets
        </h2>
        <div className="h-px bg-slate-700 grow max-w-md"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
