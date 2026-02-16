import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import profilePhoto from '../assets/profile-photo.jpg';
import filmPhoto1 from '../assets/film-photo-1.jpeg';
import filmPhoto2 from '../assets/film-photo-2.jpeg';
import filmPhoto3 from '../assets/film-photo-3.jpeg';
import filmPhoto4 from '../assets/film-photo-4.jpeg';
import filmPhoto5 from '../assets/film-photo-5.jpeg';
import filmPhoto6 from '../assets/film-photo-6.jpeg';

// Color constants
const BLUE_LIGHTER = '#C3E5E7';
const BLUE_LIGHT = '#A5D6D9';
const ORANGE_DARK = '#DF7027';

const AboutPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpen = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const photos = [filmPhoto1, filmPhoto2, filmPhoto3, filmPhoto4, filmPhoto5, filmPhoto6];

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
              I'm a software engineer with a passion for finding intersections between technology and the built environment. My background in both architecture and computer science gives me a unique lens through which to see how digital tools can reshape our physical spaces.
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'grey.800', fontSize: '1.1rem' }}>
              This interest has led me to projects like developing a full-stack IoT platform for construction site analytics and building Pave, a mobile app for 311 reporting that uses object detection to identify infrastructure issues. I enjoy the challenge of tackling complex, real-world problems and creating tools that have tangible impacts. My goal is to contribute to smarter and more responsive systems within our cities and communities.
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: 'grey.800', fontSize: '1.1rem' }}>
              When I'm not building software, I like to spend my time exploring new places, writing music, or enjoying a good cup of espresso. I also cherish spending quality time with friends and family and capturing moments on my film camera: a few of which you can see below.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ my: 6 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: 'grey.900', mb: 4, textAlign: 'center' }}>
            Through My Lens
          </Typography>
          <Grid container spacing={2}>
            {photos.map((photo, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  component="img"
                  src={photo}
                  alt={`Film photo ${index + 1}`}
                  onClick={() => handleOpen(photo)}
                  sx={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: `0 6px 20px rgba(0,0,0,0.15)`,
                    }
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="enlarged-image-view"
          aria-describedby="enlarged-view-of-a-film-photo"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Box onClick={handleClose} sx={{ outline: 'none', cursor: 'pointer' }}>
            <img
              src={selectedImg}
              alt="Enlarged film photo"
              style={{
                maxHeight: '90vh',
                maxWidth: '90vw',
                borderRadius: '8px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
              }}
            />
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default AboutPage;
