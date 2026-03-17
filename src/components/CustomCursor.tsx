import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMouse } from '../hooks/useMouse';

export const CustomCursor = () => {
  const { x, y } = useMouse();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: x - 3.5,
          y: y - 3.5,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className={`cursor-ring ${isHovering ? 'cursor--hover' : ''}`}
        animate={{
          x: x - 17,
          y: y - 17,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.8,
        }}
      />
    </>
  );
};
