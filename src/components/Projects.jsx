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
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const projects = [
  {
    title: 'Phoenix XShare',
    description:
      'Secure, self-hostable file sharing app focused on privacy, simplicity, and performance.',
    image: '/xshare.jpg',
    tags: ['Express.js', 'Node.js', 'MongoDB', 'EJS'],
    link: 'https://github.com/codedbysoumyajit/Phoenix-XShare',
  },
  {
    title: 'KernelView Go',
    description:
      'A modern CLI tool that shows system information fast and precisely, built with Go.',
    image: '/kv-go.jpg',
    tags: ['Go', 'gopsutil', 'goroutines'],
    link: 'https://github.com/codedbysoumyajit/KernelView-Go',
  },
  {
    title: 'PyroQuanta',
    description:
      'AI-powered open-source Discord bot built with Google Gemini for code, translation, and creative tasks.',
    image: '/pyro.jpg',
    tags: ['discord.js', '@google/generative-ai'],
    link: 'https://github.com/codedbysoumyajit/PyroQuanta',
  },
];

const ProjectCard = ({ project }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primaryLight = theme.palette.primary.light ?? '#00d4ff';
  const glow = alpha(primary, 0.18);

  return (
    <Card
      component={motion.div}
      whileHover={{ y: -8 }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: 2,
        // Use the theme paper color so the card surface is readable over the canvas
        background: theme.palette.background.paper,
        // optionally, for a slightly glassy look, you can use an alpha variant:
        // background: alpha(theme.palette.background.paper, 0.98),
        border: `1px solid ${alpha('#fff', 0.04)}`,
        transition:
          'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        boxShadow: '0 6px 20px rgba(0,0,0,0.45)',
        '&:hover': {
          transform: 'translateY(-6px)',
          borderColor: alpha(primary, 0.25),
          boxShadow: `0 12px 34px ${glow}`,
        },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          position: 'relative',
          height: 200,
          overflow: 'hidden',
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
            '&:hover': { transform: 'scale(1.05)' },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.55) 100%)',
          }}
        />
      </Box>

      {/* Content */}
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 1.2,
            color: theme.palette.text.primary,
          }}
        >
          {project.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            mb: 2.5,
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
                background: alpha(primary, 0.08),
                color: primary,
                fontWeight: 600,
                fontSize: '0.75rem',
                height: 26,
                borderRadius: 1.5,
                border: `1px solid ${alpha(primary, 0.1)}`,
              }}
            />
          ))}
        </Box>
      </CardContent>

      {/* Footer */}
      <Box sx={{ px: 3, pb: 3 }}>
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
            borderRadius: 1.5,
            py: 1,
            background: `linear-gradient(90deg, ${primary}, ${primaryLight})`,
            boxShadow: `0 8px 20px ${alpha(primary, 0.25)}`,
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: `0 12px 36px ${alpha(primary, 0.35)}`,
            },
          }}
        >
          View Project
        </Button>
      </Box>
    </Card>
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
        // make the section transparent so canvas shows through
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
                fontSize: { xs: '1.8rem', md: '2.4rem' }, // same as About & Skills
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

          {/* Projects Grid */}
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
                <motion.div variants={item} style={{ width: '100%', maxWidth: 420 }}>
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