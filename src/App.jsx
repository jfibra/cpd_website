import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import SeminarSchedules from './pages/SeminarSchedules';
import ContactUs from './pages/ContactUs';

const App = () => {
  // State to manage the current theme mode
  const [mode, setMode] = useState('light');

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Create a theme based on the mode
  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#0055A7', // Your primary color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header toggleTheme={toggleTheme} mode={mode} />
        <main style={{ paddingTop: 55 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/seminar-schedules" element={<SeminarSchedules />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
