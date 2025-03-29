// useLenis.js
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.05, // very short duration for immediate response
      easing: (t) => Math.sqrt(t), // more snappy easing
      smooth: true,
      direction: 'vertical',
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      // No destroy method; allow natural cleanup
    };
  }, []);
}
