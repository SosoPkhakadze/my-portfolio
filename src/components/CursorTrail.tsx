import React, { useState, useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  id: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

const CursorTrail: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const idCounterRef = useRef(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    let lastEmit = Date.now();
    const emitInterval = 30; // Emit particles every 30ms

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      setMousePos({ x: e.clientX, y: e.clientY });

      // Calculate velocity for direction
      const vx = e.clientX - lastPos.x;
      const vy = e.clientY - lastPos.y;
      const speed = Math.sqrt(vx * vx + vy * vy);

      setLastPos({ x: e.clientX, y: e.clientY });

      // Emit more particles when moving fast
      if (now - lastEmit > emitInterval && speed > 2) {
        const particleCount = Math.min(Math.floor(speed / 5), 5);
        
        for (let i = 0; i < particleCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const velocity = 0.5 + Math.random() * 1.5;
          const hue = 200 + Math.random() * 100; // Blue to purple range

          const newParticle: Particle = {
            x: e.clientX + (Math.random() - 0.5) * 20,
            y: e.clientY + (Math.random() - 0.5) * 20,
            id: idCounterRef.current++,
            vx: Math.cos(angle) * velocity - vx * 0.05,
            vy: Math.sin(angle) * velocity - vy * 0.05,
            life: 1,
            maxLife: 40 + Math.random() * 40,
            size: 3 + Math.random() * 8,
            hue: hue
          };

          setParticles(prev => [...prev, newParticle].slice(-150));
        }
        lastEmit = now;
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      // Burst effect on click
      const burstCount = 20;
      const newParticles: Particle[] = [];
      
      for (let i = 0; i < burstCount; i++) {
        const angle = (Math.PI * 2 * i) / burstCount;
        const velocity = 2 + Math.random() * 3;
        
        newParticles.push({
          x: mousePos.x,
          y: mousePos.y,
          id: idCounterRef.current++,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          maxLife: 60 + Math.random() * 40,
          size: 4 + Math.random() * 6,
          hue: 180 + Math.random() * 120
        });
      }
      
      setParticles(prev => [...prev, ...newParticles].slice(-150));
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation loop for particle physics
    const animate = () => {
      setParticles(prev => {
        return prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vx: p.vx * 0.98, // Friction
            vy: p.vy * 0.98,
            life: p.life - 1
          }))
          .filter(p => p.life > 0);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [lastPos, mousePos]);

  return (
    <>
      {/* Particle system */}
      {particles.map((particle) => {
        const opacity = particle.life / particle.maxLife;
        const scale = 0.5 + opacity * 0.5;

        return (
          <div
            key={particle.id}
            style={{
              position: 'fixed',
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: '50%',
              background: `hsl(${particle.hue}, 80%, 60%)`,
              pointerEvents: 'none',
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: opacity * 0.8,
              zIndex: 9999,
              boxShadow: `0 0 ${particle.size * 2}px hsl(${particle.hue}, 80%, 60%)`,
              filter: 'blur(0.5px)',
            }}
          />
        );
      })}

      {/* Main cursor glow */}
      <div
        style={{
          position: 'fixed',
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2), transparent 70%)',
          pointerEvents: 'none',
          transform: `translate(-50%, -50%) scale(${isClicking ? 1.5 : 1})`,
          zIndex: 9998,
          transition: 'transform 0.1s ease-out',
          filter: 'blur(10px)',
        }}
      />

      {/* Custom cursor dot */}
      <div
        style={{
          position: 'fixed',
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: isClicking ? '16px' : '12px',
          height: isClicking ? '16px' : '12px',
          borderRadius: '50%',
          background: 'rgba(59, 130, 246, 0.9)',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 10001,
          transition: 'width 0.1s ease-out, height 0.1s ease-out',
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
        }}
      />

      {/* Outer ring */}
      <div
        style={{
          position: 'fixed',
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: isClicking ? '50px' : '40px',
          height: isClicking ? '50px' : '40px',
          borderRadius: '50%',
          border: '2px solid rgba(59, 130, 246, 0.4)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 10000,
          transition: 'width 0.2s ease-out, height 0.2s ease-out, opacity 0.2s ease-out',
          opacity: isClicking ? 1 : 0.6,
        }}
      />

      <style>{`
        /* Hide default cursor */
        * {
          cursor: none !important;
        }

        /* Hide custom cursor on touch devices */
        @media (hover: none) and (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default CursorTrail;