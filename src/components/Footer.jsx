import React from 'react';
import { Box, Typography, Container, Grid, Link, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Reddit, GitHub, Email, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Reddit />, url: 'https://www.reddit.com/u/Pheonix2008/' },
    { icon: <Instagram />, url: 'https://www.instagram.com/code_soumyajit' },
    { icon: <GitHub />, url: 'https://github.com/codedbysoumyajit' },
    { icon: <Twitter />, url: 'https://x.com/CoderSoumyajit' },
    { icon: <Email />, url: 'mailto:codedbysoumyajit@proton.me' },
  ];

  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  color: 'primary.main',
                }}
              >
                Soumyajit
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
              I craft efficient and engaging web experiences with a strong foundation in low-level systems and performance-focused development.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton
                      component="a"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.primary',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                Quick Links
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                  '& li': {
                    mb: 1,
                  },
                }}
              >
                {['Home', 'About', 'Skills', 'Projects'].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                Contact Info
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Kolkata, WB
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                codedbysoumyajit@proton.me
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Typography variant="body2">
              © {currentYear} Soumyajit Das. All rights reserved.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;