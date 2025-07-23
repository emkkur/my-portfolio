import { FC } from "react";

const MobileMessage: FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center z-10 px-6">
      <p className="text-2xl font-bold whitespace-pre-line text-white font-titillium">
        {"Dear visitor,\n\n Welcome to my portfolio. I know mobile UIs are a great showcase of skill, but just as I was done with my portfolio for larger screens I had to undertake a project that required alot more time than I had available. I will get to it once I'm done with this engagement. Thank you for bearing with the inconvinience and please open the website on a laptop or computer. \n\n Regards,\n Emil Kurian"}
      </p>
    </div>
  );
};

export default MobileMessage;