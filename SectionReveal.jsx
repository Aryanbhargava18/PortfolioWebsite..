import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: 20 }, // 3D Tilt effect
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      mass: 0.8, 
    },
  }, 
  exit: { opacity: 0, y: 50, scale: 0.9, rotateX: -10, transition: { duration: 0.5 } }, // Adds a 3D exit
};

function SectionReveal({ children }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"  
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.2 }} // Allows it to repeat on scroll
    >
      <motion.div 
        initial={{ opacity: 0, y: 30, rotateX: 15 }} // 3D entrance effect
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default SectionReveal;
