'use client';
import { FC } from "react";
import { motion, useTransform } from "framer-motion";
import { ImageGrid } from "@/components";
import { PageScrollProps } from "./types";


const IntroPage: FC<PageScrollProps>  = ({progress, height}) => {

  const subHead1Y = useTransform(progress, [0.1, 0.4], [100, 0]);
  const subHead2Y = useTransform(progress, [0.4, 0.5], [100, 0]);
  const opacity1 = useTransform(progress, [0.1, 0.3], [0, 1]);
  const opacity2 = useTransform(progress, [0.4, 0.5], [0, 1]);

  return (
    <div style={{height: `${height}vh`}}>
      <div className="w-screen h-screen flex md:flex-row py-4 flex-col justify-around items-center sticky top-0">
        <motion.div className="md:max-w-[45vw] w-[80vw] " initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1.5}}}>
          <p className="md:text-8xl text-5xl font-dotMatrix font-medium mb-1 ml-[-10px]">Emil Kurian</p>
          <motion.p style={{translateY: subHead1Y, opacity: opacity1}} className="font-dotMatrix md:text-3xl text-xl mb-1 font-light">Software Engineer</motion.p>
          <motion.p style={{translateY: subHead2Y, opacity: opacity2}} className="font-dotMatrix md:text-3xl text-xl font-light">Front End Developer</motion.p>

        </motion.div>
        <motion.div className="overflow-hidden h-screen w-1/2 flex items-center justify-center" initial={{translateY: '20vh', opacity: 0.4}} whileInView={{opacity: 1, translateY: '0vh', transition: {duration: 1}}}>
          <ImageGrid />
        </motion.div>
      </div>
    </div>
  );
};

export default IntroPage;
