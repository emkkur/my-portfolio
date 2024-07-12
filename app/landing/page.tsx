'use client';
import F4Respect from "@/hoc/F4Respect";
import Page1 from "./_pageComponents/page1";
import Page2 from "./_pageComponents/page2";
import Page3 from "./_pageComponents/page3";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { getPagePercentages } from "@/utils/percentageHelper";

const heights = [100, 300, 200];
const totalHeight = heights.reduce((acc, curr) => acc + curr, 0);
const pagePercentages = getPagePercentages(totalHeight, heights);

export default function Landing() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({target: scrollRef,});
  const page2ScrollProgress = useTransform(scrollYProgress, [pagePercentages[0], pagePercentages[1]], [0, 1]);

  return (
    <>
      <F4Respect />
      <div ref={scrollRef} className={`w-full h-[${totalHeight}vh] relative z-10`}> 
        <Page1 height={heights[0]} />
        <Page2 height={heights[1]} progress={page2ScrollProgress} />
        <Page3 height={heights[2]} />
      </div>
    </>
  );
}
