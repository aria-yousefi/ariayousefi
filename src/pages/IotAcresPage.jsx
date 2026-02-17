import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import iotPoster from '../assets/iot-poster.jpg';

// Color constants
const BLUE_LIGHTER = '#C3E5E7';
const BLUE_LIGHT = '#A5D6D9';
const ORANGE_DARK = '#DF7027';
const ORANGE_LIGHT = '#DD8627';

const IotAcresPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpen = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };

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
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 4 }}>
            <IconButton onClick={() => navigate('/')} sx={{ color: 'grey.700' }}>
              <ArrowBackIcon />
            </IconButton>
        </Box>
        <Box sx={{ textAlign: 'center', my: 4, mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'grey.900' }}>
            UF IoT ACRES
          </Typography>
          <Typography variant="h6" paragraph sx={{ color: 'grey.700', mb: 4 }}>
            A full-stack platform for construction site IoT telemetry.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: 'grey.900', mb: 2, borderBottom: `2px solid ${ORANGE_LIGHT}`, pb: 1 }}>
            Project Overview
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'grey.800', fontSize: '1.1rem', mt: 2 }}>
            The IoT ACRES project at the University of Florida is a full-stack platform built to bring real-time data monitoring to active construction sites. I lead development of the web application and backend services, building a real-time data pipeline that captures environmental data (i.e., temperature, humidity) via LoRa sensors, processes it through a Node.js backend, and stores it in a cloud database. The system presents live and historical site data through a React dashboard designed for project managers.          
          </Typography>
        </Box>

        {/* <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: 'grey.900', mb: 2, borderBottom: `2px solid ${ORANGE_LIGHT}`, pb: 1 }}>
            My Role & Contributions
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'grey.800', fontSize: '1.1rem', mt: 2 }}>
            As the Lead Software Engineer, I am responsible for the overall architecture and development of the platform. My key contributions included:
          </Typography>
          <ul style={{ paddingLeft: '20px', color: 'grey.800', fontSize: '1.1rem' }}>
            <li>Leading the development of the full-stack React and NodeJS platform.</li>
            <li>Managing feature planning, task delegation, and conducting code reviews for a team of four developers.</li>
            <li>Engineering the scalable data ingestion pipeline, integrating LoRa sensors via an MQTT and ChirpStack architecture.</li>
          </ul>
        </Box> */}

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: 'grey.900', mb: 2, borderBottom: `2px solid ${ORANGE_LIGHT}`, pb: 1 }}>
            Key Architectural Features
          </Typography>
          <Box sx={{
            display: 'flex',
            gap: 2.5,
            mt: 2,
            flexDirection: { xs: 'column', md: 'row' },
          }}>
            {['Sensor Data Ingestion via MQTT', 'Cloud Data Storage Pipeline', 'Live Dashboard Visualization', 'Real-time Streaming Architecture'].map((feature, index) => (
              <Box key={index} sx={{
                flex: 1,
                p: 2.5,
                borderRadius: '8px',
                backgroundColor: BLUE_LIGHT,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
                }
              }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: 'grey.900' }}>
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ my: 6 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: 'grey.900', mb: 2, borderBottom: `2px solid ${ORANGE_LIGHT}`, pb: 1 }}>
            Project Poster
          </Typography>
          <Box
            component="img"
            src={iotPoster}
            onClick={() => handleOpen(iotPoster)}
            alt="IoT ACRES Poster"
            sx={{
              width: '100%',
              borderRadius: '8px',
              boxShadow: '0 8px 30px -5px rgba(0,0,0,0.3)',
              mt: 2,
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.01)',
                boxShadow: '0 12px 40px -5px rgba(0,0,0,0.4)',
              }
            }}
          />
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="enlarged-image-view"
          aria-describedby="enlarged-view-of-a-project-poster"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Box onClick={handleClose} sx={{ outline: 'none', cursor: 'pointer' }}>
            <img
              src={selectedImg}
              alt="Enlarged project poster"
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

export default IotAcresPage;