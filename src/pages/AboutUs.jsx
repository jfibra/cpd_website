import React from 'react';
import { Box, Container, Grid, Typography, Stack, Icon, Button, Breadcrumbs, Link, useTheme } from '@mui/material';

const AboutUs = () => {
  const theme = useTheme(); // Get the current theme

  return (
    <>
      {/* Header Section with Parallax Background Image */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', md: '30vh' }, // Adjust the height for mobile
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
            padding: 2,
          }}
        >
          {/* Container for Title and Breadcrumbs */}
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'space-between', // Space between title and breadcrumbs
              alignItems: 'center',
            }}
          >
            {/* Page Title */}
            <Typography variant="h3" sx={{ color: '#fff' }}>
              About Us
            </Typography>

            {/* Breadcrumbs */}
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{
                '& .MuiBreadcrumbs-separator': { color: theme.palette.common.white },
                '& .MuiLink-root, & .MuiTypography-root': { color: theme.palette.common.white }, // Make breadcrumbs text white
              }}
            >
              <Link href="/" underline="hover" color="inherit">
                Home
              </Link>
              <Typography color="textPrimary">About Us</Typography>
            </Breadcrumbs>
          </Container>
        </Box>
      </Box>

      {/* About Us Content Section */}
      <Box component="section" py={{ xs: 3, md: 6 }}>
        <Container>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 2.5 }}>
            Filipino Homes is committed to transforming the Philippine real estate landscape through continuous education, innovation, and excellence. We are dedicated to empowering our agents by providing access to top-notch training programs and resources. Our latest initiative, the FilipinoHomes Institute of Real Estate (FIRE), offers online courses covering essential topics such as RESA Law, Real Estate Taxation, and Social Media Marketing. These programs are designed to equip agents with the skills needed to navigate modern challenges and excel in the market.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 2.5 }}>
            Recognized by the Professional Regulation Commission (PRC) and the Professional Regulatory Board of Real Estate Service (PRBRES), our Continuing Professional Development (CPD) programs are accredited and reflect our commitment to maintaining high ethical standards and best practices in the industry. By fostering a culture of trust, collaboration, and lifelong learning, we aim to set a new benchmark in real estate service and client satisfaction.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 2.5 }}>
            Through our initiatives, Filipino Homes is not just about property transactions—it's about creating opportunities for personal and professional growth, ensuring that every agent is well-prepared to deliver exceptional service. Our vision extends beyond business; we aspire to build a trusted community of real estate professionals who are equipped to make a positive impact on the lives of their clients and the industry as a whole.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
