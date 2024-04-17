"use client";

// React
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// MUI 
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";


function App() {
    const [cards, setCards] = useState([]);

    const handleAddCard = () => {
        const newCard = { id: `card-${cards.length}`, content: `Item ${cards.length}` };
        setCards([...cards, newCard]);
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
        <div>
            <Toolbar>
                <Button variant="contained" onClick={handleAddCard}>Add Card</Button>
            </Toolbar>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="cards">
                    {(provided) => (
                        <Stack {...provided.droppableProps} ref={provided.innerRef} spacing={2} sx={{ margin: 2 }}>
                            {cards.map((card, index) => (
                                <Draggable key={card.id} draggableId={card.id} index={index}>
                                    {(provided) => (
                                        <Card
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            sx={{ padding: 2 }}
                                        >
                                            <Typography>{card.content}</Typography>
                                            <Button
                                                startIcon={<DeleteIcon />}
                                                onClick={() => handleDeleteCard(card.id)}
                                            >
                                                Delete
                                            </Button>
                                        </Card>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </Stack>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}

export default App;
