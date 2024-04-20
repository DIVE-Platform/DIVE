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
                    Chapter 1: UR Robot Dance Baiscs
                </Typography>
                <Divider/>
                <Box sx={{ p: 2 }} />
                <Typography variant="body1" paragraph sx={{ textAlign: 'left', fontSize: '1.3rem' }}>
                    {`Embark on a captivating journey into the rhythmic world of robotics with our engaging module, UR Robot Dance Basics. This module is meticulously designed to introduce beginners to the creative aspect of programming Universal Robots' (UR) robotic arms to execute dance movements.`}
                    <br />
                    <br />
                    {`Throughout this module, you will learn how to apply the basic concepts of robotic movement and control in a novel way by programming a UR robot to perform dance routines. This will include choreographing sequences, synchronizing movements to music, and utilizing the robot’s flexibility to mimic human dance moves.`}
                    <br />
                    <br />
                    {`Whether you are new to robotics or are looking to add an entertaining twist to your technical skills, this module offers a fun and innovative approach to robot programming. Get ready to teach a UR robot how to groove and move to the beat, showcasing its capabilities in a dynamic and visually appealing way.`}
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
