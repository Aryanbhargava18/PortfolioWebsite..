import React from 'react';
import bgImage from '/src/assets/image.png';
const Layout = ({ children }) => {
  return (
    <div 
    
      className="relative min-h-screen bg-contain bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content (Ensuring it's above the overlay) */}
      <div className="relative z-10">
        {children.map((child, index) => (
          <div key={index} className="relative">{child}</div>
        ))}
      </div> 
    </div> 
  ); 
}; 
 
export default Layout;
          