import irisImg from '../assets/iris-gestion.png';
import todoImg from '../assets/todo.png';
import m2photo from '../assets/m2-photographie.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string; // Optionnel
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio 2025",
    description: "Mon portfolio personnel développé avec React, TypeScript et le nouveau React Compiler pour une performance optimale.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/ton-pseudo/mon-portfolio",
    liveUrl: "https://ton-portfolio.com",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop" // Image temporaire
  },
  {
    id: 2,
    title: "Iris Gestion",
    description: "Une application de gestion de tâches complexe pour la gestion d'une boutique de photographie d'iris. Elle permet de suivre les commandes, gérer le flux grâce à une interface Kanban. Envoi de notifiactions par e-mail à l'aide de Brevo. L'application est développée avec React pour le frontend, Symfony pour le backend, MySQL pour la base de données, et Docker pour la conteneurisation et mise en production.",
    technologies: ["React", "Symfony", "MySql", "Docker", "chakra-ui"],
    image: irisImg,
  },
    {
    id: 3,
    title: "To Do by M2",
    description: "Mon portfolio personnel développé avec React, TypeScript et le nouveau React Compiler pour une performance optimale.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://m2-todo-two.vercel.app/com",
    image: todoImg,
  },
    {
    id: 4,
    title: "Site wordpress - M2 Photographie",
    description: "Thème sur mesure avec création de plugins pour la gestion des tarifs et des réservations. Le site est optimisé pour le référencement et offre une expérience utilisateur fluide.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://m2-todo-two.vercel.app/com",
    image: m2photo,
  },
];