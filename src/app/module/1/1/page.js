// React
import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

// Components
import RobotLab from '@/plugins/ros-ur-plugin';

export default function Page({ params }) {
    return (
        <Box>
 
            {/* Box to contain the title and divider, centered */}
            <Stack sx={{ width: '60%', textAlign: 'center', p: 2, margin: 'auto' }}>
                <Typography variant="h3" gutterBottom>
                    Chapter 1: Welcome to UR Robot Basics
                </Typography>
                <Divider/>
                <Box sx={{ p: 2 }} />
                <Typography variant="body1" paragraph sx={{ textAlign: 'left', fontSize: '1.3rem' }}>
                    {`Embark on an exciting journey into the world of industrial robotics with our introductory module, UR Robot Basics. This module is specifically tailored to acquaint beginners with the essentials of programming and operating Universal Robots' (UR) robotic arms.`}
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'left', fontSize: '1.3rem' }}>
                    {`Throughout this module, you will explore basic concepts of  the fundamentals of robot arm movement and control, and apply your knowledge to program basic tasks using a UR robot.`}
                </Typography>
                <Typography variant="body1" paragraph sx={{ textAlign: 'left', fontSize: '1.3rem' }}>
                    {`Whether you are new to industrial robotics or seeking to enhance your programming skills, this module provides a clear, step-by-step guide to help you begin your exploration of UR robotic arms.`}
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Button variant="outlined" color="secondary" href="/">
                        Go back to Modules
                    </Button>
                    <Button variant="contained" color="primary" href="/module/1/2">
                        Chpater 2
                    </Button>
                </Stack>

            </Stack>

            {/* RobotLab component */}
            {/* <RobotLab /> */}
        </Box>
    );
}
