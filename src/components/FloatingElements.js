import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: linear-gradient(45deg, #d4af37, #f4d03f);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.8);
`;

const Sparkle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #d4af37;
  transform: rotate(45deg);
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: #d4af37;
  }
  
  &::before {
    transform: rotate(45deg);
  }
  
  &::after {
    transform: rotate(-45deg);
  }
`;

const FloatingOrb = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  border: 1px solid rgba(212, 175, 55, 0.2);
`;

const FloatingElements = () => {
  const [particles, setParticles] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    // Generate particles
    const particleArray = [];
    for (let i = 0; i < 50; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      });
    }
    setParticles(particleArray);

    // Generate sparkles
    const sparkleArray = [];
    for (let i = 0; i < 20; i++) {
      sparkleArray.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 10,
      });
    }
    setSparkles(sparkleArray);

    // Generate orbs
    const orbArray = [];
    for (let i = 0; i < 8; i++) {
      orbArray.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: Math.random() * 30 + 20,
        delay: Math.random() * 5,
      });
    }
    setOrbs(orbArray);
  }, []);

  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0],
      x: [0, Math.random() * 200 - 100, Math.random() * 400 - 200],
      y: [0, Math.random() * 200 - 100, Math.random() * 400 - 200],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  };

  const sparkleVariants = {
    hidden: { opacity: 0, scale: 0, rotate: 0 },
    visible: {
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1.2, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  };

  const orbVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 0.6, 0.6, 0],
      scale: [0, 1, 1.2, 0],
      x: [0, Math.random() * 100 - 50, Math.random() * 150 - 75],
      y: [0, Math.random() * 100 - 50, Math.random() * 150 - 75],
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  };

  return (
    <FloatingContainer>
      <AnimatePresence>
        {particles.map((particle) => (
          <Particle
            key={`particle-${particle.id}`}
            variants={particleVariants}
            initial="hidden"
            animate="visible"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <Sparkle
            key={`sparkle-${sparkle.id}`}
            variants={sparkleVariants}
            initial="hidden"
            animate="visible"
            style={{
              left: sparkle.x,
              top: sparkle.y,
              animationDelay: `${sparkle.delay}s`,
            }}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {orbs.map((orb) => (
          <FloatingOrb
            key={`orb-${orb.id}`}
            variants={orbVariants}
            initial="hidden"
            animate="visible"
            style={{
              left: orb.x,
              top: orb.y,
              animationDelay: `${orb.delay}s`,
            }}
          />
        ))}
      </AnimatePresence>
    </FloatingContainer>
  );
};

export default FloatingElements;
