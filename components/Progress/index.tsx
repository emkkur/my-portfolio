'use client';
import { FC, useEffect, useRef, useState } from "react";
import ProgressItem from "../ProgressItem";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import skillPercentage from "./ProgressData";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useMotionValue } from "framer-motion";




const Progress: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollControl = useScroll({ container: scrollRef });
  const [isScrollable, setIsScrollable] = useState(false);
  const leftScrollButtonOpacity = useMotionValue(0);
  const rightScrollButtonOpacity = useMotionValue(1);

  useMotionValueEvent(scrollControl.scrollXProgress, "change", (latest) => {
    if (latest === 0) {
      leftScrollButtonOpacity.set(0);
      rightScrollButtonOpacity.set(1);
    } else if (latest > 0.9) {
      leftScrollButtonOpacity.set(1);
      rightScrollButtonOpacity.set(0);
    } else {
      leftScrollButtonOpacity.set(1);
      rightScrollButtonOpacity.set(1);
    }
  });

  useEffect(() => {
    window.addEventListener("resize", checkIfScrollable);
    checkIfScrollable();
    return () => {
      window.removeEventListener("resize", checkIfScrollable);
    };
  }, []);

  const checkIfScrollable = () => {
    if (!scrollRef.current) {
      setIsScrollable(false);
      return;
    }
    const { scrollWidth, clientWidth } = scrollRef.current;
    setIsScrollable(scrollWidth > clientWidth);
  };

  const onScrollEndClick = () => {
    scrollRef.current?.scrollBy({left: 144, behavior: 'smooth'});
  };

  const onScrollStartClick = () => {
    scrollRef.current?.scrollBy({left: -144, behavior: 'smooth'});
  };


  return (
    <div className="relative w-full h-full py-4 px-[3vw]">
      <div className="grid grid-flow-col overflow-x-scroll grid-rows-1 gap-4 h-full w-full scrollbar-hide place-items-center auto-cols-max" ref={scrollRef}>
        {skillPercentage.map((skill) => (
          <ProgressItem key={skill.skill} skill={skill} />
        ))} 
      </div>
      {isScrollable && <AnimatePresence mode="wait">
        <motion.button
          whileTap={{ scale: 0.9 }}
          exit={{ scale: 0 }}
          key="scroll-right"
          onClick={onScrollEndClick}
          className="absolute bottom-[50%] right-[0.5vw] w-[2vw] h-[2vw] bg-gray-200 rounded-full flex justify-center items-center"
          style={{opacity: rightScrollButtonOpacity}}
        >
          <FaChevronRight fill="black" />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          exit={{ scale: 0 }}
          key="scroll-left"
          onClick={onScrollStartClick}
          className="absolute bottom-[50%] left-[0.5vw] w-[2vw] h-[2vw] bg-gray-200 rounded-full flex justify-center items-center"
          style={{opacity: leftScrollButtonOpacity}}
        >
          <FaChevronLeft fill="black" />
        </motion.button>
      </AnimatePresence>}
    </div>
  );
};

export default Progress;
