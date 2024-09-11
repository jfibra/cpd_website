import React from 'react';
import { Container, Typography, Box, Grid, useTheme, Button, Avatar } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import GavelIcon from '@mui/icons-material/Gavel';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import StarIcon from '@mui/icons-material/Star';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';

const services = [
  {
    title: 'People Focused',
    description:
      'Empowering our team with knowledge, tools, and values to succeed in both life and career.',
    icon: <PeopleIcon />,
  },
  {
    title: 'Ethical Standards',
    description:
      'Committed to the highest ethical practices, ensuring trust and integrity in all our dealings.',
    icon: <GavelIcon />,
  },
  {
    title: 'Innovative Solutions',
    description:
      'Constantly evolving and adapting to provide innovative solutions in the real estate sector.',
    icon: <LightbulbIcon />,
  },
  {
    title: 'Excellence-Driven',
    description:
      'We strive for excellence in every aspect of our service, ensuring the highest quality and client satisfaction.',
    icon: <StarIcon />,
  },
  {
    title: 'Global Perspective',
    description:
      'Embracing a global outlook while staying deeply rooted in local expertise and knowledge.',
    icon: <PublicIcon />,
  },
  {
    title: 'Trust & Collaboration',
    description:
      'Building lasting relationships through trust, respect, and effective collaboration.',
    icon: <HandshakeIcon />,
  },
];

const HomePage = () => {
  const theme = useTheme(); // Get the current theme

  return (
    <>
      {/* Header Section with Parallax Background Image */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', md: '90vh' }, // Adjust the height for mobile
          backgroundImage: 'url(/city.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Enable parallax effect
          overflow: 'hidden',
        }}
      >
        {/* Overlay Color */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 45, 125, 0.6)', // Bluish color overlay
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.common.white, // White text color for contrast
            textAlign: 'center',
            padding: 2,
          }}
        >
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {/* Ensure the image is visible on all devices and resizes appropriately */}
            <img
              src="/cpd.png"
              alt="CPD Logo"
              style={{
                maxWidth: 300,
                height: 'auto',
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Small Banner Section */}
      <Container sx={{ py: 10 }}>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} lg={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Empowering Filipino <span ></span>
            </Typography>
            <Typography variant="h3" component="h3" gutterBottom style={{ color: '#D32F2F', fontWeight: 'bold' }}>
              Real Estate Professionals
            </Typography>
            <Typography variant="body1" gutterBottom>
              At Filipinohomes, we are dedicated to unlocking the potential of our people. We provide the tools, knowledge, and values necessary for success, fostering growth not only in their careers but also in their lives.
            </Typography>
            <Button
              variant="contained"
              color="error"
              sx={{ marginTop: 2, width: { xs: '100%', sm: 'auto' } }} // Button full width on mobile
            >
              Register Now
            </Button>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'right' }}>
              {/* Ensure the image is visible on all devices and resizes appropriately */}
              <img
                src="/people.png"
                alt="CPD Logo"
                style={{
                  width: '100%',
                  height: 'auto',
                  position: 'relative',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Services Section */}
      <Container sx={{ py: 5 }}>
        {/* Section Title and Subtitle */}
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#0055A7' }}>
          Empowering People
        </Typography>
        <Typography variant="h4" align="center" color="textSecondary" sx={{ pb: 5 }} gutterBottom>
          Transforming Real Estate
        </Typography>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px', // Add padding inside the Box
                  borderLeft: '4px solid transparent', // Initial left border, invisible
                  transition: 'border-color 0.3s, background-color 0.3s, text-shadow 0.3s', // Smooth transition for hover effect
                  '&:hover': {
                    border: '1px solid #9e9e9e', // Left border becomes thick yellow on hover
                    borderLeft: '4px solid #FFD900', // Left border becomes thick yellow on hover
                    '& .MuiAvatar-root': {
                      bgcolor: '#FFD900', // Circle becomes yellow on hover
                    },
                    '& .MuiTypography-root': {
                      color: '#FFD900', // Title text becomes yellow on hover
                    },
                  },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: theme.palette.primary.main, // Initial shade of blue
                    mr: 2, // Margin right
                    width: 60,
                    height: 60,
                    transition: 'background-color 0.3s', // Smooth transition for hover effect
                  }}
                >
                  {service.icon}
                </Avatar>
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      transition: 'color 0.3s', // Smooth transition for hover effect
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
