import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const SectionTransition = ({ children, id }) => {
  return (
    <Box 
      id={id}
      component={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      sx={{
        py: { xs: 8, md: 10 },
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,172,193,0.4), transparent)',
        }
      }}
    >
      {children}
    </Box>
  );
};

export default SectionTransition;