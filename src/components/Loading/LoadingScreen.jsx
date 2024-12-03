import React from 'react'
import Box from "@mui/material/Box";
import { CircularProgress } from '@mui/material';

const LoadingScreen = () => {
    return (
        <Box
            sx={{
                height: "70vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CircularProgress />
        </Box>
    )
}

export default LoadingScreen