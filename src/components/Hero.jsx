import React from 'react';
import { Box, Typography, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #121212 0%, #1a1a2e 100%)',
        pt: 10,
        pb: 10,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(0,172,193,0.1) 0%, rgba(0,0,0,0) 70%)',
          transform: 'rotate(30deg)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1, zIndex: 1 }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'primary.main',
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                Hi, I'm
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Soumyajit
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  fontWeight: 600,
                }}
              >
                Full Stack Developer
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Typography
                variant="body1"
                sx={{
                  maxWidth: '600px',
                  mb: 4,
                  fontSize: '1.2rem',
                }}
              >
                I craft efficient and engaging web experiences with a strong foundation in low-level systems and performance-focused development.
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 6px 12px rgba(0, 172, 193, 0.4)',
                      },
                    }}
                  >
                    View My Work
                  </Button>
                </ScrollLink>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        backgroundColor: 'rgba(0, 172, 193, 0.1)',
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
            >
              <Box
                sx={{
                  width: '350px',
                  height: '350px',
                  borderRadius: '50%',
                  background: 'linear-gradient(145deg, rgba(0,172,193,0.2) 0%, rgba(0,172,193,0) 70%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <Box
                  component="img"
                  src="/pfp.jpg" // Replace with your profile image
                  alt="Profile"
                  sx={{
                    width: '80%',
                    height: '80%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 0 30px rgba(0, 172, 193, 0.5)',
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