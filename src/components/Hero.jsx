import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
  useTheme,
  Link as MuiLink,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const MagneticButton = ({ children, sx, ...props }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const wrapperRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();

    const relativeX =
      (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relativeY =
      (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    const strength = 6;
    const x = relativeX * strength;
    const y = relativeY * strength - 2;

    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <Box
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{ display: 'inline-block' }}
    >
      <Button
        {...props}
        sx={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition:
            'transform 0.16s ease-out, box-shadow 0.2s ease, background 0.2s ease',
          ...sx,
        }}
      >
        {children}
      </Button>
    </Box>
  );
};

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const primaryStart = theme.palette.primary.main ?? '#00acc1';
  const primaryEnd = theme.palette.primary.light ?? '#00d4ff';

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        pt: 10,
        pb: 10,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial accent */}
      <Box
        sx={{
          position: 'absolute',
          top: '-36%',
          right: '-36%',
          width: '120%',
          height: '120%',
          background: `radial-gradient(circle at 20% 10%, ${primaryStart}14, rgba(0,0,0,0) 40%)`,
          transform: 'rotate(30deg)',
          pointerEvents: 'none',
          opacity: 0.18,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            gap: 6,
          }}
        >
          {/* LEFT SIDE — TEXT */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}
              >
                Hi, I&apos;m
              </Typography>
            </motion.div>

            {/* Name with neon flicker */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  mb: 1.5,
                  lineHeight: 1.05,
                  fontSize: { xs: '2.25rem', md: '3.2rem' },
                  position: 'relative',
                  color: '#e6f1ff',
                  textShadow:
                    '0 0 6px rgba(0,172,193,0.65), 0 0 18px rgba(0,172,193,0.4)',
                  animation: 'neonFlicker 7s infinite ease-in-out',
                  '@keyframes neonFlicker': {
                    '0%, 70%, 100%': {
                      opacity: 1,
                      textShadow:
                        '0 0 6px rgba(0,172,193,0.65), 0 0 18px rgba(0,172,193,0.4)',
                    },
                    '72%': {
                      opacity: 0.7,
                      textShadow:
                        '0 0 2px rgba(0,172,193,0.3), 0 0 8px rgba(0,172,193,0.3)',
                    },
                    '73%': {
                      opacity: 1,
                      textShadow:
                        '0 0 10px rgba(0,172,193,0.9), 0 0 26px rgba(0,172,193,0.7)',
                    },
                    '76%': {
                      opacity: 0.85,
                      textShadow:
                        '0 0 4px rgba(0,172,193,0.45), 0 0 14px rgba(0,172,193,0.4)',
                    },
                    '78%': {
                      opacity: 1,
                      textShadow:
                        '0 0 7px rgba(0,172,193,0.7), 0 0 20px rgba(0,172,193,0.55)',
                    },
                  },
                }}
              >
                Soumyajit
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  fontWeight: 600,
                  fontSize: { xs: '1.05rem', md: '1.25rem' },
                }}
              >
                Full Stack Developer
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Typography
                variant="body1"
                sx={{
                  maxWidth: '680px',
                  mb: 4,
                  fontSize: { xs: '0.98rem', md: '1.12rem' },
                  color: 'rgba(255,255,255,0.88)',
                }}
              >
                I craft efficient and engaging web experiences with a strong
                foundation in low-level systems and performance-focused
                development.
              </Typography>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: 2,
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                  }}
                >
                  {/* View My Work (magnetic) */}
                  <ScrollLink
                    to="projects"
                    spy
                    smooth
                    duration={500}
                    offset={-70}
                  >
                    <MagneticButton
                      aria-label="View my work"
                      size="large"
                      disableElevation
                      sx={{
                        minWidth: 220,
                        px: 3,
                        py: 1.25,
                        borderRadius: '14px',
                        fontWeight: 700,
                        textTransform: 'none',
                        background: `linear-gradient(90deg, ${primaryStart}, ${primaryEnd})`,
                        color: '#fff',
                        boxShadow: '0 8px 24px rgba(0,172,193,0.14)',
                        '&:hover': {
                          boxShadow: '0 18px 40px rgba(0,172,193,0.2)',
                        },
                      }}
                    >
                      View My Work
                    </MagneticButton>
                  </ScrollLink>

                  {/* Blogspot (magnetic) */}
                  <MuiLink
                    href="https://blogspot.soumyajitdas.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                  >
                    <MagneticButton
                      aria-label="Open blogspot in new tab"
                      size="medium"
                      startIcon={<OpenInNewIcon sx={{ fontSize: 18 }} />}
                      sx={{
                        mt: 0.5,
                        minWidth: 180,
                        px: 2,
                        py: 0.9,
                        borderRadius: '12px',
                        fontWeight: 600,
                        textTransform: 'none',
                        color: 'primary.main',
                        background: 'transparent',
                        border: `1px solid rgba(0,172,193,0.12)`,
                        position: 'relative',
                        overflow: 'hidden',
                        '&:before': {
                          content: '""',
                          position: 'absolute',
                          inset: 0,
                          zIndex: 0,
                          background: `linear-gradient(90deg, rgba(0,172,193,0.04), rgba(0,212,255,0.02))`,
                        },
                        '& span': { zIndex: 1 },
                        '&:hover': {
                          background: 'rgba(0,172,193,0.04)',
                          borderColor: 'rgba(0,172,193,0.18)',
                        },
                      }}
                    >
                      Blogspot
                    </MagneticButton>
                  </MuiLink>
                </Box>

                {/* About Me (magnetic) */}
                <ScrollLink
                  to="about"
                  spy
                  smooth
                  duration={500}
                  offset={-70}
                >
                  <MagneticButton
                    aria-label="About me"
                    variant="outlined"
                    size="large"
                    sx={{
                      ml: isMobile ? 0 : 1.5,
                      mt: isMobile ? 1.5 : 0,
                      borderRadius: '12px',
                      px: 3,
                      py: 1.1,
                      textTransform: 'none',
                      fontWeight: 700,
                      color: 'rgba(255,255,255,0.92)',
                      borderColor: 'rgba(255,255,255,0.06)',
                      '&:hover': {
                        backgroundColor: 'rgba(0,172,193,0.06)',
                        borderColor: 'rgba(0,172,193,0.16)',
                      },
                    }}
                  >
                    About Me
                  </MagneticButton>
                </ScrollLink>
              </Box>
            </motion.div>
          </Box>

          {/* RIGHT SIDE — PROFILE WITH NEON RING + ORBITING PARTICLES */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
            >
              <Box
                sx={{
                  width: 360,
                  height: 360,
                  borderRadius: '50%',
                  background: `radial-gradient(circle at 30% 20%, rgba(0,172,193,0.08), rgba(0,172,193,0.02) 40%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  p: 2,

                  // Base glow
                  boxShadow:
                    '0 0 20px rgba(0,172,193,0.30), 0 0 35px rgba(0,172,193,0.10)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',

                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow:
                      '0 0 30px rgba(0,172,193,0.75), 0 0 70px rgba(0,172,193,0.35)',
                  },

                  // Neon ring
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 14,
                    borderRadius: '50%',
                    border: '2px solid rgba(0,172,193,0.55)',
                    boxShadow:
                      '0 0 18px rgba(0,172,193,0.55), inset 0 0 10px rgba(0,172,193,0.35)',
                    animation: 'pulseRing 3s ease-in-out infinite',
                    pointerEvents: 'none',
                    zIndex: 0,
                  },

                  '&:hover::before': {
                    boxShadow:
                      '0 0 26px rgba(0,172,193,0.9), inset 0 0 14px rgba(0,172,193,0.5)',
                  },

                  '@keyframes pulseRing': {
                    '0%': {
                      transform: 'scale(0.97)',
                      opacity: 0.55,
                    },
                    '50%': {
                      transform: 'scale(1.03)',
                      opacity: 1,
                    },
                    '100%': {
                      transform: 'scale(0.97)',
                      opacity: 0.55,
                    },
                  },

                  // Orbit keyframes
                  '@keyframes orbitSlow': {
                    '0%': {
                      transform: 'translate(-50%, -50%) rotate(0deg)',
                    },
                    '100%': {
                      transform: 'translate(-50%, -50%) rotate(360deg)',
                    },
                  },
                  '@keyframes orbitFast': {
                    '0%': {
                      transform: 'translate(-50%, -50%) rotate(0deg)',
                    },
                    '100%': {
                      transform: 'translate(-50%, -50%) rotate(-360deg)',
                    },
                  },
                }}
              >
                {/* ORBITING PARTICLES */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 0,
                  }}
                >
                  {/* Outer orbit */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '88%',
                      height: '88%',
                      borderRadius: '50%',
                      animation: 'orbitSlow 20s linear infinite',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-4px',
                        left: '50%',
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: 'rgba(0,172,193,0.95)',
                        boxShadow: '0 0 14px rgba(0,172,193,0.95)',
                        transform: 'translateX(-50%)',
                      },
                    }}
                  />
                  {/* Inner orbit */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '70%',
                      height: '70%',
                      borderRadius: '50%',
                      animation: 'orbitFast 12s linear infinite',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-3px',
                        left: '12%',
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: 'rgba(0,212,255,0.9)',
                        boxShadow: '0 0 12px rgba(0,212,255,0.9)',
                      },
                    }}
                  />
                </Box>

                {/* PROFILE IMAGE */}
                <Box
                  component="img"
                  src="/pfp.jpg"
                  alt="Profile"
                  sx={{
                    width: '82%',
                    height: '82%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 10px 40px rgba(0,172,193,0.25)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </Box>
            </motion.div>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;