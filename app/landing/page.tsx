'use client';
import F4Respect from "@/hoc/F4Respect";
import Page1 from "./_pageComponents/page1";
import Page2 from "./_pageComponents/page2";
import Page3 from "./_pageComponents/page3";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Landing() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({target: scrollRef,});
  const page2ScrollProgress = useTransform(scrollYProgress, [0.125, 0.625], [0, 1]);

  return (
    <>
      <F4Respect />
      <div ref={scrollRef} className="w-full h-[800vh] relative z-10"> 
        <Page1 />
        <Page2 progress={page2ScrollProgress} />
        <Page3 />
      </div>
    </>
  );
}
