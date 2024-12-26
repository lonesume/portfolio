export interface ProjectDetail {
  projectName: string;
  id?: string;
  description?: string;
  imageUrl: string;
}

export const details: ProjectDetail[] = [
  {
    projectName: "Pocket GPT",
    id: "pocket-gpt",
    imageUrl: "/images/projects/pocket-gpt.png",
  },
  {
    projectName: "Weather App",
    id: "weather-app",
    imageUrl: "/images/projects/weather_app_logo.png",
  },
  {
    projectName: "Bridge",
    id: "bridge",
    imageUrl: "/images/projects/bridge-chatgpt-logo.png",
  },
  {
    projectName: "Bandit",
    id: "bandit",
    imageUrl: "/images/projects/motion-capture-emailer-logo.png",
  },
];
