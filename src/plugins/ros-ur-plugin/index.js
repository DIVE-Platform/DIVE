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
import Switch from "@mui/material/Switch";
import FormControl from '@mui/material/FormControl';
import Typography from "@mui/material/Typography";
import FormControlLabel from '@mui/material/FormControlLabel';

// Components
import DragDropEdit from '@/plugins/ros-ur-plugin/DragDropEdit';
import RobotVisualization from '@/plugins/ros-ur-plugin/Robot'; 


const defaultExample = [
    { id: 'card-0', joint: 1, angle: 90, time: 2 },
    { id: 'card-1', joint: 2, angle: -45, time: 2 },
    { id: 'card-2', joint: 3, angle: 45, time: 2 },
];

export default function RobotLab({ loadExample=defaultExample }) {
    // Default card structure
    const defaultCard = {
        id: '',
        content: '',
        action: 'move',
        joint: 1,
        angle: 0,
        time: 2,
        synchronous: true,
        running: false,
    };
    
    const [running, setRunning] = useState(false);
    const [repeat, setRepeat] = useState(false);
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

    // Inside your component
    const runningRef = React.useRef(false);

    const handleRun = () => {
        runningRef.current = true;
        setRunning(true);

        handleReset(); // Reset all joints before starting the sequence

        cards.forEach((card, index) => {
            if (!card.synchronous) {
                startAnimation(card.joint - 1, card.angle, card.time);
                setCards(prevCards => prevCards.map((c, idx) => idx === index ? {...c, running: true} : c));
                setTimeout(() => {
                    setCards(prevCards => prevCards.map((c, idx) => idx === index ? {...c, running: false} : c));
                    if (index === cards.length - 1 && repeat && runningRef.current) {
                        handleRun(); // Recursive call to restart the sequence
                    } else if (index === cards.length - 1) {
                        runningRef.current = false;
                        setRunning(false);
                    }
                }, card.time * 1000);
            } else {
                setTimeout(() => {
                    if (!runningRef.current) return;
        
                    startAnimation(card.joint - 1, card.angle, card.time);
                    setCards(prevCards => prevCards.map((c, idx) => idx === index ? {...c, running: true} : c));
        
                    setTimeout(() => {
                        setCards(prevCards => prevCards.map((c, idx) => idx === index ? {...c, running: false} : c));
                        if (index === cards.length - 1 && repeat && runningRef.current) {
                            handleRun(); // Recursive call to restart the sequence
                        } else if (index === cards.length - 1) {
                            runningRef.current = false;
                            setRunning(false);
                        }
                    }, card.time * 1000);
        
                }, index * card.time * 1000); // This assumes cards start one after another
            }
        });
    };

    const handleStop = () => {
        // Ensure to set the ref to false to stop the loop
        runningRef.current = false; 
        setRunning(false);

        // reset
        handleReset();
    }

    const handleReset = () => {
        
        // Set all cards' 'running' state to false to reflect the UI correctly
        setCards(prevCards => prevCards.map(card => ({ ...card, running: false })));
    
        // for each joint, use startAnimation to reset each to 0, in 0.1 seconds
        for (let i = 0; i < joints.length; i++) {
            startAnimation(i, 0, 0.1);
        }
    }

    const handleRepeatChange = (event) => {
        setRepeat(event.target.checked);
    }

    const loadDefaultCards = () => {
        setCards(
            loadExample.map((card, index) => ({
                ...defaultCard,
                ...card,
                id: `card-${index}`,
                content: `Item ${index}`
            }))
        );
    }
    
    return (
        <Grid container spacing={2} sx={{ backgroundColor: 'lightgray', borderRadius: 5, }}>
            <Grid xs={6}>
                <Toolbar spacing={2}>
                    <Button variant="contained" onClick={handleAddCard}>Add Action</Button>
                    <Button variant="outlined" onClick={loadDefaultCards} sx={{ mx: 2}}>Load Example</Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <FormControlLabel control={<Switch checked={repeat} onChange={handleRepeatChange} />} label="Repeat" />
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
            <Grid xs={6}>
                <RobotVisualization 
                    joints={joints} 
                    setJoints={setJoints} 
                    sx={{ backgroundColor: 'white', borderRadius: 5, }} 
                />
            </Grid>
        </Grid>
    );
}