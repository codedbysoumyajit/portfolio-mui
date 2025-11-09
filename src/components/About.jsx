import React from 'react';
import { Box, Typography, Container, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const variants = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

  const primaryStart = theme.palette.primary.main ?? '#00acc1';
  const primaryEnd = theme.palette.primary.light ?? '#00d4ff';

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        color: theme.palette.text.primary,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          right: '-10%',
          top: '-10%',
          width: { xs: 200, md: 420 },
          height: { xs: 200, md: 420 },
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, ${primaryStart}14, rgba(0,0,0,0) 40%)`,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants} transition={{ duration: 0.6 }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: { xs: 4, md: 6 },
              position: 'relative',
              fontWeight: 800,
              letterSpacing: 0.2,
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 88,
                height: 4,
                background: `linear-gradient(90deg, ${primaryStart}, ${primaryEnd})`,
                borderRadius: 2,
              },
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants} transition={{ duration: 0.6, delay: 0.15 }}>
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, textAlign: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                Who I Am
              </Typography>

              <Typography variant="body1" sx={{ mb: 2.5, fontSize: { xs: '0.98rem', md: '1.08rem' }, lineHeight: 1.75, textAlign: 'center', color: 'rgba(255,255,255,0.85)' }}>
                A driven student from Kolkata, fueled by a deep passion for computer technology — I explore both hardware and software with enthusiasm and curiosity. I focus on performance, low-level systems, and practical engineering that scales.
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.98rem', md: '1.08rem' }, lineHeight: 1.75, textAlign: 'center', color: 'rgba(255,255,255,0.82)' }}>
                I learn by reading docs, building projects, and contributing to open source on GitHub. I enjoy bridging the gap between hardware constraints and clean, efficient software.
              </Typography>

              <Typography variant="body1" sx={{ mb: 5, fontSize: { xs: '0.98rem', md: '1.08rem' }, lineHeight: 1.75, textAlign: 'center', color: 'rgba(255,255,255,0.8)' }}>
                My aim is to build meaningful, maintainable systems and keep growing across diverse tech domains.
              </Typography>
            </motion.div>

            <Grid container spacing={2} justifyContent="center">
              {[
                { label: 'Name', value: 'Soumyajit Das' },
                { label: 'Email', value: 'codedbysoumyajit@proton.me' },
                { label: 'Experience', value: 'Student' },
                { label: 'Location', value: 'Kolkata, WB' },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants} transition={{ duration: 0.6, delay: 0.25 + index * 0.08 }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        minHeight: 96,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.divider}`,
                        transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: `0 10px 30px ${theme.palette.primary.main}20`,
                          borderColor: `${theme.palette.primary.main}22`,
                        },
                      }}
                    >
                      <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5, textAlign: 'center' }}>
                        {item.label}
                      </Typography>
                      <Typography variant="body2" sx={{ textAlign: 'center', color: theme.palette.text.primary, fontWeight: 600 }}>
                        {item.value}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;