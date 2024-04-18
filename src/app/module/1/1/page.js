
// React
import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

// Components
// import RobotVisualization from '@/plugins/ros-ur-plugin/Robot'; 
import Flow from '@/components/Flow/Flow';

export default function Page({ params }) {
    
    return (
        <Box>
            <h1>Module: {params.module}</h1>
            <h2>Chapter: {params.chapter}</h2>

            <Grid container spacing={2} height={"90vh"}>

                <Grid item xs={6}>
                    <Flow />
                </Grid>

                <Grid item xs={6}>
                    {/* <RobotVisualization /> */}
                </Grid>

            </Grid>

        </Box>
    );
}
