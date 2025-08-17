"use client";

import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export const GithubAuth = () => {
  const handleLogin = () => {
    // Your GitHub OAuth logic goes here
    console.log("Redirecting to GitHub login...");
  };

  return (
    <Stack
      sx={{
        textAlign: "center",
        px: 2,
        minHeight: "100vh",
        aligneItems: "center",
        justifyContent: "center",
        scrollSnapAlign: "start",
        gap: 3,
      }}
    >
      {/* Main Heading */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Connect Your GitHub
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ maxWidth: 600, lineHeight: 1.6 }}
      >
        Sign in with your GitHub account to manage and clean up your
        repositories effortlessly. We only request the permissions we need —
        your code stays safe, always.
      </Typography>
      {/* Login Button */}
      <Button
        variant="contained"
        startIcon={<GitHubIcon />}
        onClick={handleLogin}
        size="large"
        sx={{
          textTransform: "none",
          px: 4,
          py: 1.5,
          fontSize: "1.1rem",
          borderRadius: 2,
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: 4,
          },
        }}
      >
        Login with GitHub
      </Button>
    </Stack>
  );
};
