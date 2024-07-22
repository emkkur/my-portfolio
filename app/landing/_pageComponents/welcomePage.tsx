import { TypeWriter } from "@/components";
import { FC } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { PageProps } from "./types";

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

const WelcomePage: FC<PageProps> = ({height = 100}) => {
  const scrollToNextPage = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };
  
  return (<div className={`w-screen flex justify-center flex-col`} style={{height: `${height}vh`}}>
    <TypeWriter words={greetings} pace="FAST" fontSize="text-5xl" />
    <div onClick={scrollToNextPage} className="relative bottom-[-42vh] left-[48.5vw] w-[3vw] h-[3vw] x-0 overflow-hidden rounded-3xl bg-slate-300 animate-bounce hover:animate-none text-black text-xl flex justify-center items-center">
      <FaChevronDown fontSize={'1.25vw'} />
    </div>
  </div>
  );
};

export default WelcomePage;