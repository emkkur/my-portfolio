import Image from "next/image";
import { TypeWriter } from "@/components";

const greetings = [
  "Hello",             // English
  "Hola",              // Spanish
  "Привет",            // Russian
  "Bonjour",           // French
  "你好",               // Chinese (Simplified)
  "Ciao",              // Italian
  "안녕하세요",           // Korean
  "Olá",               // Portuguese
  "नमस्ते",             // Hindi
  "Merhaba",           // Turkish
  "سلام",              // Persian (Farsi)
  "مرحبا",             // Arabic
  "Hallo",             // German
  "こんにちは",           // Japanese
  "Γεια σας",           // Greek
  "Ahoj",              // Czech
  "Hej",               // Swedish
  "გამარჯობა",         // Georgian
  "Szia",              // Hungarian
  "Salut"              // Romanian
];

export default function Home() {
  return (
   <div><TypeWriter words={greetings} pace="FAST" fontSize="text-5xl" /></div>
  );
}
