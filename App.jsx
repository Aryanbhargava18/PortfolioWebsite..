import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax"; 
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Layout from "./components/Layout";
import ParallaxDivider from "./ParallaxDivider.jsx"; 
import SectionReveal from "./SectionReveal";
import IntroScreen from './components/IntroScreen.jsx';
import CustomCursor from "./components/CustomCursor.jsx";
const Loader = () => { 
  return (   
    <div className="loader-container"> 
      <div className="loader"></div>
    </div>
  );
};   
  
const App = () => {
  const [loading, setLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const contentRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
     
  // Render IntroScreen until it's complete
  if (showIntro) {
    return <IntroScreen onIntroComplete={() => setShowIntro(false)} />;
  }

  return (
    <ParallaxProvider> 
      <BrowserRouter> 
        <div className="relative z-0 bg-primary" ref={contentRef}>
          <div className="bg-hero bg-cover bg-no-repeat bg-center">
            <CustomCursor />
            <Navbar /> 
            <Hero />
          </div>
          <ParallaxDivider />
          <Layout>
            <SectionReveal>
              <About /> 
            </SectionReveal>
            <ParallaxDivider /> 
            <SectionReveal>
              <Experience />
            </SectionReveal>
            <SectionReveal>
              <Tech />
            </SectionReveal>
            <ParallaxDivider />  
            <SectionReveal>
              <Works /> 
            </SectionReveal>
            <ParallaxDivider />
            <SectionReveal>
              <Feedbacks />
            </SectionReveal>
            <ParallaxDivider />
          </Layout> 
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </ParallaxProvider>
  );
};

export default App;