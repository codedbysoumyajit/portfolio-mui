import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  useTheme,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const accentGradient = `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`;

  const journey = [
    {
      year: '2021',
      title: 'Started exploring programming',
      detail: 'Got curious about how systems work under the hood and began learning fundamentals.',
    },
    {
      year: '2022',
      title: 'Backend & servers',
      detail: 'Learned Node.js, Express, Linux basics and started hosting my own services.',
    },
    {
      year: '2023',
      title: 'Open source & full stack',
      detail: 'Created and maintained open-source projects, focusing on performance and reliability.',
    },
    {
      year: '2024–25',
      title: 'Systems-focused development',
      detail: 'Building production-ready apps, CLIs and infrastructure-aware projects.',
    },
  ];

  const workingOn = [
    'Improving Phoenix XShare with better security & UX.',
    'Optimising KernelView Go for faster system insight.',
    'Expanding PyroQuanta with smarter AI workflows.',
    'Deep learning of Go & systems architecture.',
  ];

  const loveBuilding = [
    'Privacy-first, self-hostable tools.',
    'Fast, reliable backend systems.',
    'Developer-focused CLIs and utilities.',
    'Modern full-stack applications.',
    'Infrastructure-aware services.',
  ];

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 8, md: 10 },
        background: 'transparent',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: { xs: 5, md: 6 },
              fontWeight: 700,
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                background: accentGradient,
                borderRadius: 2,
              },
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: { xs: 5, md: 6 } }}>

          {/* WHO I AM + LOVE BUILDING */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  fontSize: { xs: '1.4rem', md: '1.6rem' },
                }}
              >
                Who I Am
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                I'm a self-taught developer from Kolkata who enjoys building systems that are
                functional, efficient, and easy to maintain. I learn by experimenting, breaking things,
                and contributing to open-source.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                My interests include backend development, system design, performance optimization,
                and experimenting with infrastructure-aware applications.
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontSize: { xs: '1.15rem', md: '1.25rem' },
                  fontWeight: 600,
                }}
              >
                What I Love Building
              </Typography>

              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {loveBuilding.map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 1.2, mb: 1.2 }}>
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        mt: '6px',
                        borderRadius: '50%',
                        background: accentGradient,
                      }}
                    />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* TIMELINE + WORKING ON */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  fontSize: { xs: '1.15rem', md: '1.25rem' },
                }}
              >
                Journey So Far
              </Typography>

              <Box
                sx={{
                  position: 'relative',
                  pl: 2.5,
                  mb: 3,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 8,
                    top: 4,
                    bottom: 4,
                    width: 2,
                    borderRadius: 1,
                    background:
                      'linear-gradient(to bottom, rgba(0,172,193,0.5), rgba(0,172,193,0.05))',
                  },
                }}
              >
                {journey.map((step, i) => (
                  <Box key={i} sx={{ mb: i === journey.length - 1 ? 0 : 2.2, position: 'relative' }}>
                    <Box
                      sx={{
                        position: 'absolute',
                        left: -2,
                        top: 4,
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        border: '2px solid',
                        borderColor: theme.palette.primary.main,
                        backgroundColor: 'background.default',
                        boxShadow: '0 0 12px rgba(0,172,193,0.7)',
                      }}
                    />
                    <Box sx={{ ml: 3 }}>
                      <Typography variant="caption" sx={{ color: theme.palette.primary.light }}>
                        {step.year}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {step.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                      >
                        {step.detail}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  fontSize: { xs: '1.15rem', md: '1.25rem' },
                }}
              >
                Currently Working On
              </Typography>

              <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                {workingOn.map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 1 }}>
                    <Chip
                      label="Now"
                      size="small"
                      sx={{
                        height: 22,
                        borderRadius: '999px',
                        fontSize: '0.7rem',
                        px: 0.6,
                        background: 'rgba(0,172,193,0.08)',
                        border: '1px solid rgba(0,172,193,0.3)',
                        color: theme.palette.primary.main,
                        flexShrink: 0,
                      }}
                    />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

        </Grid>

      </Container>
    </Box>
  );
};

export default About;