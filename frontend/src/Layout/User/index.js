import React from 'react';
import { useThemeContext } from '../../ThemeContext';
import { AppBar, Toolbar, Typography, Button, Container, CssBaseline } from '@mui/material';
import Header from '../../Components/Header';
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes
import {Box} from '@mui/material';

// Layout Component
const Layout = () => {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <div>
      <Header />
      {/* Main Content */}
      <Container
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CssBaseline />
        <Box sx={{ pt: 6 }}> {/* pt: 2 corresponds to 16px, for 10px you can use pt: '10px' */}
            <Outlet />
       </Box>
      </Container>
    </div>
  );
};

export default Layout;
