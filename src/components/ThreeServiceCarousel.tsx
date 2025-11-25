import { useEffect, useState } from 'react';

export function ThreeServiceCarousel() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const services = ['SEO', 'WEBSITE', 'APP'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const progress = scrollY / (documentHeight - windowHeight);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rotation = scrollProgress * 360 * 3; // 3 full rotations for 3 services
  
  // Calculate which service is currently facing front
  const normalizedRotation = ((rotation % 360) + 360) % 360;
  const currentServiceIndex = Math.round(normalizedRotation / 120) % 3;
  const currentService = services[currentServiceIndex];

  return (
    <div className="w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center">
      {/* Service Text Above Hand */}
      <div className="mb-8 text-center">
        <h3 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
          {currentService}
        </h3>
      </div>

      {/* Rotating Robot Hand with 3D Effect */}
      <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center perspective-1000">
        <div 
          className="preserve-3d transition-transform duration-300"
          style={{
            transform: `rotateY(${rotation}deg) rotateX(${Math.sin(rotation * Math.PI / 180) * 10}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          <img 
            src="/assets/OIP.webp" 
            alt="Robot Hand"
            className="w-[300px] md:w-[400px] h-auto object-contain"
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(37, 99, 235, 0.5)) drop-shadow(0 0 20px rgba(147, 51, 234, 0.3))',
              transform: 'translateZ(50px)'
            }}
          />
          {/* 3D Shadow/Depth Layer */}
          <img 
            src="/assets/OIP.webp" 
            alt=""
            className="absolute top-0 left-0 w-[300px] md:w-[400px] h-auto object-contain opacity-20"
            style={{
              transform: 'translateZ(-20px)',
              filter: 'blur(10px)'
            }}
          />
        </div>
      </div>
    </div>
  );
}
