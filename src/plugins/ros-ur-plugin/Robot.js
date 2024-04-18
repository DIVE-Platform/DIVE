// React
import React, { useState, useRef, useEffect } from 'react';
import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Loader, useProgress, OrbitControls } from '@react-three/drei';
import Box from '@mui/material/Box';

// Progress Logger component for GLB models
const ProgressLogger = () => {
    const { active, progress, errors, item, loaded, total } = useProgress();
    useEffect(() => {
        if (active) {
            console.log(`${progress}% loaded`); // Log the loading progress percentage
        }
    }, [progress, active]);

    return null; // This component does not render anything to the DOM
};

// Component for loading GLB models with joint control
const GLBModel = ({ path, joints }) => {
    const modelRef = useRef(); // Ref to the 3D model for direct manipulation

    useFrame((state, delta) => {
        // Animation logic applied each frame
        joints.forEach((joint, index) => {
            if (joint.active) {
                const modelJoint = modelRef.current.getObjectByName(`Joint_${index + 1}`);
                if (modelJoint) {
                    const step = delta * joint.rate;
                    joint.currentAngle += step;
                    modelJoint.rotation.y = joint.currentAngle;
                    // Stop animation when target is reached
                    if ((joint.rate > 0 && joint.currentAngle >= joint.targetAngle) ||
                        (joint.rate < 0 && joint.currentAngle <= joint.targetAngle)) {
                        joint.active = false;
                    }
                }
            }
        });
    });

    const { scene } = useGLTF(path); // Load the GLB model using the useGLTF hook

    return <primitive object={scene} ref={modelRef} />;
};

// Main Robot visualization component
export default function RobotVisualization({ joints, setJoints, sx }) {
    return (
        <Box sx={{ minWidth: 600, minHeight: 400, width: '100%', height: '100%', ...sx }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 15 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    <GLBModel path="/ros-ur-plugin/ur3.glb" joints={joints} />
                </Suspense>
                <OrbitControls />
            </Canvas>
            <ProgressLogger />
            <Loader />
        </Box>
    );
};
