'use client';
import { useEffect, useState } from "react";
import F4Respect from "@/hoc/F4Respect";

import WelcomePage from "./_pageComponents/welcomePage";
import IntroPage from "./_pageComponents/introPage";
import JourneyPage from "./_pageComponents/jouneyPage";
import SkillsPage from "./_pageComponents/skillsPage";
import MobileMessage from "./_pageComponents/mobileMessage";

export default function Landing() {

  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    if (typeof window !== 'undefined') {
      window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false);
    }
  };

  useEffect(() => {
    checkIsMobile();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        checkIsMobile();
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <>
      <F4Respect />
      {isMobile ? <MobileMessage /> : (
        <div className='w-screen h-screen relative z-10 overflow-scroll snap-y snap-mandatory scrollbar-hide'> 
          <WelcomePage />
          <IntroPage />
          <SkillsPage />
          <JourneyPage />
        </div>
      )}
    </>
  );
}
