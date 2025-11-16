import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  useTheme,
  alpha,
  useMediaQuery,
} from '@mui/material';
import { motion, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarIcon from '@mui/icons-material/Star';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import useGitHubRepo from '../hooks/useGitHubRepo';

const projects = [
  {
    title: 'Phoenix XShare',
    description:
      'Secure, self-hostable file sharing app focused on privacy, simplicity, and performance.',
    image: '/xshare.jpg',
    tags: ['Express.js', 'Node.js', 'MongoDB', 'EJS'],
    link: 'https://github.com/codedbysoumyajit/Phoenix-XShare',
    repo: 'codedbysoumyajit/Phoenix-XShare',
  },
  {
    title: 'KernelView Go',
    description:
      'A modern CLI tool that shows system information fast and precisely, built with Go.',
    image: '/kv-go.jpg',
    tags: ['Go', 'gopsutil', 'goroutines'],
    link: 'https://github.com/codedbysoumyajit/KernelView-Go',
    repo: 'codedbysoumyajit/KernelView-Go',
  },
  {
    title: 'PyroQuanta',
    description:
      'AI-powered open-source Discord bot built with Google Gemini for code, translation, and creative tasks.',
    image: '/pyro.jpg',
    tags: ['discord.js', '@google/generative-ai'],
    link: 'https://github.com/codedbysoumyajit/PyroQuanta',
    repo: 'codedbysoumyajit/PyroQuanta',
  },
];

const ProjectCard = ({ project }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primaryLight = theme.palette.primary.light ?? '#4fb3bf';

  const { stars, forks, updated } = useGitHubRepo(project.repo);

  const lastUpdated = updated
    ? new Date(updated).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  // Tilt only on desktop
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxTilt = 10;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = -((y - centerY) / centerY) * maxTilt;

    tiltX.set(rotateX);
    tiltY.set(rotateY);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const tiltHandlers = isMobile
    ? {}
    : {
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
      };

  return (
    <motion.div
      style={!isMobile ? { perspective: 900 } : undefined}
      {...tiltHandlers}
    >
      <Card
        component={motion.div}
        style={
          !isMobile
            ? {
                rotateX: tiltX,
                rotateY: tiltY,
                transformStyle: 'preserve-3d',
              }
            : undefined
        }
        whileHover={{ scale: isMobile ? 1.01 : 1.02 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: 2,
          // Match overall glass look of site (About cards / Footer)
          background: 'rgba(10, 15, 25, 0.9)',
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 12px 32px rgba(0,0,0,0.7)',
          backdropFilter: 'blur(14px)',
          transition:
            'box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease, transform 0.3s ease',
          '&:hover': {
            borderColor: alpha(primary, 0.6),
            boxShadow: `0 20px 50px rgba(0,172,193,0.35)`,
            background: 'rgba(10, 18, 30, 0.98)',
          },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            position: 'relative',
            height: 200,
            overflow: 'hidden',
            transform: !isMobile ? 'translateZ(18px)' : 'none',
          }}
        >
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: !isMobile ? 'scale(1.05)' : 'scale(1.02)',
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              // Slightly softer overlay to match rest of site
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.65) 100%)',
            }}
          />
        </Box>

        {/* Content */}
        <CardContent
          sx={{
            flexGrow: 1,
            p: 3,
            transform: !isMobile ? 'translateZ(10px)' : 'none',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 0.8,
              color: theme.palette.text.primary,
            }}
          >
            {project.title}
          </Typography>

          {/* GitHub Repo Stats */}
          {(stars !== null || forks !== null) && (
            <Box
              sx={{
                display: 'flex',
                gap: 1.2,
                alignItems: 'center',
                mb: 2,
              }}
            >
              {stars !== null && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.6,
                    px: 1.1,
                    py: 0.35,
                    borderRadius: 999,
                    background: alpha(primary, 0.09),
                    border: `1px solid ${alpha(primary, 0.4)}`,
                    boxShadow: `0 0 10px ${alpha(primary, 0.35)}`,
                  }}
                >
                  <StarIcon sx={{ fontSize: 18, color: primary }} />
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>
                    {stars}
                  </Typography>
                </Box>
              )}

              {forks !== null && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.6,
                    px: 1.1,
                    py: 0.35,
                    borderRadius: 999,
                    background: alpha(primary, 0.06),
                    border: `1px solid ${alpha(primary, 0.3)}`,
                  }}
                >
                  <CallSplitIcon sx={{ fontSize: 18, color: primary }} />
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>
                    {forks}
                  </Typography>
                </Box>
              )}
            </Box>
          )}

          {/* Last updated */}
          {lastUpdated && (
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mb: 2,
                color: theme.palette.text.secondary,
                opacity: 0.8,
              }}
            >
              Updated: {lastUpdated}
            </Typography>
          )}

          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              mb: 2.4,
              fontSize: '0.95rem',
              lineHeight: 1.6,
            }}
          >
            {project.description}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
            {project.tags.map((tag, i) => (
              <Chip
                key={i}
                label={tag}
                size="small"
                sx={{
                  background: alpha(primary, 0.1),
                  color: primary,
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  height: 26,
                  borderRadius: 999,
                  border: `1px solid ${alpha(primary, 0.3)}`,
                }}
              />
            ))}
          </Box>
        </CardContent>

        {/* Footer */}
        <Box
          sx={{
            px: 3,
            pb: 3,
            pt: 0,
            transform: !isMobile ? 'translateZ(6px)' : 'none',
          }}
        >
          <Button
            component="a"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNewIcon />}
            variant="contained"
            fullWidth
            sx={{
              fontWeight: 700,
              textTransform: 'none',
              borderRadius: 1.7,
              py: 1,
              // Match Hero's main CTA gradient style
              background: `linear-gradient(90deg, ${primary}, ${primaryLight})`,
              boxShadow: '0 8px 24px rgba(0,172,193,0.32)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 16px 40px rgba(0,172,193,0.45)',
              },
            }}
          >
            View Project
          </Button>
        </Box>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const container = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box
      id="projects"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: 'transparent',
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={container}
        >
          {/* Header */}
          <motion.div variants={item}>
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: { xs: 4, md: 6 },
                fontWeight: 800,
                fontSize: { xs: '1.8rem', md: '2.4rem' },
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 4,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                  borderRadius: 2,
                },
              }}
            >
              Featured Projects
            </Typography>
          </motion.div>

          {/* Grid */}
          <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
            {projects.map((project, i) => (
              <Grid
                key={i}
                item
                xs={12}
                sm={6}
                md={4}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <motion.div
                  variants={item}
                  style={{ width: '100%', maxWidth: 420 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;