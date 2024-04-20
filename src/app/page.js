
// React
import * as React from 'react';

// MUI 
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// Component
import Layout from '@/components/Layout';
import ModuleCard from '@/components/Card/ModuleCard';


export default function Page() {
    return (
        <Layout>
            <Typography variant="h4" gutterBottom sx={{ p: 2, }}>
                Modules
            </Typography>
            <Stack direction="row" spacing={2} p={2} useFlexGap flexWrap="wrap">
                <ModuleCard title="UR Robot Basics" description="Learn the basics of UR robot conrtols." link={'/module/1/1'} />
                <ModuleCard title="UR Robot Dance Baiscs" description="Teach the UR robot to dance." link={'/module/2/1'} />
                <ModuleCard title="UR Robot Advanced" description="Advanced UR robot controls." />
            </Stack>
            {/* <h1>Page</h1>
            <RobotVisualization /> */}
        </Layout>
    );
}