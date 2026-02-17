import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';

// Image Imports
import paveMapView from '../assets/pave/pave-map-view.png';
import paveMapCallout from '../assets/pave/pave-map-callout.png';
import paveReportDetails from '../assets/pave/pave-report-details.png';
import paveSearchBar from '../assets/pave/pave-search-bar.jpeg';

// Color constants
const BLUE_LIGHTER = '#C3E5E7';
const BLUE_LIGHT = '#A5D6D9';
const ORANGE_DARK = '#DF7027';
const ORANGE_LIGHT = '#DD8627';

const PavePage = () => {
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

  const technologies = [
    {
      name: 'React Native',
      description: 'Built with Expo for a cross-platform app, enabling rapid development for both iOS & Android from a single codebase.'
    },
    {
      name: 'Flask',
      description: 'A lightweight Python backend handles the RESTful API, serving data to the app and processing report data.'
    },
    {
      name: 'SQLite',
      description: 'A serverless SQL database provides a structured and efficient data model for storing and querying civic reports.'
    },
    {
      name: 'YOLOv8',
      description: 'A custom-trained model provides real-time object detection, instantly identifying issues like potholes and litter to automate submissions.'
    }
];

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <IconButton onClick={() => navigate('/')} sx={{ color: 'grey.700' }}>
              <ArrowBackIcon />
            </IconButton>
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              onClick={() => window.open('https://github.com/aria-yousefi/pave', '_blank')}
              sx={{
                borderColor: ORANGE_DARK,
                color: ORANGE_DARK,
                '&:hover': {
                  borderColor: ORANGE_DARK,
                  backgroundColor: 'rgba(223, 112, 39, 0.1)',
                }
              }}
            >
              View on GitHub
            </Button>
        </Box>
        <Box sx={{ textAlign: 'left', my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'grey.900', textAlign: 'center' }}>
            Pave
          </Typography>
          <Typography variant="h6" paragraph sx={{ color: 'grey.700', mb: 4, textAlign: 'center' }}>
            A mobile-first approach to universalize 311 reporting.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: 'grey.900', mb: 2, borderBottom: `2px solid ${ORANGE_LIGHT}`, pb: 1 }}>
            Project Overview
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'grey.800', fontSize: '1.1rem', mt: 2 }}>
            Pave is a mobile application designed to streamline the 311 reporting process for city residents. The goal is to make reporting civic issues as seamless as possible directly from a smartphone.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'grey.800', fontSize: '1.1rem' }}>
            A key feature is the integration of YOLO object detection, which allows for the quick and automated identification of common infrastructure problems. The model is currently trained to detect potholes and litter, with plans to expand its capabilities.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'grey.800', fontSize: '1.1rem' }}>
            To provide a comprehensive view of civic data, Pave includes a data ingestion pipeline that pulls, processes, and displays existing public 311 records from the City of Gainesville. This allows users to view both new and historical reports within the app.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: 'grey.900', mb: 2, borderBottom: `2px solid ${ORANGE_LIGHT}`, pb: 1 }}>
            Technology Stack
          </Typography>
          <Box sx={{
            display: 'flex',
            gap: 2.5,
            mt: 2,
            flexDirection: { xs: 'column', md: 'row' },
          }}>
            {technologies.map(tech => (
              <Box key={tech.name} sx={{
                flex: 1,
                p: 2.5,
                borderRadius: '8px',
                backgroundColor: BLUE_LIGHT,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
                }
              }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: 'grey.900', mb: 1 }}>
                  {tech.name}
                </Typography>
                <Typography variant="body1" sx={{ color: 'grey.800' }}>
                  {tech.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ my: 6 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: 'grey.900', mb: 4, pb: 1, borderBottom: `2px solid ${ORANGE_LIGHT}` }}>
            Key Features
          </Typography>
          <ImageList variant="masonry" cols={2} gap={16}>
            {[
              {
                img: paveMapView,
                title: 'Aggregated Map View',
                // description: 'The home screen provides a high-level overview of reported service requests, clustered geographically across the city.'
              },
              {
                img: paveReportDetails,
                title: 'In-Depth Report Details',
                // description: 'A dedicated screen for each report offers comprehensive information and a button to navigate directly to the location on the map.'
              },
              {
                img: paveMapCallout,
                title: 'Quick-View Callouts',
                // description: 'Selecting a report on the map displays a callout with essential details like the issue, status, and how long ago it was reported.'
              },
              {
                img: paveSearchBar,
                title: 'Intuitive Search Bar',
                // description: 'Users can easily search for specific reports by typing keywords that match the issue\'s name or details.'
              }
            ].map((feature, index) => (
              <ImageListItem key={index}>
                <Box
                  sx={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'box-shadow 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    '&:hover': {
                      boxShadow: `0 6px 20px rgba(0,0,0,0.15)`,
                    }
                  }}
                >
                  <Box
                    component="img"
                    onClick={() => handleOpen(feature.img)}
                    src={feature.img}
                    alt={feature.title}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderBottom: '1px solid #eee',
                      cursor: 'pointer',
                    }}
                  />
                  <Box sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: 'grey.900' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'grey.700', mt: 1, flexGrow: 1 }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        {/* <Box sx={{ my: 6, textAlign: 'center', borderTop: '1px solid #ddd', pt: 4 }}>
            <Typography variant="body1" paragraph sx={{ color: 'grey.700', fontStyle: 'italic' }}>
                Future development will include a seamless pipeline for user-submitted reports, further enhancing resident engagement.
            </Typography>
        </Box> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="enlarged-image-view"
          aria-describedby="enlarged-view-of-a-project-screenshot"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Box onClick={handleClose} sx={{ outline: 'none', cursor: 'pointer' }}>
            <img
              src={selectedImg}
              alt="Enlarged screenshot"
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

export default PavePage;
