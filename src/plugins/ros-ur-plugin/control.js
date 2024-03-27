
// React
import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// Context
import { useRobotArm } from './context';


export default function JointControlPanel() {
    const { jointAngles, handleJointChange } = useRobotArm();

    return (
        <Box>
            {jointAngles.map((angle, index) => (
                <Box key={index}>
                    Joint {index + 1}:
                    <Slider
                        min={-Math.PI}
                        max={Math.PI}
                        value={angle}
                        onChange={(event, value) => handleJointChange(index, value)}
                        step={0.01}
                    />
                </Box>
            ))}
        </Box>
    );
}
