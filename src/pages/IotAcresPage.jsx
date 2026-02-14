import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Color constants
const BLUE_LIGHTER = '#C3E5E7';
const BLUE_LIGHT = '#A5D6D9';

const IotAcresPage = () => {
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
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 4 }}>
            <IconButton onClick={() => navigate('/')} sx={{ color: 'grey.700' }}>
              <ArrowBackIcon />
            </IconButton>
        </Box>
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'grey.900' }}>
            UF IoT ACRES
          </Typography>
          <Typography variant="h6" paragraph sx={{ color: 'grey.700', mb: 4 }}>
            A full-stack platform for construction site IoT telemetry.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default IotAcresPage;