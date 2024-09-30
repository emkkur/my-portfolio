import { TypeWriter } from "@/components";
import { FC } from "react";
import { FaChevronDown } from "react-icons/fa6";

const greetings = [
  "Hello",
  "Hola",
  "Привет",
  "Bonjour",
  "你好",
  "Ciao",
  "안녕하세요",
  "Olá",
  "नमस्ते",
  "Merhaba",
  "سلام",
  "مرحبا",
  "Hallo",
  "こんにちは",
  "Γεια σας",
  "Ahoj",
  "Hej",
  "გამარჯობა",
  "Szia",
  "നമസ്കാരം",
];

const WelcomePage: FC = () => {
  const scrollToNextPage = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };
  
  return (
    <div className='w-screen h-screen flex justify-center flex-col snap-center'>
      <TypeWriter words={greetings} pace="FAST" fontSize="text-5xl" />
      <div onClick={scrollToNextPage} className="relative bottom-[-40vh] left-[48.5vw] md:w-[3vw] md:h-[3vw] w-9 h-9 x-0 overflow-hidden rounded-3xl bg-slate-300 animate-bounce hover:animate-none text-black text-xl flex justify-center items-center">
        <FaChevronDown fontSize={'1.25vw'} className="md:text=[1.25vw] text-lg" />
      </div>
    </div>
  );
};

export default WelcomePage;