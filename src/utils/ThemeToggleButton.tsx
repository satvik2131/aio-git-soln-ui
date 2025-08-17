"use client";

import { IconButton, Tooltip, Box } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import React from "react";
import { ThemeToggleContext } from "./ThemProvider";
import { useTheme } from "@mui/material";

export function ThemeToggleButton() {
  const toggleTheme = React.useContext(ThemeToggleContext);
  const theme = useTheme();

  const isLight = theme.palette.mode === "light";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // center horizontally
        alignItems: "center", // center vertically
        width: "100%",
        height: "100%", // parent decides height
      }}
    >
      <Tooltip title={`Switch to ${isLight ? "dark" : "light"} mode`}>
        <IconButton
          color="inherit"
          onClick={toggleTheme}
          sx={{
            bgcolor: isLight ? "grey.100" : "grey.800",
            "&:hover": {
              bgcolor: isLight ? "grey.200" : "grey.700",
            },
            borderRadius: "50%",
            boxShadow: 2,
          }}
        >
          {isLight ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
}
