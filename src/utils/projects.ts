export interface ProjectDetail {
  projectName: string;
  id?: string;
  description?: string;
  imageUrl: string;
  githubUrl: string;
}

export const details: ProjectDetail[] = [
  {
    projectName: "Pocket GPT",
    id: "pocket-gpt",
    imageUrl: "/images/projects/pocket-gpt.png",
    githubUrl: "https://github.com/lonesume/pocket-gpt",
    description:
      "🚀 A powerful desktop application for macOS, Windows," +
      "and Linux that brings ChatGPT directly to your computer. " +
      "Built with Golang, React, TypeScript, " +
      "and the OpenAI API for fast and seamless AI-powered searches at your fingertips.",
  },
  {
    projectName: "Forecast Frenzy",
    id: "weather-app",
    imageUrl: "/images/projects/weather_app_logo.png",
    githubUrl: "https://github.com/lonesume/weather_api_app",
    description:
      "A Python-powered weather app that turns the chaos of the skies into clarity on your screen. " +
      "Get hyper-local forecasts, real-time updates, and weather insights wrapped in a " +
      "clean, intuitive interface—whether you're chasing storms or planning picnics, " +
      "this app keeps you a step ahead of the elements. Built for those who love tech as much " +
      "as they love talking about the weather.",
  },
  {
    projectName: "Bridge",
    id: "bridge",
    imageUrl: "/images/projects/bridge-chatgpt-logo.png",
    githubUrl: "https://github.com/lonesume/bridge",
    description:
      "Full-stack web application that translates jargon and expressions across industries and " +
      "generates explanations using ReactJS, MongoDB, Docker, Python (Flask), and OpenAI's API. " +
      "Built a ReactJS-based frontend and a Flask-based backend that " +
      "leverages OpenAI's language models for real-time, user-friendly outputs and " +
      "Clerk for authentication. Dockerized the app for consistent cloud deployment " +
      "(Microsoft Azure/AWS/Google Cloud). Mobile app built in React Native. ",
  },
  {
    projectName: "Bandit",
    id: "bandit",
    imageUrl: "/images/projects/motion-capture-emailer-logo.png",
    githubUrl: "https://github.com/lonesume/webcam",
    description:
      "Personal surveillance system using " +
      "a laptop’s webcam to detect motion and send real-time image notifications via email. " +
      "Utilizing OpenCV for motion detection and Smtplib for email alerts, the app enhances " +
      "security by providing instant updates to users.",
  },
];
