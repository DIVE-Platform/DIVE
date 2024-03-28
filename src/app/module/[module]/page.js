

"use client";

// React
// React
import React from 'react';

// MUI Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function ModulePage({ params }) {
    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Paper elevation={3} sx={{ p: 4 }}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Welcome to Robot Dance Basics
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Module Introduction
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Dive into the fascinating world of robotics programming with our first module, "Robot Dance Basics". This module is designed to introduce beginners to the fundamentals of robotics programming through an engaging project where you'll teach a robot to dance.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Throughout this module, you will learn about basic concepts of robotics programming, setting up your development environment, the fundamentals of robot movement and control, and finally, choreographing a simple dance routine for a robot.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Whether you're new to robotics or looking to refine your programming skills, this module offers a step-by-step guide to get you started on your journey in robotics programming.
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button variant="contained" color="primary" href="/module/1/1">
                            Start Learning
                        </Button>
                        <Button variant="outlined" color="secondary" href="/">
                            Explore More Modules
                        </Button>
                    </Stack>
                </Paper>
            </Box>
        </Container>
    );
}
