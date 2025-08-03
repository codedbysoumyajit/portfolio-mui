import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00838f',     // Dark cyan
      light: '#4fb3bf',    // Lighter cyan
      dark: '#005662',     // Deep cyan
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d81b60',     // Dark pink/magenta
      light: '#ff5c8d',
      dark: '#9c0037',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a0f17',  // Deep blue-black
      paper: '#121a24',    // Dark slate blue
    },
    text: {
      primary: '#e6f1ff',   // Soft white
      secondary: '#a8b2d1', // Light gray-blue
      disabled: 'rgba(168, 178, 209, 0.5)',
    },
    divider: 'rgba(168, 178, 209, 0.12)',
    action: {
      active: '#ffffff',
      hover: 'rgba(0, 131, 143, 0.08)',
      selected: 'rgba(0, 131, 143, 0.16)',
      disabled: 'rgba(168, 178, 209, 0.3)',
      disabledBackground: 'rgba(168, 178, 209, 0.12)',
    },
  },
  typography: {
    fontFamily: [
      '"Inter"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.8rem',
      lineHeight: 1.4,
      letterSpacing: '0em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.5,
      letterSpacing: '0.00735em',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.5,
      letterSpacing: '0.01071em',
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.02857em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 131, 143, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          background: 'rgba(18, 26, 36, 0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
          '&:hover': {
            borderColor: 'rgba(0, 131, 143, 0.3)',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: '#4fb3bf',
          '&:hover': {
            textDecoration: 'underline',
            color: '#00838f',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(168, 178, 209, 0.12)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Remove default MUI paper gradient
        },
      },
    },
  },
});

export default darkTheme;