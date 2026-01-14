import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  const logoText = "Rabiul";
  
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
        </div>

        {/* Logo container */}
        <div className="relative z-10 flex flex-col items-center gap-12">
          {/* Animated logo */}
          <div className="relative">
            {/* Rotating rings */}
            <motion.div
              className="absolute -inset-8 border-2 border-primary/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-16 border border-primary/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-24 border border-primary/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Glowing dots on rings */}
            <motion.div
              className="absolute -inset-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary))]" />
            </motion.div>
            <motion.div
              className="absolute -inset-16"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_hsl(var(--accent))]" />
            </motion.div>

            {/* Logo text */}
            <motion.div
              className="text-5xl md:text-7xl font-bold relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex overflow-hidden">
                {logoText.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    className="text-gradient inline-block"
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.08,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              
              {/* Glowing underline */}
              <motion.div
                className="h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full mt-2"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ transformOrigin: 'center' }}
              />
            </motion.div>
          </div>

          {/* Progress section */}
          <div className="w-64 md:w-80 space-y-4">
            {/* Progress bar */}
            <div className="relative">
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </div>
              
              {/* Glowing dot at progress end */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_hsl(var(--primary))]"
                style={{ left: `${Math.min(progress, 100)}%`, marginLeft: '-6px' }}
              />
            </div>

            {/* Progress text */}
            <motion.div
              className="flex justify-between items-center text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-muted-foreground">Loading</span>
              <motion.span
                className="text-primary font-mono font-semibold"
                key={Math.floor(progress)}
              >
                {Math.min(Math.floor(progress), 100)}%
              </motion.span>
            </motion.div>

            {/* Loading dots */}
            <div className="flex justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary/50 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
