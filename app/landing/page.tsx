'use client';
import F4Respect from "@/hoc/F4Respect";
import WelcomePage from "./_pageComponents/welcomePage";
import IntroPage from "./_pageComponents/introPage";
import JourneyPage from "./_pageComponents/jouneyPage";
// import { getPagePercentages } from "@/utils/percentageHelper";

// const heights = [
//   100, //Welcome page
//   100, //Intro page
//   100, //Journey page
// ];
// const totalHeight = heights.reduce((acc, curr) => acc + curr, 0);
// const pagePercentages = getPagePercentages(totalHeight, heights);

export default function Landing() {

  return (
    <>
      <F4Respect />
      <div className='w-screen h-screen relative z-10 overflow-scroll snap-y snap-mandatory scrollbar-hide'> 
        <WelcomePage />
        <IntroPage />
        <JourneyPage />
      </div>
    </>
  );
}
