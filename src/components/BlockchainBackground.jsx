import React, { useRef, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';

/** hex -> rgb */
function hexToRgb(hex) {
  const raw = hex.replace('#', '');
  const r = parseInt(raw.substring(0, 2), 16);
  const g = parseInt(raw.substring(2, 4), 16);
  const b = parseInt(raw.substring(4, 6), 16);
  return { r, g, b };
}

/**
 * Smooth Blockchain Background — tuned for higher opacity & slower motion
 *
 * Props:
 *  - density: smaller => more particles (default 15000)
 *  - lineDistance: px for connections (default 140)
 *  - intensity: visual strength (0.6 .. 2.5) (default 1.6)
 *  - parallaxFactor: how much canvas shifts with scroll (0..0.25)
 */
const BlockchainBackground = ({
  density = 15000,
  lineDistance = 140,
  intensity = 1.6,
  parallaxFactor = 0.12,
}) => {
  const canvasRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    // clamp intensity
    const I = Math.min(Math.max(Number(intensity) || 1, 0.4), 2.5);
    const P = Math.max(0, Number(parallaxFactor) || 0.12);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let dpr = Math.max(window.devicePixelRatio || 1, 1);
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = [];
    let rafId = null;
    let lastTs = performance.now();

    const bgHex = theme.palette.background.default || '#0a0f17';
    const primaryHex = theme.palette.primary.main || '#00838f';
    const bgRgb = hexToRgb(bgHex);
    const pRgb = hexToRgb(primaryHex);

    // Visual params (opacity a bit higher than before)
    // Node alpha and line alpha scaled by intensity and an extra boost (capped)
    const nodeBaseAlpha = Math.min(0.12 * I * 1.25, 0.55); // was 0.12 * I
    const lineMaxAlpha = Math.min(0.18 * I * 1.2, 0.6);    // was 0.18 * I
    const shadowAlpha = Math.min(0.28 * I, 0.6);
    const shadowBlurBase = Math.round(6 * I);
    const nodeRadiusBase = 0.9 * I;

    // Movement params (slower)
    const BASE_SPEED = 0.28 * (1 + I * 0.08); // previously ~0.4*(1+I*0.15). Reduced.
    const VELOCITY_DAMPING = 0.992; // stronger damping => slower, smoother motion (was 0.985)
    const TIME_SCALE = 0.7; // multiply dt factor to slow integration (was 1.0)

    // track last size to avoid recreation for minor resizes
    let lastWidth = width;
    let lastHeight = height;

    const makeParticle = (i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * BASE_SPEED,
      vy: (Math.random() - 0.5) * BASE_SPEED,
      r: Math.random() * 1.6 * nodeRadiusBase + 0.6 * nodeRadiusBase,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: (Math.random() * 0.4 + 0.12) * (0.6 + I * 0.08), // slower phase speeds
      jitterSeed: Math.random() * 1000,
      ax: 0,
      ay: 0,
    });

    const resize = () => {
      dpr = Math.max(window.devicePixelRatio || 1, 1);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;
      const lastArea = lastWidth * lastHeight;
      const recreate = !particles.length || Math.abs(area - lastArea) / Math.max(area, 1) > 0.25;

      if (recreate) {
        lastWidth = width;
        lastHeight = height;
        const count = Math.max(12, Math.floor((width * height) / density));
        particles = new Array(count).fill(0).map((_, i) => makeParticle(i));
      } else {
        // clamp existing particles within bounds
        for (const p of particles) {
          p.x = Math.max(0, Math.min(width, p.x));
          p.y = Math.max(0, Math.min(height, p.y));
        }
      }
    };

    // small smooth noise
    const smoothNoise = (seed, t) =>
      Math.sin(seed * 0.31 + t * 0.0011) * 0.45 + Math.sin(seed * 0.17 + t * 0.0007) * 0.55;

    const drawBackground = () => {
      ctx.fillStyle = `rgb(${bgRgb.r},${bgRgb.g},${bgRgb.b})`;
      ctx.fillRect(0, 0, width, height);
    };

    const animate = (ts) => {
      const dtRaw = Math.min(40, ts - lastTs || 16);
      const dt = dtRaw * TIME_SCALE; // slowed time integration
      lastTs = ts;

      drawBackground();

      for (let p of particles) {
        // gentle accelerations using smooth noise + sine for organic motion
        const n = smoothNoise(p.jitterSeed, ts);
        const sinComp = Math.sin(p.phase + ts * 0.001 * (p.phaseSpeed * 0.6)); // slower influence
        p.ax = (n * 0.05 + sinComp * 0.01) * (0.6 + I * 0.12);
        p.ay =
          (Math.cos(p.jitterSeed * 0.29 + ts * 0.0008) * 0.045 +
            Math.sin(ts * 0.00045 + p.jitterSeed) * 0.015) *
          (0.6 + I * 0.12);

        // velocity integrate with stronger damping
        p.vx = p.vx * VELOCITY_DAMPING + p.ax * (dt / 16.6);
        p.vy = p.vy * VELOCITY_DAMPING + p.ay * (dt / 16.6);

        p.x += p.vx * (dt / 16.6);
        p.y += p.vy * (dt / 16.6);

        // wrap-around edges (no bounce)
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // pulse radius slightly (slower)
        p.phase += (p.phaseSpeed * dt) / 1400;
        const pulse = 1 + Math.sin(p.phase) * 0.09 * I;
        const rr = Math.max(0.4, p.r * pulse);

        // draw node with soft glow
        ctx.beginPath();
        ctx.shadowBlur = shadowBlurBase;
        ctx.shadowColor = `rgba(${pRgb.r},${pRgb.g},${pRgb.b},${shadowAlpha})`;
        ctx.fillStyle = `rgba(${pRgb.r},${pRgb.g},${pRgb.b},${nodeBaseAlpha})`;
        ctx.arc(p.x, p.y, rr, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // draw connections with subtle per-pair noise
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < lineDistance) {
            const baseAlpha = (1 - dist / lineDistance) * lineMaxAlpha;
            const pairNoise = 0.85 + 0.35 * Math.sin((a.jitterSeed + b.jitterSeed) * 0.11 + (lastTs * 0.0006));
            const alpha = Math.min(1, baseAlpha * pairNoise);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${pRgb.r},${pRgb.g},${pRgb.b},${alpha})`;
            ctx.lineWidth = 0.45;
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    // Parallax handling (scroll-driven transform)
    let targetTranslateY = 0;
    let appliedTranslateY = 0;
    const onScroll = () => {
      const sy = window.scrollY || 0;
      targetTranslateY = -sy * P;
    };
    const parallaxLoop = () => {
      appliedTranslateY += (targetTranslateY - appliedTranslateY) * 0.12;
      if (canvas) canvas.style.transform = `translate3d(0, ${appliedTranslateY}px, 0)`;
      requestAnimationFrame(parallaxLoop);
    };

    // init
    resize();
    rafId = requestAnimationFrame(animate);
    requestAnimationFrame(parallaxLoop);
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [density, lineDistance, intensity, parallaxFactor, theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
        transform: 'translate3d(0,0,0)',
        willChange: 'transform',
      }}
      aria-hidden
    />
  );
};

export default BlockchainBackground;