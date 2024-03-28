"use client";

// React
import * as React from 'react';

// MUI
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

// Components
import AppBarComponent from './Appbar/Appbar';
import DrawerComponent from './Drawer/Drawer';


// Global Variables
const drawerWidth = 240;
const drawerWidthClosed = 100;

// Export MainLayout
export default function MainLayout({ children, menuItems }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = React.useState(!isMobile);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex', minHeight: "100vh", }}>
            <CssBaseline />

            {/* Appbar */}
            <AppBarComponent handleDrawerToggle={handleDrawerToggle} />

            {/* Main Content */}
            <Box component="main"
                sx={{
                    marginTop: 6,
                    flexGrow: 1,
                    p: 3,
                    width: {
                        xs: "100%",
                        md: `calc(100% - ${drawerWidth}px)`,
                    },
                    transition: (theme) =>
                        theme.transitions.create("margin", {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.leavingScreen,
                        }),
                    ...(open && {
                        ml: {
                            xs: 0,
                            md: `${drawerWidth}px`,
                        },
                        transition: (theme) =>
                            theme.transitions.create("margin", {
                                easing: theme.transitions.easing.easeOut,
                                duration:
                                    theme.transitions.duration.enteringScreen,
                            }),
                    }),
                }}
            >

                {/* Drawer */}
                <DrawerComponent open={open} handleDrawerToggle={handleDrawerToggle} menuItems={menuItems} />

                {/* <Toolbar /> */}
                <Box>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}
