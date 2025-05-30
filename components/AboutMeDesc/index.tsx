import { ReactElement } from "react";

type AboutMeBoxDescProps = {
  title: string;
  icon?: ReactElement;
  body: string;
  onClick?: () => void;
};

const AboutMeBoxDesc: React.FC<AboutMeBoxDescProps> = ({body, title, icon}) => {
  return (
    <div className="bg-black border-8 rounded-2xl border-slate-300 w-4/5 h-[90%] md:h-3/4 lg:w-3/5 lg:h-3/5 flex flex-col justify-around items-center overflow-hidden py-3">
      <div className="font-titillium text-4xl text-center">{title}</div>
      <div className="font-roboto text-base text-center w-5/6 h-3/5 overflow-y-scroll scrollbar-hide py-5 flex justify-center items-center">{body}</div>
      <div>{icon}</div>
    </div>
  );
};

export default AboutMeBoxDesc;