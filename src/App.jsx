import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        background: 'linear-gradient(180deg, #0a1929 0%, #112240 100%)',
        color: 'text.primary',
      }}>
        <Navbar />
        <Hero />
        <Box component="main">
          <About />
          <Skills />
          <Projects />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;