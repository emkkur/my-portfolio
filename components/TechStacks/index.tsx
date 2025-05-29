'use client';
import { FC, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const techStacks = {
  "Frontend": ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion", "Reanimated", "Recoil", "React Contexts", "Axios"],
  "Backend": ["Node.js", "FastAPI", "Python", "PostgreSQL", "Docker", "Firebase", "Python"],
  "Dev Tools": ["Git", "VSCode", "Cursor", "Windsurf", "Jira", "Confluence", "Github", "Postman"],
  "UX Tools": ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator"],
  "Project Management Tools": ["Jira", "Confluence", "Slack", "Github", "Postman"],
  "Design Tools": ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator"],
  "Communication Tools": ["Slack", "Microsoft Teams", "Zoom", "Google Meet"],
  "MS Office Tools": ["Excel", "PowerPoint", "Word"],
};

const tabs = Object.keys(techStacks);

const Chip = ({ label }: { label: string }) => (
  <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm text-center flex items-center justify-center h-[3vh]">
    {label}
  </span>
);

const KnownTechSection: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<HTMLButtonElement[]>([]);
  const tabPosition = useMotionValue(0);
  const tabWidth = useMotionValue(0);
  const smoothX = useSpring(tabPosition, { stiffness: 500, damping: 40 });
  const smoothWidth = useSpring(tabWidth, { stiffness: 500, damping: 40 });

  const scrollToTab = (tabIndex: number) => () => {
    if (scrollRef.current) {
      const {clientWidth, offsetLeft} = positionRef.current[tabIndex];
      const scrollAmount = scrollRef.current.clientWidth * tabIndex;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      tabPosition.set(offsetLeft);
      tabWidth.set(clientWidth);
    }
  };

  useEffect(() => {
    if (positionRef.current && positionRef.current.length > 0) {
      scrollToTab(0)();
    }
  }, []);

  return (
    <div className="w-full max-w-2xl">
      {/* Tabs */}
      <div className="relative flex sm:overflow-x-auto scrollbar-hide h-2/6">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={scrollToTab(index)}
            className="text-sm font-semibold text-white hover:text-gray-400 transition text-center px-2 pb-1"
            ref={(el) => {
              if (el) {
                positionRef.current[index] = el;
              }
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
        <motion.div
          key="tab-indicator"
          className="absolute bottom-0 h-1 bg-gray-200 rounded-full"
          style={{ x: smoothX, width: smoothWidth }}
        />
      </div>

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="flex h-4/6 overflow-y-scroll overflow-x-scroll scroll-smooth snap-x snap-mandatory space-x-6 scrollbar-hide"
      >
        {tabs.map((tab) => (
          <div
            key={tab}
            className="min-w-full snap-start grid grid-cols-3 grid-rows-4 gap-5 py-2"
          >
            {techStacks[tab as keyof typeof techStacks].map((tech) => (
              <Chip key={tech} label={tech} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnownTechSection;