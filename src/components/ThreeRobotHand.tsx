import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function ThreeRobotHand() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    model: THREE.Object3D | null;
  } | null>(null);

  const services = ['SEO', 'WEBSITE', 'APP'];
  
  // Calculate current service based on rotation
  const rotation = scrollProgress * Math.PI * 6; // 3 full rotations
  const normalizedRotation = ((rotation % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  const currentServiceIndex = Math.round((normalizedRotation / (Math.PI * 2)) * 3) % 3;
  const currentService = services[currentServiceIndex];

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf9fafb);

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x4f46e5, 0.4);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);

    // Create placeholder geometry (will be replaced with actual model)
    const geometry = new THREE.BoxGeometry(1, 2, 0.5);
    const material = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      metalness: 0.7,
      roughness: 0.3,
    });
    const placeholder = new THREE.Mesh(geometry, material);
    scene.add(placeholder);

    sceneRef.current = {
      scene,
      camera,
      renderer,
      model: placeholder,
    };

    // Try to load actual 3D model (if exists)
    const loader = new GLTFLoader();
    loader.load(
      '/assets/robot-hand.glb', // You'll need to add this file
      (gltf) => {
        scene.remove(placeholder);
        const model = gltf.scene;
        model.scale.set(2, 2, 2);
        scene.add(model);
        if (sceneRef.current) {
          sceneRef.current.model = model;
        }
      },
      undefined,
      (error) => {
        console.log('3D model not found, using placeholder. Add robot-hand.glb to /public/assets/');
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (sceneRef.current?.model) {
        sceneRef.current.model.rotation.y = rotation;
        sceneRef.current.model.rotation.x = Math.sin(rotation) * 0.1;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  // Update rotation based on scroll
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

  return (
    <div className="w-full h-[500px] md:h-[600px] flex flex-col items-center justify-center">
      {/* Service Text Above Hand */}
      <div className="mb-8 text-center">
        <h3 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
          {currentService}
        </h3>
      </div>

      {/* 3D Robot Hand Container */}
      <div 
        ref={containerRef} 
        className="w-full h-[350px] md:h-[450px] rounded-2xl shadow-2xl"
      />
      
      <p className="mt-4 text-sm text-gray-500 text-center">
        Add robot-hand.glb to /public/assets/ for custom 3D model
      </p>
    </div>
  );
}
