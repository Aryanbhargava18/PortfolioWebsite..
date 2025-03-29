import React from 'react';
import { motion } from 'framer-motion';

const SplitText = ({
  text,
  className,
  delay = 0,
  animationFrom = { opacity: 0, transform: 'translate3d(0,50px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = "easeOutCubic",
  threshold = 0.2,      // Not used in this basic version
  rootMargin = "-50px", // Not used in this basic version
  onLetterAnimationComplete = () => {}
}) => {
  const letters = text.split('');

  return (
    <span className={className}>
      {letters.map((letter, index) => (  
        <motion.span
          key={`${letter}-${index}`}
          initial={animationFrom}
          animate={animationTo}
          transition={{
            delay: delay / 1000 + index * 0.05, // Base delay plus per-letter delay
            ease: easing,
          }}
          onAnimationComplete={() => {
            // Call the complete callback on the last letter
            if (index === letters.length - 1) {
              onLetterAnimationComplete();
            }
          }}
          style={{ display: 'inline-block' }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

export default SplitText;
