import React from 'react';
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
      {/* subtle radial accent (keeps the theme base identical but adds interest) */}
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
          <Box sx={{ flex: 1 }}>
            <motion.div initial="hidden" animate="visible" variants={variants} transition={{ duration: 0.6 }}>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                Hi, I'm
              </Typography>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={variants} transition={{ duration: 0.6, delay: 0.15 }}>
              <Typography variant="h1" sx={{ fontWeight: 800, mb: 1.5, lineHeight: 1.05, fontSize: { xs: '2.25rem', md: '3.2rem' } }}>
                Soumyajit
              </Typography>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={variants} transition={{ duration: 0.6, delay: 0.3 }}>
              <Typography variant="h2" sx={{ color: 'text.secondary', mb: 3, fontWeight: 600, fontSize: { xs: '1.05rem', md: '1.25rem' } }}>
                Full Stack Developer
              </Typography>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={variants} transition={{ duration: 0.6, delay: 0.45 }}>
              <Typography variant="body1" sx={{ maxWidth: '680px', mb: 4, fontSize: { xs: '0.98rem', md: '1.12rem' }, color: 'rgba(255,255,255,0.88)' }}>
                I craft efficient and engaging web experiences with a strong foundation in low-level systems and performance-focused development.
              </Typography>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={variants} transition={{ duration: 0.6, delay: 0.7 }}>
              <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 2, alignItems: 'flex-start' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <ScrollLink to="projects" spy smooth duration={500} offset={-70}>
                    <Button
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
                        transition: 'transform 200ms ease, box-shadow 200ms ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 18px 40px rgba(0,172,193,0.18)',
                        },
                      }}
                    >
                      View My Work
                    </Button>
                  </ScrollLink>

                  <MuiLink href="https://blogspot.soumyajitdas.site" target="_blank" rel="noopener noreferrer" underline="none">
                    <Button
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
                        '& .MuiButton-startIcon': { zIndex: 1 },
                        '& span': { zIndex: 1 },
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          background: 'rgba(0,172,193,0.04)',
                          borderColor: 'rgba(0,172,193,0.18)',
                        },
                      }}
                    >
                      Blogspot
                    </Button>
                  </MuiLink>
                </Box>

                <ScrollLink to="about" spy smooth duration={500} offset={-70}>
                  <Button
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
                        borderColor: 'rgba(0,172,193,0.12)',
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    About Me
                  </Button>
                </ScrollLink>
              </Box>
            </motion.div>
          </Box>

          {!isMobile && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.35 }} style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
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
                }}
              >
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