
import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const useInteractions = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Add scroll-based classes for Nebula theme
      if (theme === 'nebula') {
        const elements = document.querySelectorAll('.scroll-color-shift');
        elements.forEach((element) => {
          element.classList.remove('scrolled-25', 'scrolled-50', 'scrolled-75', 'scrolled-100');
          
          if (progress >= 75) {
            element.classList.add('scrolled-100');
          } else if (progress >= 50) {
            element.classList.add('scrolled-75');
          } else if (progress >= 25) {
            element.classList.add('scrolled-50');
          } else if (progress >= 10) {
            element.classList.add('scrolled-25');
          }
        });
      }

      // Reveal elements on scroll
      const revealElements = document.querySelectorAll('.scroll-reveal');
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    const handleClick = (e: MouseEvent) => {
      setClickPosition({ x: e.clientX, y: e.clientY });
      
      // Create ripple effect for Nebula theme
      if (theme === 'nebula') {
        const ripple = document.createElement('div');
        ripple.className = 'fixed pointer-events-none z-50 rounded-full animate-ping';
        ripple.style.left = `${e.clientX - 10}px`;
        ripple.style.top = `${e.clientY - 10}px`;
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'radial-gradient(circle, var(--neon-primary) 0%, transparent 70%)';
        ripple.style.animationDuration = '0.6s';
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
          document.body.removeChild(ripple);
        }, 600);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, [theme]);

  return { scrollProgress, clickPosition };
};
