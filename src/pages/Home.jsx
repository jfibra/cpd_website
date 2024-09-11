import React from 'react';
import { Container, Typography, Box, Button, Grid, useTheme } from '@mui/material';

const Home = () => {
  const theme = useTheme(); // Get the current theme

  return (
    <>
      {/* Header Section with Background Image */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', md: '90vh' }, // Adjust the height for mobile
          backgroundImage: 'url(/city.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
                height: 'auto'
              }}
            />
          </Box>
        </Box>
      </Box>

        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} lg={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Empowering Filipino <span ></span>
            </Typography>
            <Typography variant="h2" component="h2" gutterBottom style={{ color: '#D32F2F', fontWeight: 'bold' }}>
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
                  maxWidth: 1000,
                  height: 'auto',
                }}
              />
            </Box>
          </Grid>
        </Grid>

      {/* Main Content */}
      <Container
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          minHeight: '100vh',
          padding: 0,
        }}
      >
        <Box my={{ xs: 2, md: 4 }} px={{ xs: 2, md: 0 }}> {/* Adjust margins and padding for mobile */}
          <Typography variant="h5" gutterBottom>
            Continuing Professional Development (CPD) for Real Estate Agents in the Philippines
          </Typography>
          <Typography variant="body1">
            Our seminars and training programs are designed to help you apply for PRC licenses and advance your career in real estate.
          </Typography>
        </Box>
      </Container>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Col-8 */}
          <Grid item xs={12} md={8}>
            {/* Image with Overlay */}
            <Box sx={{ position: 'relative', mb: 4 }}>
              {/* Background Image */}
              <Box
                component="img"
                src="/AboutUs.png"
                alt="About Us"
                sx={{ width: '100%', height: 'auto' }}
              />

              {/* Overlay with Text */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 45, 126, 0.5)', // Blue overlay with some transparency
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'left',
                  padding: 2,
                  textAlign: 'left',
                }}
              >
                {/* Title with Underline */}
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ textDecoration: 'underline', mb: 2 }}
                >
                  About Us
                </Typography>
                {/* Description Text */}
                <Typography variant="body1">
                  Empowering our team with the resources and values to succeed both professionally and personally. Committed to transforming the Philippine real estate industry, we maintain the highest ethical standards to deliver outstanding service. Rooted in trustworthiness, focus, and innovation, we are dedicated to excellence and client satisfaction.
                </Typography>
              </Box>
            </Box>

            {/* Nested Grid for two col-6 */}
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="/Banner1.png"
                  alt="Banner 1"
                  sx={{ width: '100%', height: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="/Banner2.png"
                  alt="Banner 2"
                  sx={{ width: '100%', height: 'auto' }}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Col-4 */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src="/SideBanner1.png"
              alt="Side Banner"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
