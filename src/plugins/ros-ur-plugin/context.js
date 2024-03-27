
// React
import React, { createContext, useContext, useState } from 'react';


const RobotArmContext = createContext();

export const useRobotArm = () => useContext(RobotArmContext);

export const RobotArmProvider = ({ children }) => {
    const [jointAngles, setJointAngles] = useState(new Array(6).fill(0)); // Assuming 6 joints

    const handleJointChange = (index, value) => {
        setJointAngles((prevAngles) => {
            const newAngles = [...prevAngles];
            newAngles[index] = value;
            return newAngles;
        });
    };

    return (
        <RobotArmContext.Provider value={{ jointAngles, handleJointChange }}>
            {children}
        </RobotArmContext.Provider>
    );
};
