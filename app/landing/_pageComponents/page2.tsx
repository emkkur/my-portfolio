'use client';
import { FC } from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
import { ImageGrid } from "@/components";

const Page2: FC<{progress: MotionValue<number>}>  = ({progress}) => {

  const subHead1Y = useTransform(progress, [0.1, 0.3], [100, 0]);
  const subHead2Y = useTransform(progress, [0.4, 0.5], [100, 0]);
  const opacity1 = useTransform(progress, [0.1, 0.3], [0, 1]);
  const opacity2 = useTransform(progress, [0.4, 0.5], [0, 1]);

  return (
    <div className="h-[300vh]">
      <div className="w-screen h-screen flex justify-around items-center sticky top-0">
        <motion.div className="text-sm max-w-[45vw] " initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1.5}}}>
          <p className="text-9xl font-titillium mb-1 ml-[-10px]">Emil Kurian</p>
          <motion.p style={{translateY: subHead1Y, opacity: opacity1}} className="text-3xl mb-1 font-normal">Software Engineer</motion.p>
          <motion.p style={{translateY: subHead2Y, opacity: opacity2}} className="text-3xl font-normal">Front End Developer</motion.p>

        </motion.div>
        <motion.div className="rounded overflow-hidden animate-breath" initial={{translateY: '20vh', opacity: 0.4}} whileInView={{opacity: 1, translateY: '0vh', transition: {duration: 1}}}>
          <ImageGrid />
        </motion.div>
      </div>
    </div>
  );
};

export default Page2;
