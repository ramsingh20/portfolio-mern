import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const GalaxyBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars
    const generatedStars = Array.from({ length: 100 }, () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {/* Main galaxy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950 to-black"></div>

      {/* Animated galaxy glow effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-radial"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
        }}
      ></motion.div>

      {/* Twinkling stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
          }}
        ></motion.div>
      ))}

      {/* Floating nebula clouds effect */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, 30, -30, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{
          x: [0, -40, 40, 0],
          y: [0, -40, 40, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"
      ></motion.div>
    </div>
  );
};
