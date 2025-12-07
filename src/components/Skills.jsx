import React from 'react';
import { Box, Typography, Container, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faPython,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faGitAlt,
  faGithub,
  faLinux,
  faGolang,
} from '@fortawesome/free-brands-svg-icons';
import { DataObject, Storage, Api } from '@mui/icons-material';

const skills = [
  { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} /> },
  { name: 'TypeScript', icon: <DataObject /> },
  { name: 'Node.js', icon: <FontAwesomeIcon icon={faNodeJs} /> },
  { name: 'Python', icon: <FontAwesomeIcon icon={faPython} /> },
  { name: 'Go', icon: <FontAwesomeIcon icon={faGolang} /> },
  { name: 'React', icon: <FontAwesomeIcon icon={faReact} /> },
  { name: 'Express', icon: <Api /> },
  { name: 'MongoDB', icon: <Storage /> },
  { name: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} /> },
  { name: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} /> },
  { name: 'Bootstrap', icon: <FontAwesomeIcon icon={faBootstrap} /> },
  { name: 'Git & GitHub', icon: <FontAwesomeIcon icon={faGitAlt} /> },
  { name: 'Linux', icon: <FontAwesomeIcon icon={faLinux} /> },
];

const Skills = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  const accentGradient = `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`;

  const container = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 14,
      },
    },
  };

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        py: { xs: 8, md: 10 },
        background: 'transparent',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={container}
        >
          <motion.div variants={item}>
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: { xs: 4, md: 5 },
                fontWeight: 700,
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
                  background: accentGradient,
                  borderRadius: 2,
                },
              }}
            >
              My Skills
            </Typography>
          </motion.div>

          {/* Optional small subtitle for context */}
          <motion.div variants={item}>
            <Typography
              variant="body2"
              sx={{
                textAlign: 'center',
                mb: { xs: 3.5, md: 4.5 },
                color: 'text.secondary',
                maxWidth: 520,
                mx: 'auto',
              }}
            >
              A mix of languages, tools, and platforms I use to build full-stack, performance-focused
              applications.
            </Typography>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 12,
            }}
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={item} whileHover={{ y: -3 }}>
                <Box
                  sx={{
                    px: 2.4,
                    py: 1.3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.1,
                    borderRadius: 999,
                    background: 'rgba(10, 15, 25, 0.9)',
                    border: '1px solid rgba(255,255,255,0.04)',
                    boxShadow: '0 8px 22px rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(14px)',
                    transition:
                      'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease, background 0.22s ease',
                    '&:hover': {
                      boxShadow: `0 14px 32px rgba(0,172,193,0.35)`,
                      borderColor: alpha(theme.palette.primary.main, 0.7),
                      background: 'rgba(10, 20, 32, 0.98)',
                    },
                  }}
                >
                  <Box
                    className="skill-icon"
                    sx={{
                      color: theme.palette.primary.main,
                      display: 'flex',
                      fontSize: '1.1rem',
                      width: '1.1em',
                      height: '1.1em',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': {
                        width: '1em',
                        height: '1em',
                      },
                    }}
                  >
                    {skill.icon}
                  </Box>

                  <Typography
                    className="skill-name"
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      color: 'text.primary',
                      fontSize: '0.9rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;