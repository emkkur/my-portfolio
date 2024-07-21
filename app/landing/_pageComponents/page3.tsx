/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { AboutMeBox } from "@/components";
import { PageScrollProps } from "./types";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AboutMeBoxDesc from "@/components/AboutMeDesc";
import { Page3Content } from "./page3Data";


const Page3: React.FC<PageScrollProps> = ({height}) => {  
  const [selectedItem, setSelectedItem] = useState<number|null>(null);

  const onItemClick = (index: number) => () => {
    if (selectedItem === index) {
      setSelectedItem(null);
    } else {
      setSelectedItem(index);
    }
  };

  const aboutMeContent = useMemo(() => Page3Content.map((content, index) => (
    <AboutMeBox
      key={content.title}
      title={content.title}
      body={content.body}
      icon={content.icon}
      onClick={onItemClick(index)}
    />
  )), []);

  return (
    <div style={{height: `${height}vh`}}>
      <div className="w-screen h-screen flex flex-col justify-center items-center sticky top-0">
        <div className="font-titillium text-4xl mb-10">My Journey</div>
        <div className="flex flex-row flex-wrap w-full lg:w-1/2 items-center justify-center">
          {aboutMeContent}
        </div>
        <AnimatePresence>
          {selectedItem !== null && (
            <motion.div
              className="absolute w-screen h-screen flex justify-center items-center"
              initial={{width: 0, height: 0}}
              animate={{width: '100vw', height: '100vh'}}
              exit={{width: 0, height: 0}}
              onClick={() => setSelectedItem(null)}
            >
              <AboutMeBoxDesc
                body={Page3Content[selectedItem].bigBody}
                title={Page3Content[selectedItem].bigTitle}
                icon={Page3Content[selectedItem].bigIcon}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Page3;