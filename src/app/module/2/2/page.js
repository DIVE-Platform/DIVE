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
        { id: 'card-0', joint: 1, angle: 90, time: 1, synchronous: true, },
        { id: 'card-1', joint: 2, angle: -45, time: 1, synchronous: true, },
        { id: 'wave-0', joint: 3, angle: 0, time: 1 },   // Starting position
        { id: 'wave-1', joint: 3, angle: 30, time: 1 },  // Wave up
        { id: 'wave-2', joint: 3, angle: -30, time: 1 }, // Wave down
        { id: 'wave-3', joint: 3, angle: 30, time: 1 },  // Wave up
        { id: 'wave-4', joint: 3, angle: -30, time: 1 }, // Wave down
        { id: 'wave-5', joint: 3, angle: 0, time: 1 },   // Return to start
    ];

    return (
        <Box>

            {/* Content Component */}
            <Stack sx={{ width: '80%', p: 2, margin: 'auto' }}>
                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
                    Chapter 2: Teach the UR Robot to Wave
                </Typography>
                <Divider />
                <Box sx={{ p: 2 }} />
                <Typography variant="body1" paragraph sx={{ fontSize: '1.3rem' }}>
                    {`In this chapter, we explore how to create simple dance movements with the UR robot. We will focus on teaching the robot to wave its arm back and forth, a basic yet visually engaging movement. This is an excellent way to begin understanding how to control individual joints for specific tasks.`}
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ pt: 2 }}>
                    Try it Yourself:
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.3rem' }}>
                    {`Below, use the interactive Robot Lab to control the third joint of the UR robot arm, responsible for arm waving. Adjust the angle and timing to see the waving motion in action. Experiment with the settings to learn how different angles and speeds affect the movement. Click the load example button to see a pre-defined wave sequence, or adjust it to create your own unique gesture.`}
                </Typography>
            </Stack>

            {/* RobotLab component */}
            <RobotLab loadExample={tutorialExample} />

            {/* Navigation buttons */}
            <Stack sx={{ width: '60%', textAlign: 'center', pt: 4, margin: 'auto' }}>
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Button variant="outlined" color="primary" href="/module/1/2">
                        Chapter 2
                    </Button>
                    <Button variant="outlined" color="secondary" href="/">
                        More Modules
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}
