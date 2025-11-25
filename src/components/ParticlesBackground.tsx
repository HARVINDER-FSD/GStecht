import { useEffect } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

export const ParticlesBackground = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 600,
            },
          },
          color: {
            value: ['#3b82f6', '#6366f1', '#8b5cf6'],
          },
          shape: {
            type: ['circle', 'triangle', 'edge'],
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: '#3b82f6',
            opacity: 0.7,
            width: 2,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'bounce',
            bounce: false,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return <div id="particles-js" className="absolute inset-0 w-full h-full"></div>;
};
