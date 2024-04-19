// React
import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

// Components
import RobotLab from '@/plugins/ros-ur-plugin';

export default function Page() {

    const tutorialExample = [
        { id: 'card-0', joint: 1, angle: 90, time: 2 },
        { id: 'card-1', joint: 2, angle: -45, time: 2 },
        { id: 'card-2', joint: 3, angle: 45, time: 2 },
        { id: 'card-3', joint: 4, angle: 90, time: 2 },
        { id: 'card-4', joint: 5, angle: -45, time: 2 },
        { id: 'card-5', joint: 6, angle: 45, time: 2 },
    ];

    return (
        <Box>

            {/* Content Component */}
            <Stack sx={{ width: '80%', p: 2, margin: 'auto' }}>
                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
                    Chapter 3: Advanced Manipulation of UR Robot Arms
                </Typography>
                <Divider />
                <Box sx={{ p: 2 }} />
                <Typography variant="body1" paragraph sx={{ fontSize: '1.3rem' }}>
                    {`In this chapter, we dive into advanced techniques for manipulating the six joints of a UR robot arm. Each joint can be controlled independently to execute precise movements, critical for tasks requiring complex trajectories or precise positioning.`}
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ pt: 2 }}>
                    Try it Yourself:
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.3rem' }}>
                    {`Below, use the interactive Robot Lab to control each of the six joints of the UR robot arm. Adjust the angle and rotation speed for each joint and observe the resulting movements. Experiment with different combinations of joint movements to see how the robot arm can be manipulated to perform complex tasks. Click the load example button to see a pre-defined sequence of actions, or create your own sequence from scratch.`}
                </Typography>
            </Stack>

            {/* RobotLab component */}
            <RobotLab loadExample={tutorialExample} />

            {/* Navigation buttons */}
            <Stack sx={{ width: '60%', textAlign: 'center', pt: 4, margin: 'auto' }}>
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Button variant="outlined" color="primary" href="/module/1/3">
                        Chapter 3
                    </Button>
                    <Button variant="contained" color="primary" href="/module/1/4">
                        Chapter 4
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}
