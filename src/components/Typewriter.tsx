import React, { useEffect, useRef } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseTime = 1000,
}: TypewriterProps) {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let i = 0; // word index
    let j = 0; // letter index
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentWord = words[i % words.length];
      if (elRef.current) {
        elRef.current.textContent = currentWord.slice(0, j);
      }

      if (!isDeleting && j === currentWord.length) {
        timeout = setTimeout(() => { isDeleting = true; type(); }, pauseTime);
        return;
      }

      if (isDeleting && j === 0) {
        isDeleting = false;
        i++;
      }

      j += isDeleting ? -1 : 1;
      timeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    };

    type();
    return () => clearTimeout(timeout);
  }, [words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-flex flex-col items-center">
      <span className="invisible whitespace-nowrap text-3xl md:text-5xl font-bold">
        {words.reduce((a, b) => (a.length >= b.length ? a : b), "")}
      </span>
      <span className="absolute inline-flex justify-center items-center w-full">
        <span
          ref={elRef}
          className="text-3xl md:text-5xl font-bold text-white whitespace-nowrap text-center"
        ></span>
        <span className="w-0.5 h-8 md:h-10 bg-white animate-pulse ml-1" />
      </span>
    </span>
  );
}