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
  useTheme 
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Phoenix XShare',
    description: "Phoenix XShare is a secure, open-source, and self-hostable file-sharing application built for privacy, performance, and ease of use.",
    image: '/xshare.jpg',
    tags: ['Express.js', 'Node.js', 'MongoDB', 'EJS'],
    link: 'https://github.com/codedbysoumyajit/Phoenix-XShare'
  },
  {
    title: 'KernelView',
    description: "KernelView is a modern and powerful system information tool built in Python. It provides detailed insights into your system's hardware and software, including CPU, GPU, RAM, OS, and more.",
    image: '/kv.jpg',
    tags: ['Python', 'PSutil', 'OS'],
    link: 'https://github.com/codedbysoumyajit/KernelView'
  },
  {
    title: 'Personal Blogspot',
    description: 'A modern, responsive, and personalized blog platform built with the MERN stack. (incomplete)',
    image: '/blogspot.jpg',
    tags: ['Express.js', 'EJS', 'MongoDB'],
    link: 'https://github.com/codedbysoumyajit/personal-blogspot'
  },
];

const ProjectCard = ({ project }) => {
  const theme = useTheme();

  return (
    <Card
      component={motion.div}
      whileHover={{ y: -8 }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'rgba(12, 18, 30, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid',
        borderColor: 'rgba(255, 255, 255, 0.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
        '&:hover': {
          borderColor: 'rgba(0, 172, 193, 0.3)',
          boxShadow: `0 12px 24px ${theme.palette.primary.main}20`,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: '180px',
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
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          sx={{ fontWeight: 600, mb: 1.5 }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, fontSize: '0.95rem' }}
        >
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {project.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{
                backgroundColor: 'rgba(0, 172, 193, 0.15)',
                color: 'primary.main',
                fontWeight: 500,
                fontSize: '0.7rem',
                height: '24px',
              }}
            />
          ))}
        </Box>
      </CardContent>

      <Box sx={{ px: 3, pb: 3 }}>
        <Button
          component="a"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          color="primary"
          sx={{
            px: 2.5,
            py: 1,
            borderRadius: '8px',
            fontWeight: 600,
            textTransform: 'none',
            background: 'linear-gradient(90deg, #00acc1, #00d4ff)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0, 172, 193, 0.4)',
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
  };

  return (
    <Box
      id="projects"
      ref={ref}
      sx={{
        py: { xs: 8, md: 10 },
        position: 'relative',
        background: 'linear-gradient(to bottom, #0a0f17 0%, #0d1117 100%)',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,172,193,0.4), transparent)',
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #00acc1, #00d4ff)',
                borderRadius: '2px',
              },
            }}
          >
            Featured Projects
          </Typography>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Grid container spacing={3} justifyContent="center">
            {projects.map((project, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <motion.div 
                  variants={item}
                  style={{
                    width: '100%',
                    maxWidth: '400px'
                  }}
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