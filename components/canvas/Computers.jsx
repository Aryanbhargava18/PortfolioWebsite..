import React, { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Preload } from "@react-three/drei";
import Tilt from "react-parallax-tilt"; // Import ParallaxTilt
import CanvasLoader from "../Loader";
import GlowingRingNoPost from "../GlowingRing";

function Statue({ isMobile }) {
  const { scene } = useGLTF("/greek_statue_head/scene.gltf");
  const groupRef = useRef();
 
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.x -= center.x;
    scene.position.y -= center.y;
    scene.position.z -= center.z;
  }, [scene]); 

  useFrame(() => {
    if (groupRef.current) {    
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      <hemisphereLight skyColor={"#b2a9ec"} groundColor={"#444444"} intensity={0.3} />
      <directionalLight position={[4, 12, 3]} intensity={1.5} castShadow shadow-mapSize={1024} />
      <pointLight position={[0, 5, 0]} intensity={0.2} />

      <primitive object={scene} scale={isMobile ? 0.7 : 12} position={[0.88,-1.54, 0]} />

      <group position={[0, 1.68, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <GlowingRingNoPost />
      </group>
    </group>
  ); 
}

export default function Scene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (  
    <Tilt
    tiltMaxAngleX={1.5}
    tiltMaxAngleY={1.5}
    perspective={1000}
    scale={1}
    transitionSpeed={1000}
    gyroscope={true}
    // glareEnable={true}
    // glareMaxOpacity={0.2}
    // glareColor="#ffffff"
    // glarePosition="all"
    className="relative w-full h-screen"
  >
      <Canvas frameloop="demand" shadows dpr={[1, 2]} camera={{ position: [0, 2, 8], fov: 35 }} gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Statue isMobile={isMobile} />
          <Environment preset="sunset" />
          <Preload all />
        </Suspense>  
      </Canvas>
    </Tilt>
  );
}
