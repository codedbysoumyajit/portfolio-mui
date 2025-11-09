import React from 'react';
import { Box, Typography, Container, Grid, useTheme, alpha } from '@mui/material';
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
  faCloudflare,
  faGolang,
  faAws,
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
  { name: 'Git & GitHub', icon: <FontAwesomeIcon icon={faGithub} /> },
  { name: 'Linux', icon: <FontAwesomeIcon icon={faLinux} /> },
  { name: 'AWS EC2', icon: <FontAwesomeIcon icon={faAws} /> },
  { name: 'Cloudflare', icon: <FontAwesomeIcon icon={faCloudflare} /> },
];

const containerVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
};

const Skills = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });

  const primary = theme.palette.primary.main ?? '#00acc1';
  const primaryLight = alpha(primary, 0.08);
  const glow = alpha(primary, 0.16);

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        color: theme.palette.text.primary,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: '-6%',
          top: '-8%',
          width: { xs: 160, md: 360 },
          height: { xs: 160, md: 360 },
          borderRadius: '50%',
          background: `radial-gradient(circle at 40% 30%, ${alpha(primary, 0.08)}, rgba(0,0,0,0) 40%)`,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Typography variant="h2" sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, fontWeight: 800, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
              My Skills
            </Typography>
          </motion.div>

          <Grid container spacing={{ xs: 1.5, md: 2.5 }} justifyContent="center" alignItems="stretch">
            {skills.map((skill, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={skill.name + idx}>
                <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.99 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: { xs: 1.25, md: 1.75 },
                      borderRadius: 2,
                      background: theme.palette.background.paper,
                      border: `1px solid ${alpha('#ffffff', 0.04)}`,
                      transition: 'transform 180ms ease, box-shadow 220ms ease, background 180ms ease',
                      minHeight: 72,
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: `0 12px 30px ${glow}`,
                        background: `linear-gradient(180deg, ${primaryLight}, ${alpha('#ffffff', 0.02)})`,
                        borderColor: alpha(primary, 0.12),
                        '& .skill-icon': { color: '#fff' },
                        '& .skill-name': { color: '#fff' },
                      },
                    }}
                  >
                    <Box
                      className="skill-icon"
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: alpha(primary, 0.06),
                        color: primary,
                        fontSize: 20,
                        flexShrink: 0,
                        transition: 'all 180ms ease',
                        '& svg': { width: '1.1em', height: '1.1em' },
                      }}
                      aria-hidden
                    >
                      {skill.icon}
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography className="skill-name" variant="subtitle1" sx={{ fontWeight: 700, color: theme.palette.text.primary, transition: 'color 160ms ease' }}>
                        {skill.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', mt: 0.25 }}>
                        {skill.name === 'AWS EC2' ? 'Cloud / VM' : skill.name === 'Git & GitHub' ? 'Version control' : ''}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;