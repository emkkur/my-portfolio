'use client';
import F4Respect from "@/hoc/F4Respect";
import WelcomePage from "./_pageComponents/welcomePage";
import IntroPage from "./_pageComponents/introPage";
import JourneyPage from "./_pageComponents/jouneyPage";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { getPagePercentages } from "@/utils/percentageHelper";

const heights = [
  100, //Welcome page
  300, //Intro page
  200, //Journey page
];
const totalHeight = heights.reduce((acc, curr) => acc + curr, 0);
const pagePercentages = getPagePercentages(totalHeight, heights);

export default function Landing() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({target: scrollRef,});
  const page2ScrollProgress = useTransform(scrollYProgress, [pagePercentages[0], pagePercentages[1]], [0, 1]);
  const page3ScrollProgress = useTransform(scrollYProgress, [pagePercentages[1], pagePercentages[2]], [0, 1]);

  return (
    <>
      <F4Respect />
      <div ref={scrollRef} className={`w-full h-[${totalHeight}vh] relative z-10 no-scrollbar`}> 
        <WelcomePage height={heights[0]} />
        <IntroPage height={heights[1]} progress={page2ScrollProgress} />
        <JourneyPage height={heights[2]} progress={page3ScrollProgress} />
      </div>
    </>
  );
}
