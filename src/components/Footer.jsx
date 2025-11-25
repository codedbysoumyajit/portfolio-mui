import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Reddit, GitHub, Email, Twitter, Instagram } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Reddit />, url: 'https://www.reddit.com/u/Pheonix2008/' },
    { icon: <Instagram />, url: 'https://www.instagram.com/code_soumyajit' },
    { icon: <GitHub />, url: 'https://github.com/codedbysoumyajit' },
    { icon: <Twitter />, url: 'https://x.com/CoderSoumyajit' },
    { icon: <Email />, url: 'mailto:codedbysoumyajit@proton.me' },
  ];

  const quickLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 6, md: 8 },
        pt: 5,
        pb: 3,
        background: 'transparent',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          {/* Brand & Social */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: `radial-gradient(circle at 30% 30%, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                    boxShadow: `0 0 12px rgba(0,172,193,0.9)`,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: '0.16em',
                    fontSize: '0.82rem',
                    textTransform: 'uppercase',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  SOUMYAJIT
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  mb: 2.2,
                  color: 'text.secondary',
                  maxWidth: 320,
                  lineHeight: 1.7,
                }}
              >
                I build clean and efficient web experiences while steadily strengthening my understanding of low-level systems and performance-oriented development.
              </Typography>

              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.08, y: -1 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <IconButton
                      component="a"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
                          color: theme.palette.primary.light,
                          boxShadow: '0 0 16px rgba(0,172,193,0.5)',
                          backgroundColor: 'rgba(0,172,193,0.06)',
                        },
                        transition: 'all 0.2s ease',
                      }}
                      size="small"
                    >
                      {item.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 1.5,
                  fontWeight: 600,
                  fontSize: '0.98rem',
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
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.6,
                }}
              >
                {quickLinks.map((item) => (
                  <li key={item.to}>
                    <ScrollLink
                      to={item.to}
                      spy
                      smooth
                      duration={500}
                      offset={-70}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          cursor: 'pointer',
                          color: 'text.secondary',
                          '&:hover': {
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        {item.label}
                      </Typography>
                    </ScrollLink>
                  </li>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 1.5,
                  fontWeight: 600,
                  fontSize: '0.98rem',
                }}
              >
                Contact
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', mb: 0.5 }}
              >
                Kolkata, West Bengal
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', mb: 1.5 }}
              >
                <Box
                  component="a"
                  href="mailto:codedbysoumyajit@proton.me"
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    borderBottom: '1px dashed rgba(255,255,255,0.2)',
                    pb: 0.1,
                    '&:hover': {
                      color: theme.palette.primary.main,
                      borderBottomColor: theme.palette.primary.main,
                    },
                  }}
                >
                  codedbysoumyajit@proton.me
                </Box>
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Box sx={{ mt: 4 }}>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 2 }} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Typography
              variant="body2"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                fontSize: '0.82rem',
              }}
            >
              © {currentYear} Soumyajit Das · Built with code, curiosity, and a
              bit of neon.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;