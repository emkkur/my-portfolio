'use client';
import { FC, useMemo, useState, MouseEvent } from "react";
import { SkillHighlight, TechStacks } from "@/components";
import { skillSetHighlights } from "../_pageData/skillList";
import { AnimatePresence, motion } from "framer-motion";



const SkillsPage: FC = () => {
  const [shouldShowSkillDetail, setShouldShowSkillDetail] = useState(false);
  const [skillDetail, setSkillDetail] = useState({ title: "", details: "" });

  const showSkillDetail = (title: string, details: string) => () => {
    console.log('Onclick fired');
    setSkillDetail({ title, details });
    setShouldShowSkillDetail(true);
  };

  const closeSkillDetail = (e: MouseEvent) => {
    e.stopPropagation();
    setShouldShowSkillDetail(false);
    setSkillDetail({ title: "", details: "" });
  };



  const renderSkillHighlights = useMemo(() => {
    const skillItems = skillSetHighlights.map((skill) => (
      <div key={skill.title} className="row-span-2">
        <SkillHighlight
          {...skill}
          onClick={showSkillDetail(skill.title, skill.details || "")}
        />
      </div>
    ));
    const heading = (<div key="skills-heading" className="row-span-1 col-span-3 flex justify-center items-center text-2xl font-titillium">Key Skills</div>);
    return [heading, ...skillItems];
  }, []);



  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center snap-center">
      <div className="grid grid-flow-row grid-rows-7 grid-cols-4 gap-4 w-screen h-screen p-8">
        <div className="flex justify-center w-full h-full font-titillium text-4xl cursor-default col-span-4 row-span-1">Skill Set</div>
        <div className="grid grid-cols-3 grid-rows-5 gap-2 w-full h-full col-span-2 row-span-4 justify-center border-white border rounded-xl p-2">{renderSkillHighlights}</div>
        <div className="flex w-full h-full col-span-2 row-span-3 justify-center border-white border rounded-xl p-5"><TechStacks /></div>
        <div className="flex w-full h-full col-span-2 row-span-4 justify-center border-white border rounded-xl">Progression</div>
        <div className="flex w-full h-full col-span-2 row-span-3 justify-center border-white border rounded-xl">Tools</div>
      </div>
      <AnimatePresence>
        {shouldShowSkillDetail && (
          <motion.div
            key="skilldetail"
            className="absolute flex justify-center items-center w-[100vw] h-[100vh] bg-black/40"
            initial={{scale:0, opacity: 0}}
            animate={{scale:1, opacity: 1}}
            exit={{scale: 0, opacity: 0}}
            transition={{duration: 0.2}}
            onClick={closeSkillDetail}
          >
            <div className="flex flex-col items-center w-1/2 min-h-[50%] bg-black rounded-xl p-4 border-4 border-white/55">
              <div className="flex flex-row justify-between items-center w-full h-1/5 mb-8">
                <div className="w-[10%]" />
                <p className="text-2xl font-titillium w-4/5 text-center">{skillDetail.title}</p>
                <button
                  className="text-white font-bold w-[10%]"
                  onClick={closeSkillDetail}
                >
               X
                </button>
              </div>
              <p className="text-lg font-titillium w-full min-h-[80%] px-[5%] mb-5 whitespace-pre-line">{skillDetail.details}</p>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsPage;
  