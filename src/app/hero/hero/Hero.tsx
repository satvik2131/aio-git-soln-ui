"use client";

import { Container, Box, Divider, useTheme, Paper } from "@mui/material";
import { Intro } from "./Intro";
import { GithubAuth } from "../github_auth/GithubAuth";
import { ThemeToggleButton } from "@/utils/ThemeToggleButton";
import { About } from "../about/About";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: 2,
          textAlign: "center",
          position: "relative",
          background: `linear-gradient(135deg, 
            ${theme.palette.primary.light} 0%, 
            ${theme.palette.background.default} 100%)`,
          color: theme.palette.text.primary,
          overflow: "hidden",
        }}
      >
        {/* Theme toggle in top-right */}
        <Box sx={{ position: "absolute", top: 16, right: 16 }}>
          <ThemeToggleButton />
        </Box>

        {/* Intro with glass effect */}
        <Container maxWidth="md">
          <Paper
            elevation={6}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              backdropFilter: "blur(12px)",
              backgroundColor:
                theme.palette.mode === "light"
                  ? "rgba(255,255,255,0.7)"
                  : "rgba(30,30,30,0.6)",
              border: "1px solid",
              borderColor: theme.palette.divider,
            }}
          >
            <Intro />
          </Paper>
        </Container>
      </Box>

      {/* Divider */}
      <Divider
        sx={{
          my: { xs: 5, md: 7 },
          mx: "auto",
          width: "60%",
          borderColor: theme.palette.secondary.main,
          opacity: 0.7,
        }}
      >
        Connect Your GitHub
      </Divider>

      {/* GitHub Auth Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: 2,
          background: `radial-gradient(circle at top, 
            ${theme.palette.secondary.light} 0%, 
            ${theme.palette.background.default} 100%)`,
        }}
      >
        <Container maxWidth="sm">
          <GithubAuth />
        </Container>
      </Box>

      {/* Footer / About Section */}
      <Box
        component="footer"
        sx={{
          mt: "auto",
          py: 6,
          px: 2,
          background: `linear-gradient(135deg, 
            ${theme.palette.secondary.light}, 
            ${theme.palette.primary.main})`,
          color: theme.palette.getContrastText(theme.palette.primary.main),
        }}
      >
        <Container maxWidth="md">
          <About />
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
