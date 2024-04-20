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
        // Initial setup to starting position
        { id: 'setup-0', joint: 1, angle: 0, time: 1, synchronous: true },
        { id: 'setup-1', joint: 2, angle: 0, time: 1, synchronous: true },
        { id: 'setup-2', joint: 3, angle: 0, time: 1, synchronous: true },
        { id: 'setup-3', joint: 4, angle: 0, time: 1, synchronous: true },
    
        // Spinning and lifting/lowering in synchrony
        { id: 'spin-lift-0', joint: 1, angle: 90, time: 2, synchronous: true },
        { id: 'lift-0', joint: 2, angle: 45, time: 2, synchronous: true },
        { id: 'wave-0', joint: 3, angle: 45, time: 2, synchronous: true },
    
        // Spinning in opposite direction while continuing to wave
        { id: 'spin-wave-1', joint: 1, angle: -90, time: 2, synchronous: true },
        { id: 'lower-1', joint: 2, angle: -45, time: 2, synchronous: true },
        { id: 'wave-1', joint: 3, angle: -45, time: 2, synchronous: true },
    
        // Final position adjustment to neutral
        { id: 'final-0', joint: 1, angle: 0, time: 1, synchronous: true },
        { id: 'final-1', joint: 2, angle: 0, time: 1, synchronous: true },
        { id: 'final-2', joint: 3, angle: 0, time: 1, synchronous: true },
    ];
    
    return (
        <Box>

            {/* Content Component */}
            <Stack sx={{ width: '80%', p: 2, margin: 'auto' }}>
                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
                    Chapter 3: Advanced Dance Techniques - Spin and Wave
                </Typography>
                <Divider />
                <Box sx={{ p: 2 }} />
                <Typography variant="body1" paragraph sx={{ fontSize: '1.3rem' }}>
                    {`In this chapter, we will combine two movements to create a more dynamic dance routine for the UR robot. The robot will perform a spinning motion with its base while simultaneously waving one of its arms. This complex sequence showcases the robot's ability to execute coordinated multi-joint movements.`}
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ pt: 2 }}>
                    Try it Yourself:
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.3rem' }}>
                    {`Below, the interactive Robot Lab allows you to control the first and third joints of the UR robot arm. The first joint will manage the spinning action, while the third joint handles the waving motion. Adjust the angles and timing to refine the dance sequence. Use the load example button to see the combined spinning and waving actions in motion or adjust the parameters to explore other movement combinations.`}
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
                    <Button variant="outlined" color="secondary" href="/">
                        More Modules
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}
