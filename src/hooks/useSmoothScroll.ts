import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      
      if (link && link.getAttribute('href') !== '#') {
        e.preventDefault();
        const href = link.getAttribute('href');
        const element = href ? document.querySelector(href) : null;
        
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Reveal elements on scroll
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.reveal-on-scroll');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('is-revealed');
        }
      });
    };

    // Throttle scroll events for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          revealOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    revealOnScroll();

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
