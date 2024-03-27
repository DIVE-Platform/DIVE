"use client";

// React
import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Loader, useProgress } from '@react-three/drei';

// MUI
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// Components
import { useRobotArm } from './context';
import Controls from './control';


// Progress Logger component for GLB models
const ProgressLogger = () => {
    const { active, progress, errors, item, loaded, total } = useProgress();
    useEffect(() => {
        if (active) {
            console.log(`${progress}% loaded`);
        }
    }, [progress, active]);

    return null;
};

// Component for loading GLB models with joint control
const GLBModel = ({ path, jointAngles }) => {
    const modelRef = useRef();
    const { scene } = useGLTF(path);

    useEffect(() => {
        if (modelRef.current && jointAngles) {
            // Update joint rotations based on jointAngles
            jointAngles.forEach((angle, index) => {
                const joint = modelRef.current.getObjectByName(`Joint_${index + 1}`);
                if (joint) {
                    joint.rotation.y = angle;
                }
            });
        }
    }, [jointAngles]);

    return <primitive object={scene} ref={modelRef} />;
};

// Main Robot visualization component
export default function RobotVisualization({ sx }) {
    // const [jointAngles, setJointAngles] = useState(new Array(6).fill(0)); // Assuming 6 joints

    const { jointAngles, handleJointChange } = useRobotArm();

    // const handleJointChange = (index, event, value) => {
    //     const newAngles = [...jointAngles];
    //     newAngles[index] = value;
    //     setJointAngles(newAngles);
    // };

    return (
        <Box sx={{ width: 600, height: 400, ...sx }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 15 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    {/* Adjust paths as necessary */}
                    <GLBModel path="/ros-ur-plugin/ur3.glb" jointAngles={jointAngles} />
                </Suspense>
                <OrbitControls />
            </Canvas>
            <ProgressLogger />
            <Loader />
            {/* Joint Control Sliders */}
            <Controls />
            {/* {jointAngles.map((angle, index) => (
                <Box key={index}>
                    Joint {index + 1}: 
                    <Slider
                        min={-Math.PI}
                        max={Math.PI}
                        value={angle}
                        onChange={(event, value) => handleJointChange(index, event, value)}
                        step={0.01}
                    />
                </Box>
            ))} */}
        </Box>
    );
};
