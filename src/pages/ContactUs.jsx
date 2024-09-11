import React from 'react';
import { Box, Container, Grid, Typography, Button, Input, useTheme, Breadcrumbs, Link } from '@mui/material';

const ContactUs = () => {
  const theme = useTheme();

  return (
    <>
      {/* Header Section with Parallax Background Image */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', md: '30vh' },
          backgroundImage: 'url(/city.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
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
            backgroundColor: 'rgba(0, 45, 125, 0.6)',
            display: 'flex',
            alignItems: 'center',
            padding: 2,
          }}
        >
          {/* Container for Title and Breadcrumbs */}
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {/* Page Title */}
            <Typography variant="h3" sx={{ color: '#fff' }}>
              Contact Us
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
              <Typography color="textPrimary">Contact Us</Typography>
            </Breadcrumbs>
          </Container>
        </Box>
      </Box>

      {/* Contact Form Section */}
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            ml={{ xs: 'auto', lg: 6 }}
            mr={{ xs: 'auto', lg: 6 }}
          >
            <Box
              sx={{
                bgcolor: 'white',
                borderRadius: 'xl',
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                mt: { xs: 20, sm: 18, md: 20 },
                mb: { xs: 20, sm: 18, md: 20 },
                mx: 3,
              }}
            >
              <Box
                sx={{
                  bgcolor: 'info.main',
                  borderRadius: 'lg',
                  p: 2,
                  mx: 2,
                  mt: -3,
                  color: 'white',
                }}
              >
                <Typography variant="h3">Contact us</Typography>
              </Box>
              <Box p={3}>
                <Typography variant="body2" color="textSecondary" mb={3}>
                  For further questions, including partnership opportunities, please email
                  cpd@gmail.com or contact using our contact form.
                </Typography>
                <Box
                  component="form"
                  method="post"
                  autoComplete="off"
                  sx={{ width: '100%' }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Input
                        variant="standard"
                        placeholder="Full Name"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input
                        type="email"
                        variant="standard"
                        placeholder="Email"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        variant="standard"
                        placeholder="What can we help you?"
                        multiline
                        fullWidth
                        rows={6}
                      />
                    </Grid>
                  </Grid>
                  <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                    <Button type="submit" variant="contained" color="info">
                      Send Message
                    </Button>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ContactUs;
