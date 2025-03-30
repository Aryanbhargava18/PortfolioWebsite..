import React, { useState, useEffect, useRef } from 'react';
import SplitText from './SplitText.jsx'; // Adjust path if necessary
import '/src/components/css/intro.css'; // Ensure this path is correct

function IntroScreen({ onIntroComplete }) {
  const [showIntro, setShowIntro] = useState(true);
  const [verticalPosition, setVerticalPosition] = useState('bottom');
  const [finalFontSize, setFinalFontSize] = useState(1);
  const [animationCount, setAnimationCount] = useState(0);
  // States for the drop element:
  const [showDrop, setShowDrop] = useState(false);
  const [animateDrop, setAnimateDrop] = useState(false);
  const [dropStage, setDropStage] = useState('initial');

  const TOTAL_ANIMATIONS = 2;
  
  const combinedTextRef = useRef(null);
  const introTextRef = useRef(null);

  useEffect(() => {
    if (showIntro && combinedTextRef.current) {
      const adjustFontSize = () => {
        const containerWidth = window.innerWidth;
        let currentFontSize = 1;
        combinedTextRef.current.style.fontSize = `${currentFontSize}vw`;
        let textWidth = combinedTextRef.current.offsetWidth;

        while (textWidth < containerWidth && currentFontSize < 33) {
          currentFontSize += 0.5;
          combinedTextRef.current.style.fontSize = `${currentFontSize}vw`;
          textWidth = combinedTextRef.current.offsetWidth;
        }

        if (textWidth > containerWidth) {
          currentFontSize -= 0.5;
        }

        setFinalFontSize(currentFontSize);
        setVerticalPosition('center');
      };

      const sizeTimeout = setTimeout(adjustFontSize, 100);
      window.addEventListener('resize', adjustFontSize);

      return () => {
        clearTimeout(sizeTimeout);
        window.removeEventListener('resize', adjustFontSize);
      };
    }
  }, [showIntro]);

  const handleAnimationComplete = () => {
    setAnimationCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (animationCount === TOTAL_ANIMATIONS) {
      setTimeout(() => {
        setShowDrop(true);
        setTimeout(() => {
          setAnimateDrop(true);
          setDropStage('dropped');
        }, 50);
      }, 200);

      setTimeout(() => {
        if (introTextRef.current) {
          introTextRef.current.classList.add("fade-out");
        }
      }, 1800);
    }
  }, [animationCount]);

  useEffect(() => {
    if (dropStage === 'dropped') {
      setTimeout(() => {
        setAnimateDrop(false);
        setDropStage('exiting');
        setTimeout(() => {
          document.querySelector('.background-screen')?.classList.add('exit-down');
          setTimeout(() => {
            setShowIntro(false);
            onIntroComplete();
          }, 1200);
        }, 100);
      }, 3000);
    }
  }, [dropStage, onIntroComplete]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    alignItems: 'center',
    fontSize: `${finalFontSize}vw`,
  };

  const introTextContainerStyle = {
    height: '100%',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform:
      verticalPosition === 'bottom'
        ? 'translate(-50%, 0%)'
        : 'translate(-50%, -43.5%)',
    textAlign: 'center',
    transition: 'transform 2.5s ease-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
  };

  if (!showIntro) return null;

  return (
    <div className="intro-screen">
      {showDrop && (
        <div className={`background-screen ${animateDrop ? 'drop-background' : ''} ${dropStage === 'exiting' ? 'exit-down' : ''}`}>
          <div className="drop-column flex1" style={{ transitionDelay: '0s', }}>
            <h1 style={{ color: 'black', fontFamily: "dancing", fontSize: '1.5rem' }}>ELEVATING...</h1>
          </div>
          <div className="drop-column flex2 gold" style={{ transitionDelay: '0.15s' }}></div>
          <div className="drop-column flex3" style={{ transitionDelay: '0.3s' }}>
            <div className="threeD"></div>
          </div>
          <div className="drop-column flex4" style={{ transitionDelay: '0.45s' }}></div>
          <div className="drop-column flex5" style={{ transitionDelay: '0.6s' }}>
            <p style={{fontFamily: 'dancing', fontSize:'1.2rem'}}>
            Turning caffeine into code and existential dread into functional UI
            </p>
          </div>
        </div>
      )}

      <div
        className="intro-text-container"
        style={introTextContainerStyle}
        ref={introTextRef}
      >
        <div ref={combinedTextRef} style={containerStyle}>
          <div className="intro-text" style={{ marginBottom: '-5vw' }}>
            <SplitText
              text="WebDeveloper"
              className="text-2xl font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
          <div className="intro-text" style={{ marginBottom: '0vw' }}>
            <SplitText
              text=" Not your Average "
              className="text-2xl font-semibold text-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroScreen;
