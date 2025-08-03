import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
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
  faAws,
  faCloudflare
} from '@fortawesome/free-brands-svg-icons';
import {
  DataObject,
  Storage,
  Api
} from '@mui/icons-material';

const skills = [
  { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} /> },
  { name: 'TypeScript', icon: <DataObject /> },
  { name: 'Python', icon: <FontAwesomeIcon icon={faPython} /> },
  { name: 'React', icon: <FontAwesomeIcon icon={faReact} /> },
  { name: 'Node.js', icon: <FontAwesomeIcon icon={faNodeJs} /> },
  { name: 'Express', icon: <Api /> },
  { name: 'MongoDB', icon: <Storage /> },
  { name: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} /> },
  { name: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} /> },
  { name: 'Bootstrap', icon: <FontAwesomeIcon icon={faBootstrap} /> },
  { name: 'Git', icon: <FontAwesomeIcon icon={faGitAlt} /> },
  { name: 'GitHub', icon: <FontAwesomeIcon icon={faGithub} /> },
  { name: 'Linux', icon: <FontAwesomeIcon icon={faLinux} /> },
  { name: 'AWS', icon: <FontAwesomeIcon icon={faAws} /> },
  { name: 'CloudFlare', icon: <FontAwesomeIcon icon={faCloudflare} /> },
];

const Skills = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        position: 'relative',
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
              mb: 5,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                backgroundColor: 'primary.main',
                borderRadius: '2px',
              },
            }}
          >
            My Skills
          </Typography>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <Box
                sx={{
                  px: 2.5,
                  py: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  borderRadius: '8px',
                  backgroundColor: 'background.paper',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 12px ${theme.palette.primary.main}30`,
                    backgroundColor: 'primary.main',
                    '& .skill-icon': {
                      color: 'background.paper',
                    },
                    '& .skill-name': {
                      color: 'background.paper',
                    },
                  },
                }}
              >
                <Box 
                  className="skill-icon"
                  sx={{ 
                    color: 'primary.main',
                    display: 'flex',
                    fontSize: '1.25rem',
                    width: '1em',
                    height: '1em',
                    '& svg': {
                      width: '1em',
                      height: '1em'
                    }
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
                    transition: 'color 0.2s ease',
                  }}
                >
                  {skill.name}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;