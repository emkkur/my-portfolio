/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { AboutMeBox } from "@/components";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AboutMeBoxDesc from "@/components/AboutMeDesc";
import { JourneyContent } from "../_pageData/journeyData";
import { FaChevronRight } from "react-icons/fa6";


const JourneyPage: React.FC = () => {  
  const [selectedItem, setSelectedItem] = useState<number|null>(null);

  const onItemClick = (index: number) => () => {
    if (selectedItem === index) {
      setSelectedItem(null);
    } else {
      setSelectedItem(index);
    }
  };

  const aboutMeContent = useMemo(() => JourneyContent.map((content, index) => (
    <AboutMeBox
      key={content.title}
      title={content.title}
      body={content.body}
      icon={content.icon}
      onClick={onItemClick(index)}
    />
  )), []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center snap-center">
      <div className="font-titillium text-4xl mb-10">My Journey</div>
      <div className="flex flex-row xl:flex-wrap overflow-x-scroll xl:overflow-x-auto scrollbar-hide w-full xl:w-1/2 items-center lg:justify-center">
        {aboutMeContent}
        <div className="lg:hidden absolute right-3 bg-white text-black rounded-full p-1">
          <FaChevronRight />
        </div>
      </div>
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            className="absolute flex justify-center items-center"
            initial={{width: 0, height: 0}}
            animate={{width: '100vw', height: '100vh'}}
            exit={{width: 0, height: 0}}
            onClick={() => setSelectedItem(null)}
          >
            <AboutMeBoxDesc
              body={JourneyContent[selectedItem].bigBody}
              title={JourneyContent[selectedItem].bigTitle}
              icon={JourneyContent[selectedItem].bigIcon}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JourneyPage;