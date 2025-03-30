import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

function ParallaxDivider() {
  return (
    <ParallaxBanner
      layers={[
        {
          loop: true,
          speed: -37, 
          children: (
            <svg 
              width="100%"
              height="100%"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg" 
              style={{ transform: "scaleY(-6)" }} // Restoring original scale
            >
              <path
                fill="#14FE64" // Green color
                d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,186.7C1120,192,1280,128,1360,96L1440,64V320H0Z"
              />
            </svg>
          ),
        },
      ]}
      style={{ height: "6px" }} // Adjust as needed
    />
  );
}

export default ParallaxDivider;
