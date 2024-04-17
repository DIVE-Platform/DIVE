
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
// import RobotDanceBasics from '@/modules/robot-dance-basics';


const RobotDanceBasics = {
    name: 'Robot Dance Basics',
    description: 'Learn the basics of robot dance',
    link: '/module/1',
    chapters: [
        {
            name: 'Chapter 1',
            link: '/module/1/1',
        },
        {
            name: 'Chapter 2',
            link: '/module/1/2',
        },
        {
            name: 'Chapter 3',
            link: '/module/1/3',
        },
    ],
};

export default function ModuleLayout({ children, params }) {

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
            {children}
        </Layout>
    );
}