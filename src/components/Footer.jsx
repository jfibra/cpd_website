import React from 'react';
import { Container, Typography, Box, useTheme } from '@mui/material';

const Footer = ({ toggleTheme, mode }) => {
  const theme = useTheme(); // Access the current theme
  const isLightMode = theme.palette.mode === 'light'; // Check if the current theme is light mode

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
        width: '100%',
        bottom: 0, // Stick to the bottom of the viewport
        backgroundColor: isLightMode ? '#f5f5f5' : '#333', // Adjust background color based on theme mode
        color: isLightMode ? '#000' : '#fff', // Adjust text color for contrast
      }}
    >
      <Container>
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} CPD from Filipino Homes. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
