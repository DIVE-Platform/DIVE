"use client";

// React
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// MUI 
import Card from "@mui/material/Card";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

// Components
import DragDropEdit from '@/plugins/ros-ur-plugin/DragDropEdit';
import RobotVisualization from '@/plugins/ros-ur-plugin/Robot'; 


export default function RobotLab() {
    // Default card structure
    const defaultCard = {
        id: '',
        content: '',
        action: 'move',
        joint: 1,
        angle: 0,
        time: 2,
        synchronous: true,
    };
    
    const [running, setRunning] = useState(false);
    const [cards, setCards] = useState([]);
    
    const [joints, setJoints] = useState(new Array(6).fill(null).map(() => ({
        currentAngle: 0, // Starting angle for each joint
        targetAngle: 0,  // Target angle for animation
        active: false,   // Animation active state
        rate: 0,         // Rate of change of angle per second
    })));

    // Function to start the animation of a joint
    const startAnimation = (index, targetAngle, duration) => {
        setJoints(joints => joints.map((joint, idx) => {
            if (idx === index) {
                return {
                    ...joint,
                    targetAngle: targetAngle * (Math.PI / 180), // Convert degrees to radians
                    rate: (targetAngle * (Math.PI / 180) - joint.currentAngle) / duration, // Convert degrees to radians
                    active: true,
                };
            }
            return joint;
        }));
    };

    const handleAddCard = () => {
        const newCard = {
            ...defaultCard,
            id: `card-${cards.length}`,
            content: `Item ${cards.length}`
        };
        setCards([...cards, newCard]);
    };

    const handleRun = async () => {
        setRunning(true);
        for (const card of cards) {
            const joint = joints[card.joint - 1];
            if (card.synchronous) {
                await new Promise(resolve => setTimeout(resolve, card.time * 1000));
                startAnimation(card.joint - 1, card.angle, card.time);
            } else {
                startAnimation(card.joint - 1, card.angle, card.time);
                await new Promise(resolve => setTimeout(resolve, card.time * 1000));
            }
        }
        setRunning(false);
    }

    const handleStop = () => {
        setRunning(false);
        setJoints(joints => joints.map(joint => ({
            ...joint,
            active: false,
        })));
    }

    const handleReset = () => {
        // setCards([]);
        // for each joint, set current angle to 0 and use startAnimation to set target angle to 0
        setJoints(joints => joints.map(joint => ({
            ...joint,
            targetAngle: 0,
            rate: -joint.currentAngle / 2,
            active: true,
        })));
    }

    
    return (
        <Grid container spacing={2} sx={{ backgroundColor: 'lightgray', borderRadius: 5, }}>
            <Grid item xs={6}>
                <Toolbar spacing={2}>
                    <Button variant="contained" onClick={handleAddCard}>Add Action</Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button variant="contained" color="warning" onClick={handleReset} sx={{ mx: 2}}>Reset</Button>
                    {running ? 
                        <Button variant="contained" color="error" onClick={handleStop}>Stop</Button>
                        :
                        <Button variant="contained" color="success" onClick={handleRun}>Run</Button>
                    }
                </Toolbar>
                <DragDropEdit 
                    defaultCard={defaultCard}
                    cards={cards} setCards={setCards} 
                    running={running} setRunning={setRunning}

                />
            </Grid>
            <Grid item xs={6}>
                <RobotVisualization 
                    joints={joints} 
                    setJoints={setJoints} 
                    sx={{ backgroundColor: 'white', borderRadius: 5, }} 
                />
            </Grid>
        </Grid>
    );
}