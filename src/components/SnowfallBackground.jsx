// src/components/SnowfallBackground.jsx
import React, { useRef, useEffect } from 'react';

/**
 * Subtle, more natural snowfall background.
 *
 * Props:
 *  - enabled: boolean (if false, renders nothing)
 *  - density: larger => fewer flakes (default 22000)
 */
const SnowfallBackground = ({ enabled = true, density = 22000 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.max(window.devicePixelRatio || 1, 1);

    let flakes = [];
    let rafId = null;
    let lastTime = performance.now();

    const setupCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.max(window.devicePixelRatio || 1, 1);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;
      // bigger density -> fewer flakes
      const count = Math.max(60, Math.floor(area / density));

      flakes = [];
      for (let i = 0; i < count; i++) {
        flakes.push(makeFlake());
      }
    };

    const makeFlake = () => {
      const depth = Math.random(); // 0..1
      const r = 0.9 + (1 - depth) * 2.1 + Math.random() * 0.4;
      const baseSpeedY = 12 + (1 - depth) * 28; // px per second (we'll use dt)
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r,
        depth,
        // base vertical speed in px/sec
        speedY: baseSpeedY,
        // small horizontal drift in px/sec
        baseDrift: (Math.random() * 20 - 10) * (0.4 + (1 - depth)),
        // used for noise-like movement
        noiseSeed: Math.random() * 1000,
        // base opacity
        opacity: 0.45 + (1 - depth) * 0.4,
      };
    };

    // simple 2-sine "noise" generator (not perfect noise, but not obviously looping)
    const noise2 = (seed, t) => {
      return (
        Math.sin(seed * 0.73 + t * 0.0009) * 0.6 +
        Math.sin(seed * 1.37 + t * 0.0005) * 0.4
      );
    };

    const step = (time) => {
      const dtMs = Math.min(50, time - lastTime || 16);
      const dt = dtMs / 1000; // seconds
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      for (let flake of flakes) {
        // horizontal jitter using noise-like function
        const n = noise2(flake.noiseSeed, time);
        const driftX = flake.baseDrift + n * 20 * (0.3 + (1 - flake.depth));

        flake.x += driftX * dt;
        flake.y += flake.speedY * dt;

        // wrap
        if (flake.y > height + 10) {
          // respawn at top with slightly new params to break patterns
          const depth = Math.random();
          const r = 0.9 + (1 - depth) * 2.1 + Math.random() * 0.4;
          const baseSpeedY = 12 + (1 - depth) * 28;

          flake.y = -10;
          flake.x = Math.random() * width;
          flake.depth = depth;
          flake.r = r;
          flake.speedY = baseSpeedY;
          flake.baseDrift = (Math.random() * 20 - 10) * (0.4 + (1 - depth));
          flake.noiseSeed = Math.random() * 1000;
          flake.opacity = 0.45 + (1 - depth) * 0.4;
        }

        if (flake.x > width + 15) flake.x = -15;
        if (flake.x < -15) flake.x = width + 15;

        // small, non-synchronized twinkle
        const twinkle =
          0.85 +
          Math.sin(time * 0.0013 + flake.noiseSeed * 0.6) * 0.15 +
          Math.sin(time * 0.0007 + flake.noiseSeed * 1.3) * 0.05;
        const alpha = Math.max(
          0,
          Math.min(1, flake.opacity * twinkle)
        );

        ctx.save();
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
        ctx.shadowBlur = flake.r * 1.3;
        ctx.shadowColor = `rgba(255,255,255,${alpha})`;
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
        ctx.restore();
      }

      rafId = requestAnimationFrame(step);
    };

    setupCanvas();
    rafId = requestAnimationFrame(step);

    window.addEventListener('resize', setupCanvas, { passive: true });

    return () => {
      window.removeEventListener('resize', setupCanvas);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [enabled, density]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1, // under your content (zIndex: 2), above blockchain (0)
        pointerEvents: 'none',
        display: 'block',
      }}
      aria-hidden
    />
  );
};

export default SnowfallBackground;