import React from 'react';
import { Box, Typography, Container, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: 10,
        background: 'linear-gradient(to bottom, #121212 0%, #1a1a2e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
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
              mb: 6,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                backgroundColor: 'primary.main',
                borderRadius: '2px',
              },
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                Who I Am
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  textAlign: 'center',
                }}
              >
                A Computer Application student from Kolkata with a strong passion for computer technology, exploring both hardware and software systems in depth.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  textAlign: 'center',
                }}
              >
                Skilled in self-directed learning, with hands-on experience gained through studying documentation and contributing to open-source projects on GitHub. Adaptable and committed to continuous growth in the tech domain.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  textAlign: 'center',
                }}
              >
                Currently focused on cloud computing, with the goal of building impactful, forward-thinking solutions in a rapidly evolving digital world.
              </Typography>

              <Grid container spacing={2} justifyContent="center">
                {[
                  { label: 'Name', value: 'Soumyajit Das' },
                  { label: 'Email', value: 'codedbysoumyajit@proton.me' },
                  { label: 'Experience', value: 'Student' },
                  { label: 'Location', value: 'Kolkata, WB' },
                ].map((item, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <motion.div
                      initial="hidden"
                      animate={inView ? 'visible' : 'hidden'}
                      variants={variants}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          backgroundColor: 'background.paper',
                          borderRadius: '8px',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 5px 15px rgba(0, 172, 193, 0.3)',
                          },
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                            mb: 0.5,
                            textAlign: 'center',
                          }}
                        >
                          {item.label}
                        </Typography>
                        <Typography 
                          variant="body2"
                          sx={{ textAlign: 'center' }}
                        >
                          {item.value}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;