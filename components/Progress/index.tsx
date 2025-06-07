'use client';
import { FC, useEffect, useRef, useState } from "react";
import ProgressItem from "../ProgressItem";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import skillPercentage from "./ProgressData";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";




const Progress: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScrollToEndButton, setShowScrollToEndButton] = useState(true);
  const scrollControl = useScroll({ container: scrollRef });
  const [isScrollable, setIsScrollable] = useState(false);

  useMotionValueEvent(scrollControl.scrollX, "change", (latest) => {
    const scrollWidth = scrollRef.current?.scrollWidth ?? 0;
    const clientWidth = scrollRef.current?.clientWidth ?? 0;
    console.log({scrollWidth, clientWidth, latest, diff: scrollWidth - clientWidth});
    if (latest === scrollWidth - clientWidth) {
      setShowScrollToEndButton(false);
    } else {
      setShowScrollToEndButton(true);
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
    if (!scrollRef.current) return false;
    const { scrollWidth, clientWidth } = scrollRef.current;
    console.log("checkIfScrollable", {scrollWidth, clientWidth});
    setIsScrollable(scrollWidth > clientWidth);
  };

  const onScrollEndClick = () => {
    scrollRef.current?.scrollTo({left: scrollRef.current?.scrollWidth, behavior: 'smooth'});
  };

  const onScrollStartClick = () => {
    scrollRef.current?.scrollTo({left: 0, behavior: 'smooth'});
  };


  return (
    <div className="relative w-full h-full">
      <div className="grid grid-flow-col overflow-x-scroll grid-rows-2 gap-4 h-full w-full scrollbar-hide place-items-center auto-cols-max p-4" ref={scrollRef}>
        {skillPercentage.map((skill) => (
          <ProgressItem key={skill.skill} skill={skill} />
        ))} 
      </div>
      {isScrollable && <AnimatePresence mode="wait">
        {showScrollToEndButton ? (
          <motion.button whileTap={{ scale: 0.9 }} exit={{ scale: 0 }} key="scroll-to-end" onClick={onScrollEndClick} className="absolute bottom-[50%] right-0 w-[2vw] h-[2vw] bg-gray-200 rounded-full flex justify-center items-center">
            <FaChevronRight fill="black" />
          </motion.button>
        ) : (
          <motion.button whileTap={{ scale: 0.9 }} exit={{ scale: 0 }} key="scroll-to-start" onClick={onScrollStartClick} className="absolute bottom-[50%] left-0 w-[2vw] h-[2vw] bg-gray-200 rounded-full flex justify-center items-center">
            <FaChevronLeft fill="black" />
          </motion.button>
        )}
      </AnimatePresence>}
    </div>
  );
};

export default Progress;
