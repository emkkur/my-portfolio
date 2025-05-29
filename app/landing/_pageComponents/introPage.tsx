'use client';
import { FC, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImageGrid } from "@/components";
import { FaCircleCheck, FaCopy, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";


const IntroPage: FC = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [showEmail, setShowEmail] = useState(false);
  const [isCopySuccess, setIsCopySucess] = useState(false);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);


  const onMouseEnter = () => {
    timerRef.current = setTimeout(() => setShowEmail(true), 500);
  };

  const onMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setShowEmail(false);
    if (isCopySuccess) {
      setIsCopySucess(false);
    }
  };

  const onEmailClick = async () => {
    const email = "emilkurian97@gmail.com";
    if (showEmail) {
      await navigator.clipboard.writeText(email);
      setIsCopySucess(true);
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="w-screen h-screen flex md:flex-row py-4 flex-col justify-around items-center snap-center snap-mandatory">
      <motion.div className="md:max-w-[45vw]" initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1.5}}}>
        <p className="md:text-8xl text-5xl font-dotMatrix font-medium mb-1 ml-[-10px]">Emil Kurian</p>
        <motion.div initial={{translateY: '20vh', opacity: 0.4}} whileInView={{opacity: 1, translateY: '0vh', transition: {duration: 1}}} viewport={{once: true}}>
          <p className="font-dotMatrix md:text-3xl text-xl mb-1 font-light">Front-End First Software Engineer</p>
          <p className="font-dotMatrix md:text-xl text-lg font-light mt-2">London, United Kingdom</p>
          <div className="grid grid-flow-row grid-rows-1 grid-cols-3 mt-5 text-xl w-[10vw]">
            <a href="https://github.com/emkkur" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/emil-kurian-50713a193/" target="_blank"><FaLinkedinIn /></a>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="flex flex-row hover: cursor-pointer" onClick={onEmailClick}>
              <AnimatePresence mode="wait">
                {!showEmail ? (
                  <motion.div
                    key="icon"
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    exit={{scale: 0}}
                    transition={{duration: 0.1}}
                  >
                    <FaEnvelope />
                  </motion.div>
                ) : (
                  <motion.div
                    key="full_email"
                    initial={{width: 0, opacity: 0}}
                    animate={{width: '20vw', opacity: 1}}
                    exit={{width: 0, opacity: 0}}
                    transition={{duration: 0.2}}
                    className="flex flex-row justify-between"
                  >
                    <AnimatePresence mode="wait">
                      {isCopySuccess ? (
                        <motion.div key="check_green" animate={{scale: 1}} exit={{scale: 0}} transition={{duration: 0.1}}>
                          <FaCircleCheck color="green" />
                        </motion.div>
                      ) : (
                        <motion.div key="copy" animate={{scale: 1}} exit={{scale: 0}} transition={{duration: 0.1}}>
                          <FaCopy />
                        </motion.div>)}
                    </AnimatePresence>
                    <p className="text-base ml-2">emilkurian97@gmail.com</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="overflow-hidden h-screen w-1/2 flex items-center justify-center" initial={{translateY: '20vh', opacity: 0.4}} whileInView={{opacity: 1, translateY: '0vh', transition: {duration: 1}}}>
        <ImageGrid />
      </motion.div>
    </div>
  );
};

export default IntroPage;
