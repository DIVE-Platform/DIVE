"use client";

// React
import React from 'react';

// Plugin Contexts
import { RobotArmProvider } from '@/plugins/ros-ur-plugin/context';


export default function PluginProviders({ children }) {
    return (
        <RobotArmProvider>
            {children}
        </RobotArmProvider>
    );
}