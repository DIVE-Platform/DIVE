
// React
import * as React from 'react';

// Component
import Layout from '@/components/Layout';
import RobotVisualization from '@/plugins/ros-ur-plugin/Robot';


export default function Page() {
    return (
        <Layout>
            <h1>Page</h1>
            <RobotVisualization />
        </Layout>
    );
}