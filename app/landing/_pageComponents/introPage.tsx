'use client';
import { FC } from "react";
import { motion } from "framer-motion";
import { ImageGrid } from "@/components";


const IntroPage: FC = () => {

  return (
    <div className="w-screen h-screen flex md:flex-row py-4 flex-col justify-around items-center snap-center snap-mandatory">
      <motion.div className="md:max-w-[45vw]" initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1.5}}}>
        <p className="md:text-8xl text-5xl font-dotMatrix font-medium mb-1 ml-[-10px]">Emil Kurian</p>
        <motion.p initial={{translateY: '20vh', opacity: 0.4}} whileInView={{opacity: 1, translateY: '0vh', transition: {duration: 1}}} viewport={{once: true}} className="font-dotMatrix md:text-3xl text-xl mb-1 font-light">Software Engineer</motion.p>
        <motion.p initial={{translateY: '20vh', opacity: 0.4}} whileInView={{opacity: 1, translateY: '0vh', transition: {duration: 1}}} viewport={{once: true}} className="font-dotMatrix md:text-3xl text-xl font-light">Front End Developer</motion.p>
      </motion.div>
      <motion.div className="overflow-hidden h-screen w-1/2 flex items-center justify-center" initial={{translateY: '20vh', opacity: 0.4}} whileInView={{opacity: 1, translateY: '0vh', transition: {duration: 1}}}>
        <ImageGrid />
      </motion.div>
    </div>
  );
};

export default IntroPage;
