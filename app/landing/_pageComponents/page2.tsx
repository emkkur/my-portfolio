'use client';
import { FC } from "react";
import { motion, useTransform } from "framer-motion";
import { ImageGrid } from "@/components";
import { PageScrollProps } from "./types";


const Page2: FC<PageScrollProps>  = ({progress, height}) => {

  const subHead1Y = useTransform(progress, [0.1, 0.4], [100, 0]);
  const subHead2Y = useTransform(progress, [0.4, 0.5], [100, 0]);
  const opacity1 = useTransform(progress, [0.1, 0.3], [0, 1]);
  const opacity2 = useTransform(progress, [0.4, 0.5], [0, 1]);

  return (
    <div style={{height: `${height}vh`}}>
      <div className="w-screen h-screen flex justify-around items-center sticky top-0">
        <motion.div className="text-sm max-w-[45vw] " initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1.5}}}>
          <p className="text-8xl font-dotMatrix font-medium mb-1 ml-[-10px]">Emil Kurian</p>
          <motion.p style={{translateY: subHead1Y, opacity: opacity1}} className="font-dotMatrix text-3xl mb-1 font-light">Software Engineer</motion.p>
          <motion.p style={{translateY: subHead2Y, opacity: opacity2}} className="font-dotMatrix text-3xl font-light">Front End Developer</motion.p>

        </motion.div>
        <motion.div className="rounded overflow-hidden" initial={{translateY: '20vh', opacity: 0.4}} whileInView={{opacity: 1, translateY: '0vh', transition: {duration: 1}}}>
          <ImageGrid />
        </motion.div>
      </div>
    </div>
  );
};

export default Page2;
