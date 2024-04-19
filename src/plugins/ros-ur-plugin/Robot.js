
// React
import React, { useState, useRef, useEffect } from 'react';
import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Loader, useProgress, OrbitControls } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';

// MUI
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

// MUI: Icons
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import RestoreIcon from '@mui/icons-material/RestartAlt';

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

// Camera SpeedDial component for zoom and reset controls
const CameraSpeedDial = ({ cameraRef }) => {
    const zoomStep = 0.1;

    const handleZoomIn = () => {
        if (cameraRef.current) {
            cameraRef.current.zoom += zoomStep;
            cameraRef.current.updateProjectionMatrix();
        }
    };

    const handleZoomOut = () => {
        if (cameraRef.current) {
            cameraRef.current.zoom = Math.max(cameraRef.current.zoom - zoomStep, 1); // Prevent zooming out too much
            cameraRef.current.updateProjectionMatrix();
        }
    };

    const handleResetCamera = () => {
        if (cameraRef.current) {
            cameraRef.current.position.set(0, 0, 1.5);
            cameraRef.current.lookAt(0, 0, 0);
            cameraRef.current.zoom = 1;
            cameraRef.current.updateProjectionMatrix();
        }
    };

    return (
        <SpeedDial
            ariaLabel="Camera Controls"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<ZoomInIcon />}
        >
            <SpeedDialAction
                key="reset_camera"
                icon={<RestoreIcon />}
                tooltipTitle="Reset Camera"
                onClick={handleResetCamera}
            />
            <SpeedDialAction
                key="zoom_in"
                icon={<ZoomInIcon />}
                tooltipTitle="Zoom In"
                onClick={handleZoomIn}
            />
            <SpeedDialAction
                key="zoom_out"
                icon={<ZoomOutIcon />}
                tooltipTitle="Zoom Out"
                onClick={handleZoomOut}
            />
        </SpeedDial>
    );
};  

// Main Robot visualization component
export default function RobotVisualization({ joints, setJoints, sx }) {
    const cameraRef = useRef();
    return (
        <Box sx={{ display: 'flex', width: '100%', height: '100%', position: 'relative' }}>
            <Box sx={{ minWidth: 600, minHeight: 400, width: '100%', height: '100%', maxHeight: 800, ...sx, flexGrow: 1 }}>
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 1.5]} ref={cameraRef} />
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
            <CameraSpeedDial cameraRef={cameraRef} />
        </Box>
    );
};
