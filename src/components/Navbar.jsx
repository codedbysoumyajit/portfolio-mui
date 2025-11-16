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
import { alpha } from '@mui/material/styles';
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

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
  ];

  const blogUrl = 'https://blogspot.soumyajitdas.site';

  return (
    <HideOnScroll>
      <AppBar
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: (theme) => theme.zIndex.appBar + 1,
        }}
      >
        {/* Glassy background layer */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to bottom, rgba(5,10,20,0.92), rgba(5,10,20,0.82))`,
            backdropFilter: 'blur(14px)',
            borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Logo / Name */}
            <ScrollLink
              to="hero"
              spy
              smooth
              duration={500}
              offset={-70}
              style={{ cursor: 'pointer' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: `radial-gradient(circle at 30% 30%, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                    boxShadow: `0 0 12px ${alpha(theme.palette.primary.main, 0.8)}`,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: '0.16em',
                    fontSize: { xs: '0.78rem', md: '0.85rem' },
                    textTransform: 'uppercase',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  SOUMYAJIT
                </Typography>
              </Box>
            </ScrollLink>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 2.5,
              }}
            >
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
                    disableRipple
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      textTransform: 'none',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 999,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: '50%',
                        bottom: 4,
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 2,
                        borderRadius: 999,
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                        transition: 'width 0.25s ease',
                      },
                      '&:hover': {
                        color: 'text.primary',
                        backgroundColor: alpha(theme.palette.primary.main, 0.08),
                      },
                      '&:hover::after': {
                        width: '60%',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </ScrollLink>
              ))}

              {/* Blogspot Button (desktop) */}
              <Button
                component="a"
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
                sx={{
                  ml: 1,
                  borderRadius: 999,
                  px: 2,
                  py: 0.7,
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  color: theme.palette.primary.light,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
                  background: alpha(theme.palette.primary.main, 0.09),
                  boxShadow: `0 0 12px ${alpha(theme.palette.primary.main, 0.45)}`,
                  '&:hover': {
                    background: alpha(theme.palette.primary.main, 0.16),
                    boxShadow: `0 0 18px ${alpha(theme.palette.primary.main, 0.7)}`,
                  },
                }}
              >
                Blogspot
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: 'text.primary',
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>

          {/* Mobile Menu */}
          {mobileOpen && (
            <Box
              sx={{
                display: { xs: 'block', md: 'none' },
                pb: 1,
              }}
            >
              <Divider
                sx={{
                  borderColor: alpha('#ffffff', 0.12),
                  mb: 1,
                }}
              />
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  spy
                  smooth
                  duration={500}
                  offset={-70}
                  onClick={handleDrawerToggle}
                >
                  <Button
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      color: 'text.secondary',
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      py: 1.1,
                      px: 1.5,
                      borderRadius: 1.2,
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.08),
                        color: 'text.primary',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </ScrollLink>
              ))}

              {/* Blogspot inside mobile menu */}
              <Button
                fullWidth
                component="a"
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenInNewIcon sx={{ fontSize: 18 }} />}
                sx={{
                  mt: 0.5,
                  justifyContent: 'flex-start',
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  py: 1.1,
                  px: 1.5,
                  borderRadius: 1.2,
                  color: theme.palette.primary.light,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.16),
                  },
                }}
                onClick={handleDrawerToggle}
              >
                Blogspot
              </Button>
            </Box>
          )}
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;