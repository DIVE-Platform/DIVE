
// React
import * as React from 'react';

// MUI 
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// Component
import Layout from '@/components/Layout';
import RobotVisualization from '@/plugins/ros-ur-plugin/Robot';
import ModuleCard from '@/components/Card/ModuleCard';


export default function Page() {
    return (
        <Layout>
            <Typography variant="h4" gutterBottom sx={{ p: 2, }}>
                Modules
            </Typography>
            <Stack direction="row" spacing={2} p={2} useFlexGap flexWrap="wrap">
                <ModuleCard title="Robot Dance Basics" description="Learn the basics of robot dance." link={'/module/1'} />
                <ModuleCard title="Joint Control" description="Control the robot arm joints." link={'/module/2'} />
                <ModuleCard title="End Effector Control" description="Control the robot arm end effector." link={'/module/3'} />
            </Stack>
            {/* <h1>Page</h1>
            <RobotVisualization /> */}
        </Layout>
    );
}