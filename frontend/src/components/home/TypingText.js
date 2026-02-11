'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function TypingText({ texts, className }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(timer);
  }, [texts]);

  return (
    <div className={`inline-block relative ${className} min-w-[300px] text-center`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          exit={{ opacity: 0, filter: 'blur(10px)', y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute left-0 right-0 mx-auto"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible placeholder to maintain width/height */}
      <span className="invisible">{texts[index]}</span>
    </div>
  );
}
