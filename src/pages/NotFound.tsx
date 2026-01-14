import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Home, ArrowLeft, RefreshCw, Rocket } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isExploding, setIsExploding] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const funnyMessages = [
    "Oops! This page went on vacation 🏖️",
    "404: Page playing hide and seek 🙈",
    "Houston, we have a problem 🚀",
    "This page is in another castle 🏰",
    "Error 404: Coffee break ☕",
  ];

  const [currentMessage] = useState(
    funnyMessages[Math.floor(Math.random() * funnyMessages.length)]
  );

  const floatingElements = [
    { emoji: "🌟", delay: 0, duration: 3 },
    { emoji: "🚀", delay: 0.5, duration: 4 },
    { emoji: "🌙", delay: 1, duration: 3.5 },
    { emoji: "⭐", delay: 1.5, duration: 2.5 },
    { emoji: "🪐", delay: 2, duration: 4.5 },
    { emoji: "✨", delay: 0.3, duration: 3 },
    { emoji: "🌠", delay: 0.8, duration: 3.8 },
    { emoji: "💫", delay: 1.2, duration: 2.8 },
  ];

  const handleExplode = () => {
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 1000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/10">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Emojis */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl pointer-events-none"
          style={{
            left: `${10 + (index * 12)}%`,
            top: `${15 + (index * 8) % 60}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {element.emoji}
        </motion.div>
      ))}

      {/* Glowing Orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)), transparent)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* 3D Tilting 404 */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="perspective-1000"
        >
          <motion.div
            className="relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
          >
            {/* Glitch Effect 404 */}
            <div className="relative">
              <motion.h1
                className="text-[12rem] md:text-[16rem] font-black leading-none select-none"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.6), hsl(var(--accent)))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 80px hsl(var(--primary) / 0.5)",
                }}
                animate={{
                  textShadow: [
                    "0 0 80px hsl(var(--primary) / 0.5)",
                    "0 0 120px hsl(var(--primary) / 0.8)",
                    "0 0 80px hsl(var(--primary) / 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                404
              </motion.h1>

              {/* Glitch Layers */}
              <motion.h1
                className="absolute inset-0 text-[12rem] md:text-[16rem] font-black leading-none select-none opacity-50"
                style={{
                  color: "hsl(var(--destructive))",
                  clipPath: "inset(0 0 50% 0)",
                }}
                animate={{
                  x: [-2, 2, -2],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                404
              </motion.h1>

              <motion.h1
                className="absolute inset-0 text-[12rem] md:text-[16rem] font-black leading-none select-none opacity-50"
                style={{
                  color: "hsl(var(--accent))",
                  clipPath: "inset(50% 0 0 0)",
                }}
                animate={{
                  x: [2, -2, 2],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 0.15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                404
              </motion.h1>
            </div>
          </motion.div>
        </motion.div>

        {/* Funny Message */}
        <motion.p
          className="mt-4 text-2xl md:text-3xl font-medium text-foreground/80 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {currentMessage}
        </motion.p>

        {/* Sub Message */}
        <motion.p
          className="mt-2 text-muted-foreground text-center max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          The page you're looking for doesn't exist or has been moved to a parallel universe.
        </motion.p>

        {/* Interactive Astronaut */}
        <motion.div
          className="mt-8 cursor-pointer"
          onClick={handleExplode}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="text-8xl"
            animate={
              isExploding
                ? {
                    rotate: [0, 720],
                    scale: [1, 1.5, 0],
                    opacity: [1, 1, 0],
                  }
                : {
                    y: [0, -15, 0],
                    rotate: [-5, 5, -5],
                  }
            }
            transition={
              isExploding
                ? { duration: 0.5 }
                : {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          >
            👨‍🚀
          </motion.div>
          {!isExploding && (
            <motion.p
              className="text-xs text-muted-foreground text-center mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Click me! 🚀
            </motion.p>
          )}
        </motion.div>

        {/* Explosion Particles */}
        {isExploding && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl"
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: (Math.random() - 0.5) * 400,
                  y: (Math.random() - 0.5) * 400,
                  rotate: Math.random() * 720,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                {["⭐", "✨", "💫", "🌟", "🔥", "💥"][Math.floor(Math.random() * 6)]}
              </motion.div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mt-10 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/">
            <motion.button
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Go Home
            </motion.button>
          </Link>

          <motion.button
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background/50 backdrop-blur-sm font-semibold"
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </motion.button>

          <motion.button
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background/50 backdrop-blur-sm font-semibold"
            onClick={() => window.location.reload()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </motion.button>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          className="mt-12 p-6 rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm max-w-md text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 text-primary mb-2"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Rocket className="w-5 h-5" />
            <span className="font-semibold">Fun Fact</span>
          </motion.div>
          <p className="text-sm text-muted-foreground">
            The HTTP 404 status code was named after Room 404 at CERN, where the first web servers were located! 🏛️
          </p>
        </motion.div>

        {/* Animated Border */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      </div>

      {/* Corner Decorations */}
      <motion.div
        className="absolute top-4 left-4 text-6xl"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity },
        }}
      >
        🌍
      </motion.div>

      <motion.div
        className="absolute bottom-4 right-4 text-6xl"
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity },
        }}
      >
        🛸
      </motion.div>
    </div>
  );
};

export default NotFound;
