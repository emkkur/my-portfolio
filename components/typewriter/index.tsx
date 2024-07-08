/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { FC, useEffect, useRef, useState } from "react";

enum TypePace {
  'FAST' = 1,
  'MEDIUM' = 2,
  'SLOW' = 4
}

type TypeWriterProps = {
  words: Array<string>;
  pace: keyof typeof TypePace
  fontSize?: string
}

const TypeWriter: FC<TypeWriterProps> = ({pace, words, fontSize = 'text-base'}) => {
  const [word, changeword] = useState('');
  const interval = 200 * TypePace[pace];


  useEffect(() => {
    let intervalRef: NodeJS.Timeout | null = null;
    let currentWord = 0;
    let currentLetter = 1;
    let isClearing = false;
    intervalRef = setInterval(() => {
      if (currentLetter > words[currentWord].length) {
        isClearing = true;
      }
      if (currentLetter === 0 && isClearing) {
        currentWord = currentWord >= words.length - 1 ? 0 : currentWord + 1;
        isClearing = false;
      }
      changeword(words[currentWord].substring(0, currentLetter));
      currentLetter += isClearing ? -1 : 1;
    }, interval);
    return () => {
      if (intervalRef) clearInterval(intervalRef);
      currentWord = 0;
      currentLetter = 0;
    };
  }, [words, interval]);

  return (
    <span className={`${fontSize} text-white flex flex-row items-center justify-center`}><div>{word}</div><div className="z-0 animate-blink">|</div></span>
  );
};

export default TypeWriter;