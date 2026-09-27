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
      "Cross-platform desktop AI assistant built with Go, React, and TypeScript," +
      "integrated the OpenAI API to provide conversational AI directly from a" +
      "lightweight desktop interface across macOS, Windows, and Linux.",
  },
  {
    projectName: "SEC Ranking engine",
    id: "sec-engine",
    imageUrl: "/images/projects/sec-rankings-logo.png",
    githubUrl:
      "https://github.com/lonesume/valencia_py_course/blob/main/SEC_bcs.py",
    description:
      "A Python-based college football ranking system that evaluates SEC teams using a custom weighted algorithm based on win percentage, strength of schedule, FPI, and average win probability." +
      "The program uses nested dictionaries to organize team data, functions to calculate scores, and sorting to generate conference rankings." +
      "An interactive lookup feature also allows users to view team statistics, performance ratings, and schedule difficulty.",
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
  {
    projectName: "Pursuit of Happyness",
    id: "happyness-data-visualizer",
    imageUrl: "/images/projects/happyness-data-visualizer.png",
    githubUrl: "https://github.com/lonesume/Happiness-api",
    description:
      "An interactive visualization of global happiness, " +
      "based on Generosity, GDP, Corruption, and Happiness levels across countries. " +
      "Using Streamlit for the web interface, Plotly for dynamic visualizations, " +
      "and Python for data processing, the app provides a clear, " +
      "accessible representation of global well-being trends.",
  },
];
