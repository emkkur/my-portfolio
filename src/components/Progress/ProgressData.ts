import { SkillPercentage } from "../ProgressItem";

const ReactLogo = "/logos/React.png";
const NextLogo = "/logos/Next.js.png";
const TypescriptLogo = "/logos/TypeScript.png";
const PythonLogo = "/logos/Python.png";
const GitLogo = "/logos/Git.png";
const FirebaseLogo = "/logos/Firebase.png";
const TailwindLogo = "/logos/Tailwind_CSS.png";

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