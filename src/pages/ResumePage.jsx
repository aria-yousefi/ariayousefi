import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import resumePdf from '../assets/Resume_January_2026.pdf';
import agencyLogo from '../assets/agency-logo.jpg';
import ufLogo from '../assets/uf-logo.png';
import hicvLogo from '../assets/hicv-logo.jpg';

// Color constants
const BLUE_LIGHTER = '#C3E5E7';
const BLUE_LIGHT = '#A5D6D9';
const BLUE_MID = '#699FA1';
const ORANGE_LIGHT = '#DD8627';
const ORANGE_DARK = '#DF7027';

const ResumePage = () => {
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
        color: 'grey.800'
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <IconButton onClick={() => navigate('/')} sx={{ color: 'grey.700' }}>
            <ArrowBackIcon />
          </IconButton>
          <Button
            variant="outlined"
            href={resumePdf}
            download="Aria_Yousefi_Resume.pdf"
            startIcon={<DownloadIcon />}
            sx={{
              borderColor: BLUE_MID,
              color: BLUE_MID,
              '&:hover': {
                borderColor: ORANGE_DARK,
                backgroundColor: 'rgba(223, 112, 39, 0.04)',
                color: ORANGE_DARK,
              }
            }}
          >
            Download PDF
          </Button>
        </Box>

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: 'grey.900' }}>
            Aria Yousefi
          </Typography>
          <Box>
            <IconButton
              aria-label="Email"
              onClick={() => window.location.href = 'mailto:aria.yousefi.swe@gmail.com'}
              sx={{ color: 'grey.700', '&:hover': { color: ORANGE_DARK } }}
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              onClick={() => window.open('https://linkedin.com/in/aria-yousefi-ufl', '_blank')}
              sx={{ color: 'grey.700', '&:hover': { color: ORANGE_DARK } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="GitHub"
              onClick={() => window.open('https://github.com/aria-yousefi', '_blank')}
              sx={{ color: 'grey.700', '&:hover': { color: ORANGE_DARK } }}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Education */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', borderBottom: `2px solid ${ORANGE_LIGHT}`, pb: 1, mb: 2 }}>
            Education
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>University of Florida</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" color="grey.700">January 2025 – December 2026</Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>M.S. in Computer Science (GPA: 3.72)</Typography>
          </Box>
          <Box>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>University of Florida</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" color="grey.700">August 2020 – May 2024</Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>B.Des. in Architecture, Minor in Computer Science (GPA: 3.54)</Typography>
          </Box>
        </Box>

        {/* Experience */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', borderBottom: `2px solid ${ORANGE_LIGHT}`, pb: 1, mb: 2 }}>
            Experience
          </Typography>
          <Box sx={{ display: 'flex', mb: 3 }}>
            <Avatar src={ufLogo} sx={{ width: 56, height: 56, mr: 2, border: '1px solid #eee' }} variant="rounded" />
            <Box sx={{width: '100%'}}>
              <Grid container justifyContent="space-between">
                <Grid item><Typography variant="h6" sx={{ fontWeight: 'bold' }}>Lead Software Engineer</Typography></Grid>
                <Grid item><Typography variant="body1" color="grey.700">October 2025 – Present</Typography></Grid>
              </Grid>
              <Typography variant="body1" sx={{ fontStyle: 'italic' }}>UF IoT ACRES</Typography>
              <ul style={{marginTop: '8px', paddingLeft: '20px'}}>
                <li><Typography>Lead development of full-stack React/NodeJS platform for construction site IoT telemetry</Typography></li>
                <li><Typography>Manage feature planning, task delegation, and code reviews for 4 developers</Typography></li>
                <li><Typography>Integrate LoRa sensors via MQTT/ChirpStack pipeline for scalable data ingestion</Typography></li>
              </ul>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', mb: 3 }}>
            <Avatar src={agencyLogo} sx={{ width: 56, height: 56, mr: 2, border: '1px solid #eee' }} variant="rounded" />
            <Box sx={{width: '100%'}}>
               <Grid container justifyContent="space-between">
                <Grid item><Typography variant="h6" sx={{ fontWeight: 'bold' }}>Full Stack Developer</Typography></Grid>
                <Grid item><Typography variant="body1" color="grey.700">January 2026 – Present</Typography></Grid>
              </Grid>
              <Typography variant="body1" sx={{ fontStyle: 'italic' }}>The Agency at UF</Typography>
              <ul style={{marginTop: '8px', paddingLeft: '20px'}}>
                <li><Typography>Develop React-based portfolio platform for national brand campaigns</Typography></li>
                <li><Typography>Implement modular case study components for Amazon Alexa initiative</Typography></li>
                <li><Typography>Deliver frontend enhancements for UF College of Engineering website</Typography></li>
              </ul>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', mb: 3 }}>
            <Avatar src={hicvLogo} sx={{ width: 56, height: 56, mr: 2, border: '1px solid #eee' }} variant="rounded" />
            <Box sx={{width: '100%'}}>
               <Grid container justifyContent="space-between">
                <Grid item><Typography variant="h6" sx={{ fontWeight: 'bold' }}>Software Developer Intern</Typography></Grid>
                <Grid item><Typography variant="body1" color="grey.700">May 2024 – Aug. 2024</Typography></Grid>
              </Grid>
              <Typography variant="body1" sx={{ fontStyle: 'italic' }}>Holiday Inn Club Vacations</Typography>
              <ul style={{marginTop: '8px', paddingLeft: '20px'}}>
                <li><Typography>Built Salesforce-based features for customer web & mobile application in a 3-person dev team</Typography></li>
                <li><Typography>Developed a driver license scanner with JavaScript, cutting manual data entry by 95%</Typography></li>
                <li><Typography>Implemented secure login & self-registration, streamlining user/contact data capture</Typography></li>
                <li><Typography>Designed website architecture and UX to improve usability and user engagement</Typography></li>
              </ul>
            </Box>
          </Box>
        </Box>

        {/* Personal Projects */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', borderBottom: `2px solid ${ORANGE_LIGHT}`, pb: 1, mb: 2 }}>
            Personal Projects
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">
              <Button
                variant="outlined"
                onClick={() => navigate('/project/pave')}
                sx={{
                  // Match the style of the 'View My Resume' button
                  borderColor: ORANGE_DARK,
                  color: ORANGE_DARK,
                  '&:hover': {
                    borderColor: ORANGE_DARK,
                    backgroundColor: 'rgba(223, 112, 39, 0.1)',
                  },
                  // Adjust for alignment and inline appearance
                  p: 0,
                  verticalAlign: 'baseline',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: 'inherit',
                  fontFamily: 'inherit',
                }}
              >
                Pave
              </Button>
              <Box component="span" sx={{ color: 'grey.700', fontWeight: 'normal' }}> | React Native, Flask, SQLite, YOLO</Box>
            </Typography>
            <ul style={{marginTop: '8px', paddingLeft: '20px'}}>
              <li><Typography>Designed cross-platform 311 reporting app (React Native/Expo)</Typography></li>
              <li><Typography>Developed Flask backend and SQLite data model for structured civic report intake</Typography></li>
              <li><Typography>Integrated YOLOv8 for automated detection of infrastructure issues (e.g., potholes, litter)</Typography></li>
              <li><Typography>Engineered data ingestion pipeline to merge public 311 records with user-submitted reports</Typography></li>
            </ul>
          </Box>
          <Box>
            <Typography variant="h6">
              <Box component="span" sx={{ fontWeight: 'bold' }}>GNV Events</Box>
              <Box component="span" sx={{ color: 'grey.700', fontWeight: 'normal' }}> | Go, SQLite, Gin, GORM</Box>
            </Typography>
            <ul style={{marginTop: '8px', paddingLeft: '20px'}}>
              <li><Typography>Built backend for local event tracker; designed RESTful APIs with Gin</Typography></li>
              <li><Typography>Scraped event data with Go Colly, reducing manual collection effort by 97%</Typography></li>
              <li><Typography>Implemented optimized SQLite database to store event, user, and organizer data</Typography></li>
              <li><Typography>Collaborated in an Agile team to iteratively enhance backend performance and feature set</Typography></li>              
            </ul>
          </Box>
        </Box>

        {/* Skills */}
        <Box>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', borderBottom: `2px solid ${ORANGE_LIGHT}`, pb: 1, mb: 2 }}>
            Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {['Python', 'JavaScript', 'Go', 'C++', 'SQL', 'React', 'Flask', 'Gin', 'Expo', 'Tailwind', 'NumPy', 'Pandas', 'GeoPandas', 'Matplotlib', 'Git', 'ArcGIS', 'Salesforce'].map(skill => (
              <Chip label={skill} key={skill} sx={{ backgroundColor: BLUE_LIGHTER, color: 'grey.800', fontWeight: 500 }} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ResumePage;
