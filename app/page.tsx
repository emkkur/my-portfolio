'use client'
import {FaChevronDown} from "react-icons/fa6"
import { TypeWriter } from "@/components";
import { motion, useScroll } from "framer-motion";
import { LegacyRef, RefObject, useRef } from "react";
import Me from '../public/171847957597898519.jpeg'
import Portrait from '../public/portait.jpg'
import Image from "next/image";
import F4Respect from "@/hoc/F4Respect";

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


export default function Home() {

  const scrollRef = useRef<HTMLDivElement>();
  const {scrollY} = useScroll({container: scrollRef as RefObject<HTMLElement>});

  return (
    <F4Respect>
      <div ref={scrollRef as LegacyRef<HTMLDivElement>} className="w-full h-screen overflow-y-scroll overflow-x-hidden scroll-m-0 scroll-p-0 snap-y snap-mandatory ">
        {/* Page 1 */}
        <div className="w-screen h-screen flex justify-center snap-start snap-always ">
          <TypeWriter words={greetings} pace="FAST" fontSize="text-5xl" />
          <motion.div className={`absolute`} style={{bottom: scrollY}}>
            <div className="w-10 h-10 overflow-hidden rounded-3xl bg-slate-300 animate-bounce hover:animate-none text-black text-xl flex justify-center items-center">
              <FaChevronDown />
            </div>
          </motion.div>
        </div>

        {/* Page 2 */}
        <div className="w-screen h-screen flex justify-around items-center snap-start snap-always">
          <motion.div className="text-left text-sm max-w-[45vw]" initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1.5}}} viewport={{root: scrollRef as RefObject<HTMLElement>, margin: '20px', amount: 0.5, once: false}}>
            <p className="text-8xl mb-3 ml-[-10px]">Emil Kurian</p>
            <p className="max-w-[40vw] text-justify">If I had to choose a word that best describes my skill set, it would be <b>problem solver.</b> I&apos;ve always been fascinated by how things work from a young age. From fixing broken toys as a kid to creating complex applications that meet various user requirements; My motivation has always been finding <b>a solution</b> that makes things work. With this driving force, I finished my bachelor&apos;s degree in <b>Computer Science and Engineering from Mar Athanasius College of Engineering</b> in Kerala, India. I was recruited out of college to work at <b><a href="https://www.keyvalue.systems/">Keyvalue Software Systems.</a></b> In college, most of my coding was in <b>Python</b>, with my final projects built in Python and Pandas. Once I started working, I ventured into the world of Javascript and I must say the chaos of the javascript world was fascinating.</p>

          </motion.div>
          <motion.div className="rounded overflow-hidden animate-breath" initial={{translateY: '20vh', opacity: 0.4}} whileInView={{opacity: 1, translateY: '0vh', transition: {duration: 1}}}>
            <Image src={Me} alt="Me" placeholder="blur" quality={100} style={{objectFit: "cover", width: '40vw', height: '40vw'}} />
          </motion.div>
        </div>
      </div>
    </F4Respect>
  );
}
