import React from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";

export const LoadingScreen = ({ Height }) => {
  return (
    <Box
      sx={{
        height: Height || "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
