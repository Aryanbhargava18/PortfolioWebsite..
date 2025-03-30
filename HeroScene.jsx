import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

/**
 * This component rotates a group in 3D based on mouse position,
 * creating a camera perspective tilt effect.
 */
function HeroTilt({ children }) {
  const groupRef = useRef();

  useFrame(({ mouse }) => {
    // mouse.x, mouse.y range from -1 to 1
    // Multiply by an angle factor for the tilt
    const angleFactor = 0.2; // Adjust to make tilt more or less dramatic
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.x * angleFactor;
      groupRef.current.rotation.x = -mouse.y * angleFactor;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Html from @react-three/drei to render normal HTML in 3D space */}
      <Html transform>
        {children}
      </Html>
    </group>
  );
}

export default function HeroScene({ children }) {
  return (
    <Canvas
      // Adjust camera settings for a more dramatic perspective
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <ambientLight intensity={0.5} />
      {/* The tilt group that holds our hero content */}
      <HeroTilt>{children}</HeroTilt>
    </Canvas>
  );
}
