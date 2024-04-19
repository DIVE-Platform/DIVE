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
 
            {/* Content Component */}
            <Stack sx={{ width: '80%', p: 2, margin: 'auto' }}>
                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
                    Chapter 2: UR Arm Movement and Control
                </Typography>
                <Divider/>
                <Box sx={{ p: 2 }} />
                <Typography variant="body1" paragraph sx={{ fontSize: '1.3rem' }}>
                    {`In UR robots, arm movements are orchestrated through a sophisticated system of joints and actuators that allow for smooth and precise operation. Each arm is composed of multiple joints—typically six—that can rotate and extend in specific ways to achieve a wide range of motion. This modularity enables the robot to perform complex tasks such as assembly, picking, and placement with high accuracy. The movements of these joints are controlled by servo motors, which are governed by the robot’s control system to ensure exact positioning and fluid motion.`}
                    {/* <br />
                    <br />
                    {`The control system of a UR robot utilizes a blend of software and hardware to manage the kinematics of the arm. Kinematics is the study of motion without considering the forces that cause it. In practical terms, this involves calculating the angles and velocities needed at each joint to achieve a desired position in space. UR robots employ inverse kinematics, a mathematical process that determines the necessary joint configurations to place the end-effector (such as a gripper or tool) at a specific point with a specific orientation. This is crucial for tasks that require high precision, like in production lines or research applications.`}
                    <br />
                    <br />
                    {`Moreover, UR robots are equipped with advanced features like force control and real-time path correction, which enhance their adaptability in dynamic environments. Force control allows the robot to perform tasks that involve interaction with objects by adjusting the force exerted in response to sensory feedback. This is especially useful in assembly operations where different components need to be fitted together with tight tolerances. Real-time path correction ensures that the robot can adjust its movements on the fly, compensating for any deviations from the planned path due to external disturbances or changes in the environment. These capabilities make UR robots highly effective and versatile in a variety of industrial applications.`} */}
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ pt: 2 }}>
                    Try it Yourself: 
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.3rem' }}>
                    {`In the Robot Lab below, you can experiment with the movements of a virtual UR robot arm. Use the drag-and-drop interface to create a sequence of actions for the robot to perform. You can specify the joint, angle, and duration of each action to observe how the arm moves in response. Press the "Run" button to execute the sequence and watch the robot come to life!`}
                </Typography>
            </Stack>

            {/* RobotLab component */}
            <RobotLab />

            {/* Navigation buttons */}
            <Stack sx={{ width: '60%', textAlign: 'center', pt: 4, margin: 'auto' }}>
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Button variant="outlined" color="primary" href="/module/1/2">
                        Chapter 2
                    </Button>
                    <Button variant="contained" color="primary" href="/module/1/3">
                        Chpater 3
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}
