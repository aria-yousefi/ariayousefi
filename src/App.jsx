import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Navigation } from 'swiper/modules';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Page Components
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PavePage from './pages/PavePage';
import IotAcresPage from './pages/IotAcresPage';
import ScrollToTop from './components/ScrollToTop';

const BLUE_LIGHTER = '#C3E5E7';
const BLUE_LIGHT = '#A5D6D9';
const BLUE_MID = '#699FA1';
const ORANGE_LIGHT = '#DD8627';
const ORANGE_DARK = '#DF7027';

const swiperStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;700&display=swap');

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes levitate {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .swiper {
    width: 400px;
    height: 400px;
    --swiper-navigation-sides-offset: -40px;
    animation: levitate 6s ease-in-out infinite;
    outline: none;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullet-active {
    background-color: ${ORANGE_LIGHT} !important;
  }

  .swiper-button-next, .swiper-button-prev {
    color: ${BLUE_MID} !important;
    transition: transform 0.2s;
  }
  .swiper-button-next:hover, .swiper-button-prev:hover {
    transform: scale(1.2);
  }
`;

const theme = createTheme({
  palette: {
    primary: {
      main: BLUE_LIGHT,
    },
  },
  typography: {
    fontFamily: [
      'Outfit',
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});

// --- Carousel Component ---
const PortfolioCarousel = () => {
  const navigate = useNavigate();

  const slidesData = [
    {
      key: 'about',
      title: 'About Me',
      image: 'src/assets/profile-photo.jpg',
      path: '/about',
    },
    {
      key: 'resume',
      title: 'Resume',
      image: 'src/assets/coding.jpg',
      path: '/resume',
    },
    {
      key: 'pave',
      title: 'Pave',
      image: 'src/assets/pave-logo.png',
      path: '/project/pave',
    },
    {
      key: 'iot-acres',
      title: 'UF IoT ACRES',
      image: 'src/assets/uf-iot.jpg',
      path: '/project/iot-acres',
    },
  ];

  return (
    <Box
      sx={{
        background: `radial-gradient(circle at 5% 15%, ${BLUE_LIGHT} 0%, transparent 30%),
                      radial-gradient(circle at 90% 80%, ${BLUE_LIGHTER} 0%, transparent 35%),
                      #FEFBF6`,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '12vh',
        color: '#343a40',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="h1" sx={{
        fontWeight: 'bold',
        color: 'grey.900',
        opacity: 0,
        animation: 'fadeIn 0.7s ease-out forwards',
        mb: 0.5,
      }}>
        Aria Yousefi
      </Typography>
      <Typography variant="h6" sx={{
        color: 'grey.700',
        opacity: 0,
        animation: 'fadeIn 0.7s ease-out 0.3s forwards',
        mb: 1,
      }}>
        Software Engineering | Urban Systems
      </Typography>
      <Box sx={{ opacity: 0, animation: 'fadeIn 0.7s ease-out 0.5s forwards'}}>
        <IconButton
          aria-label="LinkedIn"
          onClick={() => window.open('https://linkedin.com/in/aria-yousefi-ufl', '_blank')}
          sx={{ color: 'grey.800', '&:hover': { color: ORANGE_DARK, transform: 'scale(1.1)' }, transition: 'transform 0.2s' }}
        >
          <LinkedInIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton
          aria-label="Email"
          onClick={() => window.location.href = 'mailto:aria.yousefi.swe@gmail.com'}
          sx={{ color: 'grey.800', '&:hover': { color: ORANGE_DARK, transform: 'scale(1.1)' }, transition: 'transform 0.2s' }}
        >
          <EmailIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton
          aria-label="GitHub"
          onClick={() => window.open('https://github.com/aria-yousefi', '_blank')}
          sx={{ color: 'grey.800', '&:hover': { color: ORANGE_DARK, transform: 'scale(1.1)' }, transition: 'transform 0.2s' }}
        >
          <GitHubIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>
      <Box sx={{
        opacity: 0,
        animation: 'fadeIn 0.7s ease-out 0.8s forwards',
      }}>
        <Swiper
          effect={'cube'}
          grabCursor={true}
          slidesPerView={1}
          rewind={true}
          cubeEffect={{
            shadow: false,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCube, Pagination, Navigation]}
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.key}>
              <Card sx={{
                width: '90%',
                borderRadius: 2,
                boxShadow: '0 4px 20px -5px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: `0 0 30px -5px ${ORANGE_LIGHT}`,
                } }}>
                <CardActionArea onClick={() => navigate(slide.path)}>
                  <CardMedia component="img" height="250" image={slide.image} alt={slide.title} />
                  <CardContent sx={{ backgroundColor: ORANGE_DARK}}>
                    <Typography gutterBottom variant="h5" component="div" color="white">{slide.title}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

// --- Main App Component ---
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <GlobalStyles styles={swiperStyles} />
      <Routes>
        <Route path="/" element={<PortfolioCarousel />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/project/pave" element={<PavePage />} />
        <Route path="/project/iot-acres" element={<IotAcresPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
