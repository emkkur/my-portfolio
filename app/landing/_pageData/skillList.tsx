import { SkillSetHighlightsProps } from "@/components";
import ReactLogo from "../../../public/logos/React.png";
import NextLogo from "../../../public/logos/Next.js.png";
import TailwindLogo from "../../../public/logos/Tailwind_CSS.png";
import TypescriptLogo from "../../../public/logos/TypeScript.png";
import PythonLogo from "../../../public/logos/Python.png";
import GitLogo from "../../../public/logos/Git.png";

export const skillSetHighlights: SkillSetHighlightsProps[] = [
  {
    title: "React Native",
    image: ReactLogo,
    details: "For 3.5 years at Keyvalue, I primarily worked on mobile app development with React Native. My first major project was building a B2B e-commerce app for a company operating a B2B2C model. Within my first year as a developer, I created a payment UI that significantly reduced gateway fees, saving the client millions. The technologies used included React Native, JavaScript, Redux, Reanimated for animations, and Firebase for analytics, remote configuration, and deep linking. \n\n Later, I joined a team working on a crypto and stock exchange app with millions of monthly users. Initially, the app development was quite unstructured, but I quickly became one of the few people familiar with the entire codebase. I was the sole mobile developer on the new mutual fund feature, requiring extensive changes across the app. Alongside my team, I led a major effort to refactor and improve the app's code quality, promoting best coding practices. For this project, we used React Native, TypeScript, Firebase, Zustand, React Context for state management, and CircleCI for deployments.",
  },
  {
    title: "Next.js",
    image: NextLogo,
    details: "During my time at Keyvalue, although primarily focused on mobile development, my familiarity with React allowed me to explore and assist colleagues with various web projects. Initially trained as a web developer, this foundation made it easier for me to transition into using Next.js for personal and freelance projects. At first, concepts like server-side rendering seemed challenging, coming from a client-side rendering background. However, my deep dive into Next.js, especially after the release of Next 13 and its intuitive App router, significantly enhanced my understanding and appreciation of its flexibility. I've successfully used Next.js extensively to build my portfolio website and various client projects, benefiting from its powerful combination of client and server-side rendering capabilities.",
    addImageBg: true,
  },
  {
    title: "Tailwind CSS",
    image: TailwindLogo,
    details: "Having worked extensively with React Native, which relies entirely on JS styling and Flexbox for layout, my initial transition to web projects involved a slight learning curve with CSS. While not overly challenging, I found writing traditional CSS a bit cumbersome at first. My experience improved significantly upon discovering Tailwind at Keyvalue. It immediately resonated with me due to its straightforward and utility-first approach. Although Tailwind can be a contentious topic within the front-end community, some criticize it for verbosity while others praise its simplicity, I personally find it highly efficient. I've enjoyed customizing Tailwind to include frequently used styles and appreciate the flexibility to revert to traditional CSS for more complex styling needs. The ease of initializing projects with Tailwind in Next.js has made it my default styling solution, unless specifically directed otherwise by clients.",
  },
  {
    title: "TypeScript",
    image: TypescriptLogo,
    details: `My journey with TypeScript began after my first React Native application, which was built using JavaScript. I know that doesn’t sound right, but I feel like you need to undergo the Javascript trials to worthy of Typescript. Transitioning from Python, which I primarily used throughout college, felt both familiar and challenging. Concepts like currying and higher-order functions, previously theoretical in classes, became clear and practical in a production environment. Despite this, JavaScript presented frustrations, particularly around the tediousness of ensuring type safety. Without TypeScript, adding checks and handling prototypes in React Native felt cumbersome-issues often surfaced only after manual checks or runtime warnings. \n\n When I briefly experienced TypeScript on a project needing extra support, it immediately resonated with me. TypeScript significantly improved the stability and reusability of components. The explicit type declarations, while initially an extra step, streamlined the development process and clarified component interactions. Components became so intuitive to use that new developers could understand their functionality without deep-diving into their implementation. Once I fully transitioned to TypeScript projects, it quickly became an integral part of my workflow. Like Din Djarin famously said, "This is the way."`,
  },
  {
    title: "Python",
    image: PythonLogo,
    details: "My journey with Python began in 2014, introduced by my uncle, who was a software engineer in Canada. Although I didn't pursue it professionally, Python quickly became my preferred choice for backend development in both personal and freelance projects. I've successfully used frameworks like FastAPI and Flask to build servers, significantly enhancing the functionality and flexibility of my projects. \n\n Python was integral to both my bachelor's and master's final projects. Specifically, my master's project involved creating a version control system optimized for large binary files, utilizing Python for implementing content-defined chunking and delta compression techniques. Currently, as I'm building this portfolio, I'm also working on setting up a Retrieval-Augmented Generation (RAG) pipeline using Python, which involves leveraging LLMs for processing and summarizing complex financial news data. While not an expert, my ongoing engagement with Python ensures I can seamlessly join a backend team and rapidly adapt to their workflow.",
  },
  {
    title: "Git",
    image: GitLogo,
    details: "Git has been an essential part of my development workflow since my bachelor's studies. From the moment I learned the basics, creating a new project folder and running git init became second nature. Initially, as students, Git primarily served as a collaborative tool, facilitating teamwork on various projects. During my time at Keyvalue, my proficiency with Git grew significantly, encompassing almost every aspect, including merging, conflict resolution, patch creation, and even using the notorious --force command. \n\n I gained extensive experience setting up pre-commit hooks with Husky, reviewing numerous pull requests, and providing detailed code reviews. I've also worked seamlessly across platforms such as GitHub, GitLab, and Bitbucket. These experiences not only solidified my practical skills but also taught me the importance of careful commit practices and thoughtful code reviews, shaping my approach to collaborative software development.",
  }
];