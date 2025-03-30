import React from 'react'
import { Tilt } from 'react-tilt';

import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc'
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
  <motion.div
  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
  whileHover={{ scale: 1.05 }}  // Slight scale effect
  transition={{ type: "spring", stiffness: 200 }}
  className='w-full p-[2px] rounded-md bg-gradient-to-r from-[#D4FF3E] to-[#00E4FF] rounded-[20px] shadow-card hover:shadow-[0px_0px_20px_rgba(212,255,62,0.6)]'
>  
  <div 
    options={{
      max: 45,  
      scale: 1,
      speed: 450,    
    }} 
    className='bg-[#0F172A] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-all duration-300 hover:bg-[#1E293B]'
  >
    <img
      src={icon}   
      alt='web-development'   
      className='w-16 h-16 object-contain'
    /> 

    <h3 className='text-white text-[20px] font-bold text-center'>
      {title}
    </h3>    
  </div>
</motion.div>

  </Tilt>      
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={styles.sectionSubText}>Hey! I'm</h1>
        <h2 className={`${styles.sectionHeadText} font-cinzel`}>
  Aryan
</h2> 
      </motion.div>
  
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I design and develop cutting-edge applications with React, Node.js, and Three.js. From scalable backends to engaging user experiences, I craft seamless, high-performance solutions. Passionate about DSA and system efficiency, I turn complex challenges into intuitive, powerful software. Let’s innovate together!


      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");