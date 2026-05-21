export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Outils" | "Design";
}

export const skills: Skill[] = [
  { name: "React 19", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Symfony", category: "Backend" },
  { name: "MySQL", category: "Backend" },
  { name: "Docker", category: "Outils" },
  { name: "Git / GitHub", category: "Outils" },
  { name: "Vite", category: "Outils" },
  { name: "Photoshop", category: "Design" },
];
