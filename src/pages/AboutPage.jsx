import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import profilePhoto from '../assets/profile-photo.jpg';

// Color constants
const BLUE_LIGHTER = '#C3E5E7';
const BLUE_LIGHT = '#A5D6D9';
const ORANGE_DARK = '#DF7027';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: `radial-gradient(circle at 5% 15%, ${BLUE_LIGHT} 0%, transparent 30%),
                      radial-gradient(circle at 90% 80%, ${BLUE_LIGHTER} 0%, transparent 35%),
                      #FEFBF6`,
        minHeight: '100vh',
        py: 5,
        px: 2,
        animation: 'fadeIn 0.7s ease-in',
      }}
    >
      <Container maxWidth="md">
        <IconButton onClick={() => navigate('/')} sx={{ mb: 2, color: 'grey.700' }}>
          <ArrowBackIcon />
        </IconButton>
        <Grid container spacing={4} alignItems="center" sx={{ my: 4 }}>
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Avatar
              alt="Aria Yousefi"
              src={profilePhoto}
              sx={{ width: 200, height: 200, margin: 'auto', border: `4px solid ${ORANGE_DARK}` }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: 'grey.900' }}>
                Hello, I'm Aria.
              </Typography>
              <Button
                variant="outlined"
                onClick={() => navigate('/resume')}
                sx={{
                  borderColor: ORANGE_DARK,
                  color: ORANGE_DARK,
                  flexShrink: 0,
                  '&:hover': {
                    borderColor: ORANGE_DARK,
                    backgroundColor: 'rgba(223, 112, 39, 0.1)',
                  }
                }}
              >
                View My Resume
              </Button>
            </Box>
            <Typography variant="body1" paragraph sx={{ color: 'grey.800', fontSize: '1.1rem' }}>
              I'm a software engineer and urban scientist driven by a passion for building technology that shapes the world we live in. My background in architecture and computer science gives me a unique perspective on how digital systems and physical spaces interact.
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'grey.800', fontSize: '1.1rem' }}>
              From developing full-stack IoT platforms for construction sites to engineering data pipelines for civic reporting apps, I thrive on solving complex, real-world problems. I believe in creating tools that are not only powerful and scalable but also intuitive and impactful for the end-user. Whether it's through machine learning or thoughtful UX design, my goal is to create more efficient, equitable, and intelligent urban environments.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
