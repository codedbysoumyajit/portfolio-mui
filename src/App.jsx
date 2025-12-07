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
import BlockchainBackground from './components/BlockchainBackground';
import SnowfallBackground from './components/SnowfallBackground';

// 🔧 Toggle snowfall ON/OFF here:
const SNOW_ENABLED = true; // set to false to disable

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          overflow: 'hidden',
          color: 'text.primary',
        }}
      >
        {/* Blockchain Background Layer */}
        <BlockchainBackground />
         <SnowfallBackground enabled={SNOW_ENABLED} density={25000} />
        {/* Foreground Content */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <Hero />
          <Box component="main">
            <About />
            <Skills />
            <Projects />
          </Box>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;