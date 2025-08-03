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
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
  ];

  return (
    <HideOnScroll>
      <AppBar
        sx={{
          backgroundColor: 'rgba(10, 25, 41, 0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
          py: 1,
          borderBottom: '1px solid',
          borderColor: 'rgba(0, 172, 193, 0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo/Name */}
            <ScrollLink to="hero" spy smooth duration={500}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #00acc1, #00d4ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'linear-gradient(90deg, #00acc1, #00d4ff)',
                  }}
                />
                SOUMYAJIT
              </Typography>
            </ScrollLink>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <Button
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      textTransform: 'none',
                      px: 2,
                      py: 1,
                      borderRadius: '6px',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(0, 172, 193, 0.1)',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </ScrollLink>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: 'text.primary' }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>

          {/* Mobile Menu */}
          {mobileOpen && (
            <Box
              sx={{
                display: { md: 'none' },
                py: 2,
                transition: 'all 0.3s ease',
              }}
            >
              <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 2 }} />
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={handleDrawerToggle}
                >
                  <Button
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      px: 3,
                      py: 1.5,
                      color: 'text.primary',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(0, 172, 193, 0.1)',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </ScrollLink>
              ))}
            </Box>
          )}
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;