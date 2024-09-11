import React from 'react';
import { Container, Typography, Box, List, ListItem, Breadcrumbs, Link, useTheme } from '@mui/material';

const SeminarSchedules = () => {
  const theme = useTheme(); // Get the current theme

  // Dummy data for seminars
  const seminars = [
    { date: '2024-09-15', title: 'Introduction to Real Estate Law' },
    { date: '2024-09-22', title: 'Advanced Property Management' },
    { date: '2024-09-29', title: 'Real Estate Investment Strategies' },
  ];

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
              Seminar Schedules
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
              <Typography color="textPrimary">Seminar Schedules</Typography>
            </Breadcrumbs>
          </Container>
        </Box>
      </Box>
      <Container>
        <Box my={4}>
          <List>
            {seminars.map((seminar, index) => (
              <ListItem key={index}>
                <Typography variant="body1">
                  {seminar.date}: {seminar.title}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </>
  );
};

export default SeminarSchedules;
