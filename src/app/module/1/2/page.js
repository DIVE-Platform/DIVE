
// React
import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

// Components
import RobotLab from '@/plugins/ros-ur-plugin';


export default function Page({ params }) {
    return (
        <Box>
            <h1>Module: {params.module}</h1>
            <h2>Chapter: {params.chapter}</h2>

            <RobotLab />

        </Box>
    );
}
