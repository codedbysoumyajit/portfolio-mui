import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
  useTheme,
  alpha,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Reddit, GitHub, Email, Twitter, Instagram } from '@mui/icons-material';

const socialLinks = [
  { icon: <Reddit />, url: 'https://www.reddit.com/u/Pheonix2008/' },
  { icon: <Instagram />, url: 'https://www.instagram.com/code_soumyajit' },
  { icon: <GitHub />, url: 'https://github.com/codedbysoumyajit' },
  { icon: <Twitter />, url: 'https://x.com/CoderSoumyajit' },
  { icon: <Email />, url: 'mailto:codedbysoumyajit@proton.me' },
];

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  const primary = theme.palette.primary.main;

  return (
    <Box
      component="footer"
      sx={{
        background: 'transparent',
        borderTop: `1px solid ${theme.palette.divider}`,
        color: theme.palette.text.primary,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Brand + description + socials */}
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Typography
                variant="h6"
                sx={{
                  mb: 1.5,
                  fontWeight: 800,
                  background: `linear-gradient(90deg, ${primary}, ${theme.palette.primary.light})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Soumyajit
              </Typography>

              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                I craft efficient and engaging web experiences with a strong foundation in low-level systems and performance-focused development.
              </Typography>

              <Box sx={{ display: 'flex', gap: 1.25, mt: 1 }}>
                {socialLinks.map((s, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                    <IconButton
                      component="a"
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        width: 40,
                        height: 40,
                        p: 0,
                        color: theme.palette.text.primary,
                        background: alpha(theme.palette.background.default, 0.02),
                        border: `1px solid ${alpha('#fff', 0.03)}`,
                        '&:hover': {
                          background: alpha(primary, 0.12),
                          color: primary,
                          transform: 'translateY(-2px)',
                        },
                      }}
                      aria-label={`open ${s.url}`}
                    >
                      {s.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }}>
              <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 700 }}>
                Quick Links
              </Typography>

              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      sx={{
                        display: 'inline-block',
                        color: theme.palette.text.secondary,
                        textDecoration: 'none',
                        py: 0.5,
                        transition: 'color 180ms ease, transform 120ms ease',
                        '&:hover': {
                          color: primary,
                          transform: 'translateX(4px)',
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

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }}>
              <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 700 }}>
                Contact Info
              </Typography>

              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 0.5 }}>
                Kolkata, WB
              </Typography>
              <Link
                href="mailto:codedbysoumyajit@proton.me"
                sx={{
                  display: 'inline-block',
                  color: theme.palette.text.secondary,
                  textDecoration: 'none',
                  '&:hover': { color: primary },
                }}
              >
                codedbysoumyajit@proton.me
              </Link>
            </motion.div>
          </Grid>
        </Grid>

        <Box sx={{ mt: { xs: 5, md: 6 }, pt: 3, borderTop: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.36 }}>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
              © {currentYear} Soumyajit Das. All rights reserved.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;