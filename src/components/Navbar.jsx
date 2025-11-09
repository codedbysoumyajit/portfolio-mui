import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Typography,
  useScrollTrigger,
  Slide,
  Divider,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link as ScrollLink } from 'react-scroll';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((v) => !v);
  const closeMobileMenu = () => setMobileOpen(false);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
  ];

  const blogUrl = 'https://blogspot.soumyajitdas.site';

  const primaryStart = theme.palette.primary.main ?? '#00acc1';
  const primaryEnd = '#00d4ff';

  return (
    <HideOnScroll>
      <AppBar
        sx={{
          backgroundColor: 'rgba(10, 25, 41, 0.82)',
          backdropFilter: 'blur(8px)',
          boxShadow: 'none',
          transition: 'all 0.28s ease',
          py: 1,
          borderBottom: '1px solid',
          borderColor: 'rgba(0,172,193,0.08)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo / Brand */}
            <ScrollLink to="hero" spy smooth duration={500} onClick={closeMobileMenu}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  background: `linear-gradient(90deg, ${primaryStart}, ${primaryEnd})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 9,
                    height: 9,
                    borderRadius: '50%',
                    background: `linear-gradient(90deg, ${primaryStart}, ${primaryEnd})`,
                    boxShadow: `0 6px 18px rgba(0,172,193,0.12)`,
                  }}
                />
                SOUMYAJIT
              </Typography>
            </ScrollLink>

            {/* Desktop Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5, alignItems: 'center' }}>
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  spy
                  smooth
                  duration={500}
                  offset={-70}
                >
                  <Button
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      px: 2,
                      py: 0.9,
                      borderRadius: '8px',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(0,172,193,0.06)',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </ScrollLink>
              ))}

              {/* Blog button (desktop) - subtle outlined/gradient style */}
              <Button
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<OpenInNewIcon sx={{ fontSize: 18 }} />}
                onClick={closeMobileMenu}
                sx={{
                  ml: 0.5,
                  px: 2,
                  py: 0.8,
                  borderRadius: '10px',
                  fontWeight: 700,
                  textTransform: 'none',
                  color: 'text.primary',
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
                    opacity: 1,
                  },
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'rgba(0,172,193,0.08)',
                    borderColor: 'rgba(0,172,193,0.18)',
                  },
                  '& .MuiButton-startIcon, & span': { zIndex: 1 },
                }}
              >
                Blog
              </Button>
            </Box>

            {/* Mobile menu toggle */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: 'text.primary' }}
              aria-label="menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>

          {/* Mobile Drawer-like area */}
          {mobileOpen && (
            <Box
              sx={{
                display: { md: 'none' },
                py: 2,
                transition: 'all 0.18s ease',
                borderTop: '1px solid',
                borderColor: 'rgba(255,255,255,0.03)',
              }}
            >
              <Divider sx={{ borderColor: 'rgba(255,255,255,0.04)', mb: 1 }} />

              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  spy
                  smooth
                  duration={500}
                  offset={-70}
                  onClick={closeMobileMenu}
                >
                  <Button
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      px: 3,
                      py: 1.4,
                      color: 'text.primary',
                      textTransform: 'none',
                      fontWeight: 700,
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(0,172,193,0.06)',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </ScrollLink>
              ))}

              <Divider sx={{ borderColor: 'rgba(255,255,255,0.04)', my: 1 }} />

              {/* Blog (mobile) - full width styled button */}
              <Box sx={{ px: 1 }}>
                <Button
                  fullWidth
                  href={blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<OpenInNewIcon sx={{ fontSize: 18 }} />}
                  onClick={closeMobileMenu}
                  sx={{
                    justifyContent: 'flex-start',
                    px: 3,
                    py: 1.3,
                    color: 'text.primary',
                    textTransform: 'none',
                    fontWeight: 700,
                    borderRadius: '8px',
                    border: `1px solid rgba(0,172,193,0.08)`,
                    background: 'transparent',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(0,172,193,0.06)',
                    },
                  }}
                >
                  Blog
                </Button>
              </Box>
            </Box>
          )}
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;