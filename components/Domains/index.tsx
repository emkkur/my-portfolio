'use client';
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { domainExperience } from "./data";
import { motion, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Domains: FC = () => {

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const { scrollXProgress } = useScroll({container: scrollRef});
  const rightButtonOpacity = useMotionValue(1);
  const leftButtonOpacity = useMotionValue(0);

  useEffect(() => {
    window.addEventListener("resize", checkIfScrollable);
    checkIfScrollable();
    return () => {
      window.removeEventListener("resize", checkIfScrollable);
    };
  }, []);

  useMotionValueEvent(scrollXProgress, "change", (latest) => {
    if (latest === 0) {
      rightButtonOpacity.set(1);
      leftButtonOpacity.set(0);
    } else if (latest > 0.9) {
      rightButtonOpacity.set(0);
      leftButtonOpacity.set(1);
    } else {
      rightButtonOpacity.set(1);
      leftButtonOpacity.set(1);
    }
      
  });

  const checkIfScrollable = () => {
    if (!scrollRef.current) return false;
    const { scrollWidth, clientWidth } = scrollRef.current;
    setIsScrollable(scrollWidth > clientWidth);
  };

  const onScrollRightClick = () => {
    scrollRef.current?.scrollBy({left: scrollRef.current?.clientWidth, behavior: 'smooth'});
  };

  const onScrollLeftClick = () => {
    scrollRef.current?.scrollBy({left: -scrollRef.current?.clientWidth, behavior: 'smooth'});
  };
  const domainExperienceContent = useMemo(() => {
    return domainExperience.map((experience) => (
      <div className="w-full h-full shrink-0 flex flex-col snap-center mr-[3vw]" key={experience.title}>
        <p className="font-titillium text-3xl w-full text-center h-[10%]">{experience.title}</p>
        <div className="overflow-scroll h-[90%] scrollbar-hide">
          <p className="font-roboto text-base w-full">{experience.body}</p>
        </div>
      </div>
    ));
  }, []);
  return (
    <div className="relative w-full h-full py-3 px-[3vw]">
      <div ref={scrollRef} className="overflow-x-scroll flex snap-mandatory snap-x w-full h-full scrollbar-hide">
        {domainExperienceContent}
      </div>
      {isScrollable && (
        <>
          <motion.button whileTap={{ scale: 0.9 }} style={{opacity: rightButtonOpacity}} key="scroll-to-end" onClick={onScrollRightClick} className="absolute bottom-[50%] right-[0.5vw] w-[2vw] h-[2vw] bg-gray-200 rounded-full flex justify-center items-center">
            <FaChevronRight fill="black" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.9 }} style={{opacity: leftButtonOpacity}} key="scroll-to-start" onClick={onScrollLeftClick} className="absolute bottom-[50%] left-[0.5vw] w-[2vw] h-[2vw] bg-gray-200 rounded-full flex justify-center items-center">
            <FaChevronLeft fill="black" />
          </motion.button>
        </>
      )}
    </div>
  );
};

export default Domains;