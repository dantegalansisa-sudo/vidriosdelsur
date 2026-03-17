import { motion } from 'framer-motion';
import type { ReactNode, CSSProperties } from 'react';

interface RevealTextProps {
  children: ReactNode;
  tag?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

export const RevealText = ({
  children,
  tag = 'div',
  className = '',
  delay = 0,
  style = {}
}: RevealTextProps) => {
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  const content = words.map((word, i) => (
    <span
      key={i}
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        marginRight: i < words.length - 1 ? '0.3em' : '0',
      }}
    >
      <motion.span
        style={{ display: 'inline-block' }}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: delay + i * 0.05,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {word}
      </motion.span>
    </span>
  ));

  // Map tag to motion component
  switch (tag) {
    case 'h1':
      return <motion.h1 className={className} style={style}>{content}</motion.h1>;
    case 'h2':
      return <motion.h2 className={className} style={style}>{content}</motion.h2>;
    case 'h3':
      return <motion.h3 className={className} style={style}>{content}</motion.h3>;
    case 'p':
      return <motion.p className={className} style={style}>{content}</motion.p>;
    default:
      return <motion.div className={className} style={style}>{content}</motion.div>;
  }
};
