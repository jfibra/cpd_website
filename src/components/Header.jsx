import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, Box, Container, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = ({ toggleTheme, mode }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { text: 'Home', to: '/' },
        { text: 'About Us', to: '/about-us' },
        { text: 'Seminar Schedules', to: '/seminar-schedules' },
        { text: 'Contact Us', to: '/contact-us' },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Container>
                <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
                    <img src="/cpd.png" alt="CPD Logo" style={{ maxWidth: '75px' }} />
                </Box>
                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <Button
                                component={Link}
                                to={item.to}
                                sx={{
                                    width: '100%',
                                    color: '#0055A7', 
                                }}
                            >
                                {item.text}
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Container>
        </Box>
    );

    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: mode === 'light' ? '#fff' : '#333' }}>
                <Container>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            edge="start"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' }, color: mode === 'light' ? '#0055A7' : '#fff' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                            <img src="/cpd.png" alt="CPD Logo" style={{ maxWidth: '75px' }} />
                        </Box>
                        {/* Desktop Menu */}
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.text}
                                    component={Link}
                                    to={item.to}
                                    sx={{ color: mode === 'light' ? '#0055A7' : '#fff' }} 
                                >
                                    {item.text}
                                </Button>
                            ))}
                        </Box>
                        {/* Toggle Switch for Dark/Light Mode */}
                        <Switch checked={mode === 'dark'} onChange={toggleTheme} />
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: 'block', sm: 'none' } }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Header;
