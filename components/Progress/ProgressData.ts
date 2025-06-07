import { SkillPercentage } from "../ProgressItem";
import ReactLogo from "../../public/logos/React.png";
import NextLogo from "../../public/logos/Next.js.png";
import TypescriptLogo from "../../public/logos/TypeScript.png";
import PythonLogo from "../../public/logos/Python.png";
import GitLogo from "../../public/logos/Git.png";
import FirebaseLogo from "../../public/logos/Firebase.png";
import TailwindLogo from "../../public/logos/Tailwind_CSS.png";

const skillPercentage: SkillPercentage[] = [
  {
    skill: "React Native",
    percentage: 90,
    proficiency: "Advanced",
    icon: ReactLogo
  },
  {
    skill: "Next.js",
    percentage: 80,
    proficiency: "Intermediate",
    icon: NextLogo,
    whiteBg: true
  },
  {
    skill: "TypeScript",
    percentage: 95,
    proficiency: "Advanced",
    icon: TypescriptLogo
  },
  {
    skill: "Python",
    percentage: 80,
    proficiency: "Intermediate",
    icon: PythonLogo
  },
  {
    skill: "Git",
    percentage: 90,
    proficiency: "Advanced",
    icon: GitLogo
  },
  {
    skill: "Firebase",
    percentage: 85,
    proficiency: "Intermediate",
    icon: FirebaseLogo
  },
  {
    skill: "Tailwind",
    percentage: 80,
    proficiency: "Intermediate",
    icon: TailwindLogo
  }
];

export default skillPercentage;