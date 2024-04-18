// React
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// MUI 
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';

// MUI: Icons
import DeleteIcon from "@mui/icons-material/Delete";



function ActionCard({ card, handleUpdateCard, handleDeleteCard }) {
    // Event handlers for updating card properties
    const handleActionChange = (event) => {
        handleUpdateCard(card.id, { ...card, action: event.target.value });
    }

    const handleJointChange = (event) => {
        handleUpdateCard(card.id, { ...card, joint: event.target.value });
    }

    const handleJointAngleChange = (event) => {
        handleUpdateCard(card.id, { ...card, angle: event.target.value });
    }

    const handleTimeChange = (event) => {
        handleUpdateCard(card.id, { ...card, time: event.target.value });
    }

    const handleSynchronousChange = (event) => {
        handleUpdateCard(card.id, { ...card, synchronous: event.target.checked });
    }

    return (
        <Card sx={{ padding: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">

                {/* Select Action (move or not move) */}
                <Chip label="Action" color="success" variant="outlined" />

                {/* Select Joint Control (there are 6 arms) */}
                <FormControl>
                    <InputLabel>Joint</InputLabel>
                    <Select
                        value={card.joint}
                        onChange={handleJointChange}
                        sx={{ minWidth: 120 }}
                    >
                        {[1, 2, 3, 4, 5, 6].map((joint) => (
                            <MenuItem key={joint} value={joint}>Joint {joint}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Input for joint angle, min={-Math.PI} max={Math.PI} value={angle} */}
                <FormControl>
                    <TextField
                        label="Angle"
                        type="number"
                        value={card.angle}
                        onChange={handleJointAngleChange}
                        sx={{ maxWidth: 100 }}
                    />
                </FormControl>

                {/* Input for time */}
                <FormControl>
                    <TextField
                        label="Time"
                        type="number"
                        value={card.time}
                        onChange={handleTimeChange}
                        sx={{ maxWidth: 100 }}
                    />
                </FormControl>

                {/* Synchronous Switch */}
                <FormControl>
                    <Typography>Synchronous</Typography>
                    <Switch
                        checked={card.synchronous}
                        onChange={handleSynchronousChange}
                        name="synchronous"
                    />
                </FormControl>

                {/* Delete Button */}
                <Box sx={{ flexGrow: 1 }} />
                <Button startIcon={<DeleteIcon />} onClick={() => handleDeleteCard(card.id)} color="error">
                    Delete
                </Button>
            </Stack>
        </Card>
    );
}

export default function DragDropEdit({ defaultCard, cards, setCards, jointAngles, setJointAngles }) {

    const handleUpdateCard = (id, updatedCard) => {
        setCards(cards.map(card => card.id === id ? updatedCard : card));
    };

    const handleDeleteCard = (id) => {
        setCards(cards.filter(card => card.id !== id));
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(cards);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setCards(items);
    };

    return (
        <Box>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="cards">
                    {(provided) => (
                        <Stack {...provided.droppableProps} ref={provided.innerRef} spacing={2} sx={{ margin: 2 }}>
                            {cards.map((card, index) => (
                                <Draggable key={card.id} draggableId={card.id} index={index}>
                                    {(provided) => (
                                        <Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <ActionCard card={card} handleUpdateCard={handleUpdateCard} handleDeleteCard={handleDeleteCard} />
                                        </Box>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </Stack>
                    )}
                </Droppable>
            </DragDropContext>
        </Box>
    );
}