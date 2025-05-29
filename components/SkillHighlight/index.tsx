'use client';
import { animate, motion, useMotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export type SkillSetHighlightsProps = {
  title: string;
  image: StaticImageData;
  details?: string;
  addImageBg?: boolean;
  onClick?: () => void;
}

const SkillHighlight: React.FC<SkillSetHighlightsProps> = ({image, title, addImageBg, onClick}) => {
  const hoverValue = useMotionValue(1);
  const onHoverStart = () => {
    animate(hoverValue, 1.2, {duration: 0.5});
  };
  const onHoverEnd = () => {
    animate(hoverValue, 1, {duration: 0.5});
  };
  return (
    <motion.div className="flex justify-center items-center w-full h-full border border-green-50 rounded-xl flex-col cursor-pointer" onClick={onClick} onHoverStart={onHoverStart} onHoverEnd={onHoverEnd}>
      <motion.div style={{background: addImageBg ? 'white' : 'rbg(0,0,0,0)', borderRadius: '50%', scale: hoverValue}}>
        <Image
          className="w-[5vw] h-[5vw]"
          src={image}
          alt="React Logo"
        />
      </motion.div>
      <p className="font-roboto text-sm mt-2">{title}</p>
    </motion.div>
  );
};

export default SkillHighlight;