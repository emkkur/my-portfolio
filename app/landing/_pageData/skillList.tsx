import { SkillSetHighlightsProps } from "@/components";
import ReactLogo from "../../../public/logos/React.png";
import NextLogo from "../../../public/logos/Next.js.png";
import TailwindLogo from "../../../public/logos/Tailwind CSS.png";
import TypescriptLogo from "../../../public/logos/TypeScript.png";
import PythonLogo from "../../../public/logos/Python.png";
import GitLogo from "../../../public/logos/Git.png";

export const skillSetHighlights: SkillSetHighlightsProps[] = [
  {
    title: "React Native",
    image: ReactLogo,
    details: "For 3.5 years at Keyvalue, I primarily worked on mobile app development with React Native. My first major project was building a B2B e-commerce app for a company operating a B2B2C model. Within my first year as a developer, I created a payment UI that significantly reduced gateway fees, saving the client millions. The technologies used included React Native, JavaScript, Redux, Reanimated for animations, and Firebase for analytics, remote configuration, and deep linking. \n Later, I joined a team working on a crypto and stock exchange app with millions of monthly users. Initially, the app development was quite unstructured, but I quickly became one of the few people familiar with the entire codebase. I was the sole mobile developer on the new mutual fund feature, requiring extensive changes across the app. Alongside my team, I led a major effort to refactor and improve the app's code quality, promoting best coding practices. For this project, we used React Native, TypeScript, Firebase, Zustand, React Context for state management, and CircleCI for deployments.",
  },
  {
    title: "Next.js",
    image: NextLogo,
    details: "Next.js is a React framework for production.",
    addImageBg: true,
  },
  {
    title: "Tailwind CSS",
    image: TailwindLogo,
    details: "Tailwind CSS is a utility-first CSS framework.",
  },
  {
    title: "TypeScript",
    image: TypescriptLogo,
    details: "TypeScript is a typed superset of JavaScript.",
  },
  {
    title: "Python",
    image: PythonLogo,
    details: "Python is a high-level programming language.",
  },
  {
    title: "Git",
    image: GitLogo,
    details: "Git is a version control system.",
  }
];