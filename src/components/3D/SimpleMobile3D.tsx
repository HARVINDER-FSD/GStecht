import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';

function SimplePhone() {
  const groupRef = useRef<THREE.Group>(null);

  // Simple rotation animation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  // Load iPhone images from assets folder
//   const frontTexture = useTexture('/assets/ios-front.jpg');
//   const backTexture = useTexture('/assets/ios-back.jpg');

  // Create rounded rectangle shape for iPhone body
  const bodyShape = useMemo(() => {
    const shape = new THREE.Shape();
    const width = 2.8;
    const height = 5.8;
    const radius = 0.4;
    
    shape.moveTo(-width/2 + radius, -height/2);
    shape.lineTo(width/2 - radius, -height/2);
    shape.quadraticCurveTo(width/2, -height/2, width/2, -height/2 + radius);
    shape.lineTo(width/2, height/2 - radius);
    shape.quadraticCurveTo(width/2, height/2, width/2 - radius, height/2);
    shape.lineTo(-width/2 + radius, height/2);
    shape.quadraticCurveTo(-width/2, height/2, -width/2, height/2 - radius);
    shape.lineTo(-width/2, -height/2 + radius);
    shape.quadraticCurveTo(-width/2, -height/2, -width/2 + radius, -height/2);
    
    return shape;
  }, []);

  // Create slightly smaller shape for screen (with bezel)
  const screenShape = useMemo(() => {
    const shape = new THREE.Shape();
    const width = 2.65;
    const height = 5.65;
    const radius = 0.35;
    
    shape.moveTo(-width/2 + radius, -height/2);
    shape.lineTo(width/2 - radius, -height/2);
    shape.quadraticCurveTo(width/2, -height/2, width/2, -height/2 + radius);
    shape.lineTo(width/2, height/2 - radius);
    shape.quadraticCurveTo(width/2, height/2, width/2 - radius, height/2);
    shape.lineTo(-width/2 + radius, height/2);
    shape.quadraticCurveTo(-width/2, height/2, -width/2, height/2 - radius);
    shape.lineTo(-width/2, -height/2 + radius);
    shape.quadraticCurveTo(-width/2, -height/2, -width/2 + radius, -height/2);
    
    return shape;
  }, []);

  return (
    <group ref={groupRef}>
      {/* iPhone body with rounded corners */}
      <mesh>
        <extrudeGeometry args={[bodyShape, { depth: 0.3, bevelEnabled: false }]} />
        <meshStandardMaterial color="#3d4451" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Front screen with rounded corners - fits inside body */}
      <mesh position={[0, 0, 0.151]}>
        <extrudeGeometry args={[screenShape, { depth: 0.01, bevelEnabled: false }]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.1} roughness={0.3} />
      </mesh>

      {/* Back with rounded corners - fits inside body */}
      <mesh position={[0, 0, -0.151]} rotation={[0, Math.PI, 0]}>
        <extrudeGeometry args={[screenShape, { depth: 0.01, bevelEnabled: false }]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.2} roughness={0.3} />
      </mesh>
    </group>
  );
}

interface SimpleMobile3DProps {
  size?: number;
  autoRotate?: boolean;
}

export function SimpleMobile3D({ size = 400, autoRotate = true }: SimpleMobile3DProps) {
  return (
    <div className="w-full h-full overflow-hidden" style={{ maxWidth: '100%', maxHeight: '100%' }}>
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: false }}
        dpr={1}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} />
          
          <SimplePhone />
          
          <OrbitControls 
            enableZoom={false}
            autoRotate={autoRotate} 
            autoRotateSpeed={3}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
