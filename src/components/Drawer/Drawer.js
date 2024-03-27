
// React
import * as React from 'react';

// MUI
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// MUI: Icons
import HomeIcon from '@mui/icons-material/Home';


const drawerWidth = 240;

const DrawerComponent = ({ open, handleDrawerToggle }) => {
    return (
        <Drawer
            variant="persistent"
            open={open}
            onClose={handleDrawerToggle}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Toolbar />
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <Divider /> {/* Divider can be used to separate groups of items */}
                {/* Add more list items here */}
            </List>
        </Drawer>
    );
};

export default DrawerComponent;