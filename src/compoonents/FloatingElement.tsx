import { motion } from 'framer-motion';

interface FloatingElementProps {
  className?: string;
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
}

export const FloatingElement = ({
  className = '',
  children,
  delay = 0,
  duration = 4,
  distance = 20,
}: FloatingElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-distance, distance, -distance],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export const RotatingElement = ({
  className = '',
  children,
  duration = 20,
}: {
  className?: string;
  children?: React.ReactNode;
  duration?: number;
}) => {
  return (
    <motion.div
      className={className}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.div>
  );
};

export const PulseElement = ({
  className = '',
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export const ShimmerEffect = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent ${className}`}
      animate={{ x: ['0%', '200%'] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
        ease: 'easeInOut',
      }}
    />
  );
};
