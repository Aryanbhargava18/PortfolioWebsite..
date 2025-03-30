import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Tilt from "react-parallax-tilt";
import Navbar from "./Navbar";
import videoFile from "/src/assets/Sequence 01_3 (2).mp4"; 
 

const Hero = () => {
  return (
    // 2) Wrap entire existing code in <HeroScene>
    // <HeroScene> 
      <div className="relative w-full h-screen overflow-hidden">
        {/* If you want the navbar to tilt as well, place it inside Tilt below.
            If not, keep it outside. */}
        {/* <Navbar /> */} 

        {/* 1) Wrap entire hero section in Tilt */}
        <Tilt
        tiltMaxAngleX={1.2}
        tiltMaxAngleY={1.2} 
        perspective={1850}  
        scale={1}   
        transitionSpeed={200}  
        gyroscope={true}  
        // glareEnable={true} 
        // glareMaxOpacity={0.2}
        // glareColor="#ffffff"  
        // glarePosition="all"
        className="relative w-full h-screen"
      >
        {/* 2) The entire content: video background + text + 3D */}
<section className="relative w-full h-full mx-auto">
  {/* BG Video with CSS filter */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    playsInline
    autoPlay
    loop
    muted  
  >
      <source src={videoFile} type="video/mp4" />
  </video>  
   
            {/* The text & circle line */}
            <div
              className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-1`}
            >
              <div className="flex flex-col justify-center items-center mt-5">
                <div className="w-5 h-5 rounded-full bg-[#006400]"/>
                <div className="w-1 sm:h-80 h-40 bg-[#023020]" />
              </div> 
 
              <div className="relative w-full">
                <h1 className="mt-40 text-8xl font-cinzel text-[#dcd3f3]">
                  ARYAN
                </h1>
                <p className={`${styles.heroSubText} text-[#E0E0E0] mt-2 font-dancing`}>
                  I develop intuitive interfaces
                  <br className="sm:block hidden" /> 
                  and seamless web experiences.
                </p>
                <h1 className="text-8xl font-cinzel absolute top-40 right-[-157px] text-[#dcd3f3]">
                  BHARGAVA
                </h1>
              </div>
            </div> 

            {/* 3D Model */}     
            <ComputersCanvas />

            {/* Scroll Indicator */}
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
              <a href="#about">
                <div className="w[35px] h-[64px] rounded-3xl border-4 border-[#060D0D] flex justify-center items-start p-2">
                  <motion.div 
                    animate={{ y: [0, 24, 0] }}
                    transition={{  
                      duration: 1.5,
                      repeat: Infinity, 
                      repeatType: "loop",
                    }}
                    className="w-3 h-3 rounded-full bg-[#E0E0E0] mb-1"
                  />
                </div>   
              </a>       
            </div>
          </section>
        </Tilt>
      </div>
    // </HeroScene>
  );
};

export default Hero;
