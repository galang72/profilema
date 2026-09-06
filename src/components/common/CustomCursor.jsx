import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailerPos, setTrailerPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device has fine pointer (desktop mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsTouchDevice(!mediaQuery.matches);

    const handlePointerChange = (e) => {
      setIsTouchDevice(!e.matches);
    };
    mediaQuery.addEventListener('change', handlePointerChange);

    if (!mediaQuery.matches) return;

    let targetX = -100;
    let targetY = -100;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });

      // Check hover on clickable elements
      const target = e.target;
      const clickable = target.closest('button, a, input, select, textarea, [role="button"], .interactive-hover');
      setIsHovered(!!clickable);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Smooth animation loop for trailing ring
    let animationFrameId;
    let currentX = -100;
    let currentY = -100;

    const animateTrailer = () => {
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;
      setTrailerPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animateTrailer);
    };

    animationFrameId = requestAnimationFrame(animateTrailer);

    return () => {
      mediaQuery.removeEventListener('change', handlePointerChange);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Follower Ring */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-400/70 transition-[width,height,background-color] duration-200 ease-out ${
          isHovered
            ? 'w-12 h-12 bg-gold-400/15 border-gold-300 scale-110 shadow-glow-gold'
            : isClicking
            ? 'w-6 h-6 bg-emerald-500/30 border-emerald-400'
            : 'w-8 h-8 bg-transparent'
        }`}
        style={{
          left: `${trailerPos.x}px`,
          top: `${trailerPos.y}px`,
        }}
      />
      {/* Inner Dot */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-amber-300 to-emerald-400 transition-transform duration-100 ${
          isHovered ? 'scale-150' : isClicking ? 'scale-75' : 'scale-100'
        } w-2 h-2`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />
    </div>
  );
};
