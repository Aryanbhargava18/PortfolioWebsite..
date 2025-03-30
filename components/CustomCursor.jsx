import React, { useState, useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e) => {
      // Hide custom cursor if near the top (e.g., within 10px)
      if (e.clientY < 10) {
        setVisible(false);
      } else {
        setVisible(true);
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      document.body.style.cursor = "auto";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="custom-cursor"
      style={{ top: position.y, left: position.x }}
    />
  );
};
 
export default CustomCursor;
