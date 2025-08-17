// theme.ts
import { createTheme } from "@mui/material";
import "@fontsource-variable/fira-code";

const commonSettings = {
  typography: {
    fontFamily: '"Fira Code", "monospace"',
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
};

// Light palette
const lightPalette = {
  mode: "light" as const,
  primary: {
    main: "#2e7d32",
    light: "#60ad5e",
    dark: "#005005",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#ff9800",
    light: "#ffc947",
    dark: "#c66900",
    contrastText: "#000000",
  },
  background: {
    default: "#f4f6f8",
    paper: "#ffffff",
  },
  text: {
    primary: "#1a1a1a",
    secondary: "#4f4f4f",
  },
  gradients: {
    hero: "linear-gradient(135deg, #2e7d32 0%, #60ad5e 100%)",
    section: "linear-gradient(135deg, #ff9800 0%, #ffc947 100%)",
  },
};

// Dark palette
const darkPalette = {
  mode: "dark" as const,
  primary: {
    main: "#81c784",
    light: "#a5d6a7",
    dark: "#388e3c",
    contrastText: "#000000",
  },
  secondary: {
    main: "#ffb74d",
    light: "#ffe97d",
    dark: "#f57c00",
    contrastText: "#000000",
  },
  background: {
    default: "#121212",
    paper: "#1e1e1e",
  },
  text: {
    primary: "#ffffff",
    secondary: "#bbbbbb",
  },
  gradients: {
    hero: "linear-gradient(135deg, #1e1e1e 0%, #388e3c 100%)",
    section: "linear-gradient(135deg, #f57c00 0%, #ffb74d 100%)",
  },
};

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    ...commonSettings,
    palette: mode === "light" ? lightPalette : darkPalette,
  });
