import React from "react";

function GlowingRingNoPost() {
  return (
    // Shift the ring group on the Z-axis AND rotate it slightly around the X-axis
    <group position={[0, 0, 0.57]} rotation={[-0.2, 0, 0]}>
      {/* Base ring: smaller radius */}
      <mesh>
        {/* torusGeometry args = [radius, tube, radialSegments, tubularSegments] */}
        <torusGeometry args={[1.26, 0.02, 16, 100]} />
        <meshBasicMaterial color="#FF00A8" transparent opacity={0.2} />
      </mesh>

      {/* Slightly bigger, partly transparent */}
      <mesh>
        <torusGeometry args={[1.31, 0.03, 16, 100]} />
        <meshBasicMaterial color="#00E4FF" transparent opacity={0.3} />
      </mesh>

      {/* Even bigger, more transparent */}
      <mesh>
        <torusGeometry args={[1.36, 0.04, 16, 100]} />
        <meshBasicMaterial color="#FFD700" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

export default GlowingRingNoPost;

