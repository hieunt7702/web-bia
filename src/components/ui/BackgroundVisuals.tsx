"use client";

import React, { useMemo, useState, useEffect } from 'react';

interface BackgroundVisualsProps {
  mouseX?: number;
  mouseY?: number;
}

export default function BackgroundVisuals({ mouseX = 0, mouseY = 0 }: BackgroundVisualsProps) {
  const [mounted, setMounted] = useState(false);
  const [particleCount, setParticleCount] = useState(25);

  useEffect(() => {
    setMounted(true);
    const updateCount = () => {
      if (window.innerWidth >= 1024) setParticleCount(45);
      else setParticleCount(20);
    };
    updateCount();
    window.addEventListener('resize', updateCount, { passive: true });
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const particles = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 1.5,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      parallaxZ: Math.random() * 80 + 20,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, [mounted, particleCount]);

  return (
    <div className="absolute inset-0 pointer-events-none z-[10] overflow-hidden opacity-90 transition-opacity duration-700">
      {/* Light Gold Ambient Radial Glow */}
      <div 
        className="absolute inset-[-20%] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(228,194,106,0.12) 0%, rgba(185,138,45,0.03) 40%, transparent 60%)',
          filter: 'blur(90px)',
          transform: `translate(${mouseX * 10}px, ${mouseY * 10}px)`
        }}
      />

      {/* Multi-depth Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <div 
            key={p.id}
            className="absolute rounded-full bg-[#e4c26a]"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              boxShadow: '0 0 10px #e4c26a',
              transform: `translate(${mouseX * p.parallaxZ}px, ${mouseY * p.parallaxZ}px)`
            }}
          />
        ))}
      </div>

      {/* Architectural Gold Compass Node Top-Right */}
      <div 
        className="absolute top-[8%] right-[5%] w-[180px] h-[180px] opacity-40 hidden lg:block" 
        style={{ 
          transform: `translate(${mouseX * 15}px, ${mouseY * 15}px)`
        }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="100" cy="100" r="80" stroke="#e4c26a" strokeWidth="0.5" strokeDasharray="2 6" />
          <circle cx="100" cy="100" r="60" stroke="#e4c26a" strokeWidth="0.5" opacity="0.7" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="#e4c26a" strokeWidth="0.5" opacity="0.6" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="#e4c26a" strokeWidth="0.5" opacity="0.6" />
          <circle cx="100" cy="100" r="2.5" fill="#e4c26a" />
        </svg>
      </div>
    </div>
  );
}
