'use client';
import { FC, ReactElement } from "react";
import * as ReactDomServer from "react-dom/server";
import { motion } from "framer-motion";

type AboutMeBoxProps = {
  title: string;
  icon?: ReactElement;
  body: string;
  onClick?: () => void;
};

const SVGBox: FC<{title: string}> = () => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <line x1="35" x2="110" y1="10" y2="10" stroke="white" strokeWidth={3} />
      <line x1="110" x2="110" y1="10" y2="110" stroke="white" strokeWidth={3} />
      <line x1="110" x2="10" y1="110" y2="110" stroke="white" strokeWidth={3} />
      <line x1="10" x2="10" y1="110" y2="35" stroke="white" strokeWidth={3} />
    </svg>
  );};

const AboutMeBox: FC<AboutMeBoxProps> = ({title, icon, body, onClick}) => {
  
  const svgString = encodeURIComponent(ReactDomServer.renderToString(<SVGBox title={title} />));
  return (
    <motion.div
      initial={{opacity: 0, translateY: 130}}
      whileInView={{opacity: 1, translateY: 0}}
      transition={{type: 'spring', stiffness: 160}}
      onClick={onClick}
    >
      <motion.button
        className="cursor-pointer"
        whileTap={{scale: 1.1}}
        whileHover={{scale: 1.2}}
        transition={{type: 'spring', stiffness: 140}}
      >
        <div className="translate-x-[9%] translate-y-[140%]">
          {icon}
        </div>
        <div className="w-48 h-48 md:w-52 md:h-52 flex flex-col items-center justify-center p-5" style={{backgroundImage: `url("data:image/svg+xml,${svgString}")`}}>
          <span className="font-roboto md:text-sm text-xs w-11/12 ml-1">{body}</span>
          <div className="translate-y-7 text-lg">{title}</div>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default AboutMeBox;