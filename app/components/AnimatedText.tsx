"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedText({ text, className = "", style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIndex) => {
            const globalIndex =
              words
                .slice(0, wordIndex)
                .reduce((acc, w) => acc + w.length, 0) + charIndex;
            const totalChars = text.replace(/\s/g, "").length;
            const start = globalIndex / totalChars;
            const end = (globalIndex + 1) / totalChars;

            return (
              <span key={charIndex} className="relative inline-block">
                <span className="opacity-[0.2]">{char}</span>
                <motion.span
                  className="absolute inset-0"
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [start, end],
                      [0.2, 1]
                    ),
                  }}
                >
                  {char}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </p>
  );
}

