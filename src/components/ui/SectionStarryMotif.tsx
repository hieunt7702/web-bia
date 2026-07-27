"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CONSTELLATIONS = [
  <g key="ursa-major" stroke="currentColor" strokeWidth="0.5" opacity="0.4">
    <line x1="20%" y1="30%" x2="35%" y2="50%" />
    <line x1="35%" y1="50%" x2="25%" y2="70%" />
    <line x1="25%" y1="70%" x2="50%" y2="80%" />
    <line x1="50%" y1="80%" x2="60%" y2="60%" />
    <line x1="60%" y1="60%" x2="35%" y2="50%" />
    <line x1="60%" y1="60%" x2="80%" y2="55%" />
    <circle cx="20%" cy="30%" r="2" fill="currentColor" opacity="0.8" />
    <circle cx="35%" cy="50%" r="2.5" fill="#e4c26a" opacity="0.6" />
    <circle cx="25%" cy="70%" r="2" fill="currentColor" opacity="0.7" />
    <circle cx="50%" cy="80%" r="2" fill="#e4c26a" opacity="0.5" />
    <circle cx="60%" cy="60%" r="3" fill="currentColor" opacity="0.9" />
    <circle cx="80%" cy="55%" r="2" fill="currentColor" opacity="0.6" />
  </g>,
  <g key="cassiopeia" stroke="currentColor" strokeWidth="0.5" opacity="0.4">
    <line x1="15%" y1="40%" x2="30%" y2="20%" />
    <line x1="30%" y1="20%" x2="50%" y2="45%" />
    <line x1="50%" y1="45%" x2="70%" y2="25%" />
    <line x1="70%" y1="25%" x2="85%" y2="50%" />
    <circle cx="15%" cy="40%" r="2" fill="currentColor" opacity="0.7" />
    <circle cx="30%" cy="20%" r="2.5" fill="#e4c26a" opacity="0.8" />
    <circle cx="50%" cy="45%" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="70%" cy="25%" r="3" fill="#e4c26a" opacity="0.9" />
    <circle cx="85%" cy="50%" r="2" fill="currentColor" opacity="0.5" />
  </g>
];

export default function SectionStarryMotif({
  position = 'full',
  particleCount = 15,
}: {
  position?: 'full' | 'top-left' | 'top-right' | 'random-corner';
  particleCount?: number;
}) {
  const [mounted, setMounted] = useState(false);
  const [constellationIndex, setConstellationIndex] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    setConstellationIndex(Math.floor(Math.random() * CONSTELLATIONS.length));

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const particles = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      parallaxZ: Math.random() * 60 + 10,
      opacity: Math.random() * 0.6 + 0.2,
    }));
  }, [mounted, particleCount]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{ '--mx': smoothX, '--my': smoothY } as any}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-90 text-[#D3AE3E]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(211,174,62,0.12)_0%,transparent_60%)] opacity-80" />

      {/* Layer 1: Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-[#D3AE3E]"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              boxShadow: '0 0 8px #D3AE3E',
              transform: `translate(calc(var(--mx) * ${p.parallaxZ}px), calc(var(--my) * ${p.parallaxZ}px))`
            }}
          />
        ))}
      </div>

      {/* Layer 2: Constellation */}
      <div className="absolute inset-[-5%] w-[110%] h-[110%] opacity-40">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {CONSTELLATIONS[constellationIndex]}
        </svg>
      </div>
    </motion.div>
  );
}
