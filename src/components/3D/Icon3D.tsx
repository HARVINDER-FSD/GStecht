import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { Suspense } from 'react';

interface Icon3DProps {
  icon: 'cube' | 'sphere' | 'torus' | 'cone';
  color?: string;
  size?: number;
  autoRotate?: boolean;
  float?: boolean;
}

function Shape({ icon, color = '#6366f1' }: { icon: string; color: string }) {
  switch (icon) {
    case 'cube':
      return (
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
        </mesh>
      );
    case 'sphere':
      return (
        <mesh>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
        </mesh>
      );
    case 'torus':
      return (
        <mesh>
          <torusGeometry args={[0.5, 0.2, 16, 32]} />
          <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
        </mesh>
      );
    case 'cone':
      return (
        <mesh>
          <coneGeometry args={[0.5, 1, 32]} />
          <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
        </mesh>
      );
    default:
      return null;
  }
}

export function Icon3D({ 
  icon, 
  color = '#6366f1', 
  size = 100, 
  autoRotate = true,
  float: shouldFloat = true 
}: Icon3DProps) {
  return (
    <div style={{ width: size, height: size }}>
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          
          {shouldFloat ? (
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <Shape icon={icon} color={color} />
            </Float>
          ) : (
            <Shape icon={icon} color={color} />
          )}
          
          {autoRotate && <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />}
        </Suspense>
      </Canvas>
    </div>
  );
}
