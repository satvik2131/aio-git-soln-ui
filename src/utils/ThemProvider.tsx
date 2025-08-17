// utils/ThemeProvider.tsx
"use client";

import { useState, useMemo, useCallback, createContext } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "./theme";

interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeToggleContext.Provider value={toggleMode}>
        {children}
      </ThemeToggleContext.Provider>
    </MuiThemeProvider>
  );
}

// Context to toggle theme from anywhere
export const ThemeToggleContext = createContext<() => void>(() => {});
