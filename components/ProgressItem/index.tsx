import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

export type SkillPercentage = {
  skill: string;
  percentage: number;
  proficiency: "Advanced" | "Intermediate" | "Basic";
  icon: StaticImageData;
  whiteBg?: boolean;
};

const ProgressItem: FC<{skill: SkillPercentage}> = ({ skill }) => {
  return (
    <div className="flex w-36 flex-col justify-center items-center text-center font-roboto p-2 snap-center">
      <div className="w-16 circle-border mb-3" style={{background: skill.whiteBg ? 'white' : 'rgb(0,0,0,0)'}}><Image src={skill.icon} alt={skill.skill} /></div>
      <div className="w-full whitespace-nowrap">{skill.skill}</div>
      <div className="w-full bg-gray-700 rounded-md px-2 text-sm">{skill.proficiency}</div>
      <div>
        <svg className="h-20 w-20" viewBox="0 0 42 42" style={{transform: 'rotate(-90deg)'}}>
          <circle cx="21" cy="21" r="16" fill="transparent" stroke="gray" strokeWidth={1} />
          <circle cx="21" cy="21" r="16" fill="transparent" strokeLinecap="round" strokeDasharray="100px" strokeDashoffset={`${100 - skill.percentage}px`} stroke="white" strokeWidth={2} />
          <text
            x="21"
            y="21"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-[0.5rem] fill-white rotate-90 translate-x-[42px]"
          >
            {skill.percentage}%
          </text>
        </svg>
      </div>
    </div>
  );
};

export default ProgressItem;