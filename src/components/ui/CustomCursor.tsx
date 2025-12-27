import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursorPosition } from '../../hooks/useCursorPosition';

/**
 * Custom animated cursor component
 * Follows mouse movement with smooth spring animation
 */
const CustomCursor = () => {
  const { x, y } = useCursorPosition();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Add hover detection for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.classList.contains('cursor-hover');
      
      setIsHovering(isInteractive);
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: x - 16,
          y: y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-8 h-8 border-2 border-neon-blue rounded-full" />
      </motion.div>

      {/* Cursor trail */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-50"
        animate={{
          x: x - 4,
          y: y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div className="w-2 h-2 bg-neon-purple rounded-full opacity-50" />
      </motion.div>
    </>
  );
};

export default CustomCursor;