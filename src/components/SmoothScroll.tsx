import { useEffect } from 'react';

export const SmoothScroll = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const element = document.querySelector(href);
          
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
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    // Add smooth scroll CSS
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      @media (prefers-reduced-motion: no-preference) {
        html {
          scroll-behavior: smooth;
        }
        
        * {
          scroll-behavior: smooth;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      document.head.removeChild(style);
    };
  }, []);

  return null;
};
