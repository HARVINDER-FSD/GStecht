import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, RoundedBox, Environment, MeshReflectorMaterial } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function RealisticMobilePhone() {
  const groupRef = useRef<THREE.Group>(null);

  // Create canvas textures for front and back
  const createPhoneTexture = (isBack: boolean) => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;

    if (isBack) {
      // Back of phone - gradient with camera module
      const gradient = ctx.createLinearGradient(0, 0, 0, 1024);
      gradient.addColorStop(0, '#1a1a2e');
      gradient.addColorStop(1, '#16213e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 512, 1024);
      
      // Camera module area
      ctx.fillStyle = '#0f0f1e';
      ctx.beginPath();
      ctx.roundRect(50, 50, 200, 200, 40);
      ctx.fill();
      
      // Camera lenses
      ctx.fillStyle = '#1e3a8a';
      ctx.beginPath();
      ctx.arc(100, 100, 40, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(200, 100, 40, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(100, 200, 40, 0, Math.PI * 2);
      ctx.fill();
      
      // Flash
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(200, 200, 25, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Front of phone - iOS style interface
      const gradient = ctx.createLinearGradient(0, 0, 0, 1024);
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(1, '#1a1a1a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 512, 1024);
      
      // Status bar
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px Arial';
      ctx.fillText('9:41', 30, 40);
      ctx.fillText('100%', 420, 40);
      
      // Dynamic Island
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.roundRect(180, 20, 150, 35, 20);
      ctx.fill();
      
      // App icons grid
      const colors = ['#007AFF', '#5856D6', '#FF2D55', '#FF9500', '#34C759', '#FF3B30', '#5AC8FA', '#AF52DE'];
      let colorIndex = 0;
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
          ctx.fillStyle = colors[colorIndex % colors.length];
          ctx.beginPath();
          ctx.roundRect(40 + col * 110, 150 + row * 110, 90, 90, 20);
          ctx.fill();
          colorIndex++;
        }
      }
      
      // Dock
      ctx.fillStyle = 'rgba(28, 28, 30, 0.8)';
      ctx.beginPath();
      ctx.roundRect(40, 880, 432, 100, 25);
      ctx.fill();
      
      // Dock icons
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = colors[i];
        ctx.beginPath();
        ctx.roundRect(60 + i * 105, 900, 80, 80, 18);
        ctx.fill();
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  };

  const frontTexture = createPhoneTexture(false);
  const backTexture = createPhoneTexture(true);

  // Subtle rotation animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.2}>
      <group ref={groupRef} scale={1.1}>
        {/* Main Phone Body - Titanium Frame */}
        <RoundedBox args={[3, 6.2, 0.35]} radius={0.35} smoothness={6}>
          <meshStandardMaterial 
            color="#3d4451"
            metalness={0.9}
            roughness={0.15}
          />
        </RoundedBox>

        {/* Glass Back with Image Texture */}
        <RoundedBox args={[2.92, 6.12, 0.05]} radius={0.32} smoothness={10} position={[0, 0, -0.2]}>
          <meshPhysicalMaterial 
            map={backTexture}
            metalness={0.1}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.15}
            reflectivity={0.8}
          />
        </RoundedBox>

        {/* Front Glass Screen Bezel - Ceramic Shield */}
        <RoundedBox args={[2.92, 6.12, 0.05]} radius={0.32} smoothness={10} position={[0, 0, 0.2]}>
          <meshPhysicalMaterial 
            color="#000000"
            metalness={0.05}
            roughness={0.03}
            clearcoat={1}
            clearcoatRoughness={0.02}
            reflectivity={0.98}
          />
        </RoundedBox>

        {/* Active Super Retina XDR Display with Front Image */}
        <RoundedBox args={[2.82, 5.95, 0.02]} radius={0.28} smoothness={10} position={[0, 0.05, 0.23]}>
          <meshStandardMaterial 
            map={frontTexture}
            emissive="#0a0a0a"
            emissiveIntensity={0.2}
            metalness={0.05}
            roughness={0.3}
          />
        </RoundedBox>

        {/* Dynamic Island (iPhone 15 Pro) - Simplified */}
        <RoundedBox args={[0.9, 0.22, 0.03]} radius={0.11} smoothness={10} position={[0, 2.8, 0.24]}>
          <meshStandardMaterial 
            color="#000000"
            metalness={0.1}
            roughness={0.1}
          />
        </RoundedBox>

        {/* Front Camera in Dynamic Island */}
        <mesh position={[-0.25, 2.8, 0.25]}>
          <circleGeometry args={[0.055, 32]} />
          <meshStandardMaterial 
            color="#0a0a0a" 
            emissive="#1e3a8a" 
            emissiveIntensity={0.15}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Face ID / TrueDepth Camera */}
        <mesh position={[0.25, 2.8, 0.25]}>
          <circleGeometry args={[0.035, 32]} />
          <meshStandardMaterial 
            color="#0a0a0a"
            emissive="#dc2626"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Status Bar - Time */}
        <RoundedBox args={[0.5, 0.12, 0.01]} radius={0.02} smoothness={4} position={[-1, 2.8, 0.24]}>
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#ffffff" 
            emissiveIntensity={0.4}
            opacity={0.95}
            transparent
          />
        </RoundedBox>

        {/* Status Bar - Signal/Battery */}
        <RoundedBox args={[0.5, 0.12, 0.01]} radius={0.02} smoothness={4} position={[1, 2.8, 0.24]}>
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#ffffff" 
            emissiveIntensity={0.4}
            opacity={0.95}
            transparent
          />
        </RoundedBox>

        {/* iOS App Icons - Row 1 */}
        {[-0.9, -0.3, 0.3, 0.9].map((x, i) => (
          <RoundedBox 
            key={`row1-${i}`}
            args={[0.48, 0.48, 0.015]} 
            radius={0.13} 
            smoothness={8} 
            position={[x, 1.8, 0.24]}
          >
            <meshStandardMaterial 
              color={['#007AFF', '#5856D6', '#FF2D55', '#FF9500'][i]}
              emissive={['#0051D5', '#3634A3', '#C9003B', '#C66900'][i]}
              emissiveIntensity={0.5}
              metalness={0.2}
              roughness={0.3}
            />
          </RoundedBox>
        ))}

        {/* iOS App Icons - Row 2 */}
        {[-0.9, -0.3, 0.3, 0.9].map((x, i) => (
          <RoundedBox 
            key={`row2-${i}`}
            args={[0.48, 0.48, 0.015]} 
            radius={0.13} 
            smoothness={8} 
            position={[x, 1.1, 0.24]}
          >
            <meshStandardMaterial 
              color={['#34C759', '#FF3B30', '#5AC8FA', '#AF52DE'][i]}
              emissive={['#248A3D', '#C4001D', '#0096D6', '#7D1FA7'][i]}
              emissiveIntensity={0.5}
              metalness={0.2}
              roughness={0.3}
            />
          </RoundedBox>
        ))}

        {/* iOS App Icons - Row 3 */}
        {[-0.9, -0.3, 0.3, 0.9].map((x, i) => (
          <RoundedBox 
            key={`row3-${i}`}
            args={[0.48, 0.48, 0.015]} 
            radius={0.13} 
            smoothness={8} 
            position={[x, 0.4, 0.24]}
          >
            <meshStandardMaterial 
              color={['#FF9500', '#32ADE6', '#007AFF', '#8E8E93'][i]}
              emissive={['#C66900', '#0077A8', '#0051D5', '#636366'][i]}
              emissiveIntensity={0.5}
              metalness={0.2}
              roughness={0.3}
            />
          </RoundedBox>
        ))}

        {/* iOS App Icons - Row 4 */}
        {[-0.9, -0.3, 0.3, 0.9].map((x, i) => (
          <RoundedBox 
            key={`row4-${i}`}
            args={[0.48, 0.48, 0.015]} 
            radius={0.13} 
            smoothness={8} 
            position={[x, -0.3, 0.24]}
          >
            <meshStandardMaterial 
              color={['#FFCC00', '#FF2D55', '#30B0C7', '#34C759'][i]}
              emissive={['#C69500', '#C9003B', '#007A8F', '#248A3D'][i]}
              emissiveIntensity={0.5}
              metalness={0.2}
              roughness={0.3}
            />
          </RoundedBox>
        ))}

        {/* iOS Widget */}
        <RoundedBox args={[2.5, 1.3, 0.015]} radius={0.18} smoothness={8} position={[0, -1.2, 0.24]}>
          <meshStandardMaterial 
            color="#1C1C1E"
            emissive="#2C2C2E"
            emissiveIntensity={0.6}
            metalness={0.1}
            roughness={0.4}
            opacity={0.95}
            transparent
          />
        </RoundedBox>

        {/* iOS Dock Background - Frosted Glass Effect */}
        <RoundedBox args={[2.5, 0.75, 0.015]} radius={0.18} smoothness={8} position={[0, -2.4, 0.24]}>
          <meshPhysicalMaterial 
            color="#1C1C1E"
            opacity={0.6}
            transparent
            metalness={0.05}
            roughness={0.3}
            clearcoat={0.5}
            transmission={0.1}
          />
        </RoundedBox>

        {/* iOS Dock Icons */}
        {[-0.75, -0.25, 0.25, 0.75].map((x, i) => (
          <RoundedBox 
            key={`dock-${i}`}
            args={[0.48, 0.48, 0.015]} 
            radius={0.13} 
            smoothness={8} 
            position={[x, -2.4, 0.25]}
          >
            <meshStandardMaterial 
              color={['#007AFF', '#34C759', '#FF9500', '#FF3B30'][i]}
              emissive={['#0051D5', '#248A3D', '#C66900', '#C4001D'][i]}
              emissiveIntensity={0.5}
              metalness={0.2}
              roughness={0.3}
            />
          </RoundedBox>
        ))}

        {/* iPhone Pro Camera System (Back) - Square Module */}
        <RoundedBox args={[1.3, 1.3, 0.1]} radius={0.25} smoothness={10} position={[-0.7, 2.2, -0.26]}>
          <meshPhysicalMaterial 
            color="#1a1a1a"
            metalness={0.85}
            roughness={0.15}
            clearcoat={0.8}
            clearcoatRoughness={0.2}
          />
        </RoundedBox>

        {/* Main Wide Camera (48MP) */}
        <mesh position={[-0.95, 2.5, -0.32]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 0.08, 32]} />
          <meshStandardMaterial 
            color="#0a0a0a"
            metalness={0.95}
            roughness={0.05}
          />
        </mesh>
        <mesh position={[-0.95, 2.5, -0.35]} rotation={[0, 0, 0]}>
          <circleGeometry args={[0.22, 32]} />
          <meshStandardMaterial 
            color="#1e3a8a"
            emissive="#3b82f6"
            emissiveIntensity={0.25}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Ultra Wide Camera (12MP) */}
        <mesh position={[-0.45, 2.5, -0.32]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 0.08, 32]} />
          <meshStandardMaterial 
            color="#0a0a0a"
            metalness={0.95}
            roughness={0.05}
          />
        </mesh>
        <mesh position={[-0.45, 2.5, -0.35]} rotation={[0, 0, 0]}>
          <circleGeometry args={[0.22, 32]} />
          <meshStandardMaterial 
            color="#1e3a8a"
            emissive="#3b82f6"
            emissiveIntensity={0.25}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Telephoto Camera (12MP 5x) */}
        <mesh position={[-0.95, 1.9, -0.32]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 0.08, 32]} />
          <meshStandardMaterial 
            color="#0a0a0a"
            metalness={0.95}
            roughness={0.05}
          />
        </mesh>
        <mesh position={[-0.95, 1.9, -0.35]} rotation={[0, 0, 0]}>
          <circleGeometry args={[0.22, 32]} />
          <meshStandardMaterial 
            color="#1e3a8a"
            emissive="#3b82f6"
            emissiveIntensity={0.25}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* True Tone Flash */}
        <mesh position={[-0.45, 1.9, -0.32]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 0.06, 32]} />
          <meshStandardMaterial 
            color="#fff8dc"
            emissive="#fbbf24"
            emissiveIntensity={0.4}
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>

        {/* LiDAR Scanner */}
        <mesh position={[-0.7, 1.7, -0.31]} rotation={[0, 0, 0]}>
          <circleGeometry args={[0.1, 32]} />
          <meshStandardMaterial 
            color="#0a0a0a"
            emissive="#10b981"
            emissiveIntensity={0.35}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Home Indicator Bar (iOS) */}
        <RoundedBox args={[1, 0.1, 0.01]} radius={0.05} smoothness={6} position={[0, -2.9, 0.24]}>
          <meshStandardMaterial 
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.2}
            opacity={0.7}
            transparent
          />
        </RoundedBox>

        {/* Action Button (iPhone 15 Pro - Right Side) */}
        <RoundedBox args={[0.08, 0.65, 0.14]} radius={0.03} smoothness={6} position={[1.56, 1.5, 0]}>
          <meshStandardMaterial 
            color="#3d4451"
            metalness={0.95}
            roughness={0.15}
          />
        </RoundedBox>

        {/* Volume Up Button (Left) */}
        <RoundedBox args={[0.08, 0.55, 0.14]} radius={0.03} smoothness={6} position={[-1.56, 1.8, 0]}>
          <meshStandardMaterial 
            color="#3d4451"
            metalness={0.95}
            roughness={0.15}
          />
        </RoundedBox>

        {/* Volume Down Button (Left) */}
        <RoundedBox args={[0.08, 0.55, 0.14]} radius={0.03} smoothness={6} position={[-1.56, 0.9, 0]}>
          <meshStandardMaterial 
            color="#3d4451"
            metalness={0.95}
            roughness={0.15}
          />
        </RoundedBox>

        {/* Ring/Silent Switch (Left Top) */}
        <RoundedBox args={[0.06, 0.18, 0.1]} radius={0.02} smoothness={4} position={[-1.54, 2.5, 0]}>
          <meshStandardMaterial 
            color="#FF3B30"
            metalness={0.7}
            roughness={0.3}
            emissive="#FF3B30"
            emissiveIntensity={0.2}
          />
        </RoundedBox>

        {/* Camera Module (Back) */}
        <RoundedBox args={[1.2, 1.2, 0.08]} radius={0.2} smoothness={6} position={[-0.7, 2, -0.25]}>
          <meshStandardMaterial 
            color="#1a1a1a"
            metalness={0.8}
            roughness={0.2}
          />
        </RoundedBox>

        {/* Main Camera Lens 1 */}
        <mesh position={[-0.9, 2.3, -0.3]}>
          <cylinderGeometry args={[0.25, 0.25, 0.05, 32]} />
          <meshStandardMaterial 
            color="#0a0a0a"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        <mesh position={[-0.9, 2.3, -0.32]}>
          <circleGeometry args={[0.2, 32]} />
          <meshStandardMaterial 
            color="#1e3a8a"
            emissive="#3b82f6"
            emissiveIntensity={0.3}
            metalness={0.8}
          />
        </mesh>

        {/* Main Camera Lens 2 */}
        <mesh position={[-0.5, 2.3, -0.3]}>
          <cylinderGeometry args={[0.25, 0.25, 0.05, 32]} />
          <meshStandardMaterial 
            color="#0a0a0a"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        <mesh position={[-0.5, 2.3, -0.32]}>
          <circleGeometry args={[0.2, 32]} />
          <meshStandardMaterial 
            color="#1e3a8a"
            emissive="#3b82f6"
            emissiveIntensity={0.3}
            metalness={0.8}
          />
        </mesh>

        {/* Ultra Wide Camera Lens */}
        <mesh position={[-0.9, 1.7, -0.3]}>
          <cylinderGeometry args={[0.25, 0.25, 0.05, 32]} />
          <meshStandardMaterial 
            color="#0a0a0a"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        <mesh position={[-0.9, 1.7, -0.32]}>
          <circleGeometry args={[0.2, 32]} />
          <meshStandardMaterial 
            color="#1e3a8a"
            emissive="#3b82f6"
            emissiveIntensity={0.3}
            metalness={0.8}
          />
        </mesh>

        {/* Flash */}
        <mesh position={[-0.5, 1.7, -0.3]}>
          <cylinderGeometry args={[0.15, 0.15, 0.04, 32]} />
          <meshStandardMaterial 
            color="#fff5e1"
            emissive="#bb8a0fff"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* LiDAR Scanner */}
        <mesh position={[-0.7, 1.5, -0.29]}>
          <circleGeometry args={[0.08, 32]} />
          <meshStandardMaterial 
            color="#0a0a0a"
            emissive="#10b981"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>
    </Float>
  );
}

interface Mobile3DProps {
  size?: number;
  autoRotate?: boolean;
}

export function Mobile3D({ size = 400, autoRotate = true }: Mobile3DProps) {
  return (
    <div style={{ width: size, height: size }}>
      <Canvas 
        camera={{ position: [0, 0, 12], fov: 45 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={
          <mesh>
            <boxGeometry args={[3, 6, 0.3]} />
            <meshStandardMaterial color="#3d4451" />
          </mesh>
        }>
          {/* Studio Lighting Setup */}
          <ambientLight intensity={0.3} />
          
          {/* Key Light */}
          <directionalLight 
            position={[5, 8, 5]} 
            intensity={1.2} 
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          
          {/* Fill Light */}
          <directionalLight position={[-5, 3, -5]} intensity={0.4} />
          
          {/* Rim Light */}
          <directionalLight position={[0, -5, -5]} intensity={0.6} color="#3b82f6" />
          
          {/* Accent Lights */}
          <pointLight position={[3, 0, 5]} intensity={0.8} color="#6366f1" />
          <pointLight position={[-3, 0, 5]} intensity={0.8} color="#ec4899" />
          <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.3} penumbra={1} />
          
          {/* Environment for reflections */}
          <Environment preset="studio" />
          
          <RealisticMobilePhone />
          
          <OrbitControls 
            enableZoom={true}
            minDistance={8}
            maxDistance={20}
            autoRotate={autoRotate} 
            autoRotateSpeed={2}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.8}
            enablePan={false}
          />
          
          {/* Reflective Ground */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} receiveShadow>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.5}
              mirror={0.5}
            />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
