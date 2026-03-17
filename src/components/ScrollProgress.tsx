import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

export const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: scrollProgress / 100 }}
    />
  );
};
