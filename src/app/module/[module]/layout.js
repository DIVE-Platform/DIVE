
// React
import React from 'react';
// import { usePathname } from 'next/navigation'

// MUI 
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';

// MUI: Icons
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import MenuBookIcon from '@mui/icons-material/MenuBook';

// Components
import Layout from '@/components/Layout';
import RobotDanceBasics from '@/modules/robot-dance-basics';


export default function ModuleLayout({ children, params }) {
    // const pathname = usePathname()

    // Menu Items
    const menuItems = (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  {RobotDanceBasics.name}
                </ListSubheader>
              }
        >
            {RobotDanceBasics.chapters.map((chapter, index) => (
                <ListItemButton sx={{ pl: 4 }} key={index} href={chapter.link} >
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                    <ListItemText primary={chapter.name} />
                </ListItemButton>
            ))}     
        </List>
    );

    return (
        <Layout menuItems={menuItems}>
            {/* <Box>
                <h1>Module: {params.module}</h1>
                Link to chapter 1: <a href="/module/1/1">Chapter 1</a>
            </Box> */}
            {children}
        </Layout>
    );
}