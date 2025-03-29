import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Bee() {
  const { scene } = useGLTF("/assets/scene.gltf"); // Ensure the model is in public/assets/
  const beeRef = useRef();
  const clock = useRef(0);

  useFrame((state, delta) => {
    if (beeRef.current) {
      clock.current += delta;
      beeRef.current.position.x = Math.sin(clock.current) * 2;
      beeRef.current.position.y = Math.cos(clock.current * 2) * 0.5 + 1;
      beeRef.current.rotation.y += delta * 0.5;
    }
  });

  return <primitive ref={beeRef} object={scene} scale={0.5} />;
}

export default function BeeScene() {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Bee />
    </Canvas>
  );
}
