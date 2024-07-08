"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import F2PayRespect from "../../public/F2PayRespect.gif";

const F4Respect: FC = () => {
  const startAnimation = (e: KeyboardEvent) => {
    if (e.key === "f") {
      setShow(true);
      setTimeout(() => {setShow(false);}, 6000);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", startAnimation);
    return () => {
      document.removeEventListener("keydown", startAnimation);
    };}, []);

  const [show, setShow] = useState(false);

  return (
    <>
      {show && (<div className="absolute flex justify-center items-center z-10 h-screen w-screen bg-slate-900/40">
        <motion.div className="w-3/4 h-3/4 rounded-xl bg-gray-900 flex justify-center items-center" animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1}}>
          <Image className="w-3/4 h-3/4" src={F2PayRespect} alt="F To Pay respect" unoptimized/>
        </motion.div>
      </div>)}
    </>
  );
};

export default F4Respect;