"use client";
import animationData from "@/lotties/delete_bin/animations/dustbin.json";
import Lottie from "react-lottie";
import { Box, Stack, Typography, Button } from "@mui/material";

const Title = "All-in-One GitHub Cleanup Tool";
const Subtitle = "Declutter your developer life in just a few clicks.";

export function Intro() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Stack
      sx={{
        width: "100%",
        minHeight: "75vh",
        py: { xs: 6 },
        px: 2,
        flexDirection: { xs: "column", md: "row" }, // direction
        gap: 6, // spacing
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Lottie Animation */}
      <Box sx={{ flex: 1, textAlign: "center" }}>
        <Lottie
          options={defaultOptions}
          height={250}
          width={250}
          style={{ cursor: "pointer" }}
        />
      </Box>

      {/* Text Content */}
      <Stack sx={{ flex: 2, gap: 3 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
          {Title}
        </Typography>

        <Typography
          variant="h6"
          component="h2"
          sx={{ color: "text.primary", fontWeight: 500 }}
        >
          {Subtitle}
        </Typography>

        {/* Instead of a paragraph, use bullet points */}
        <Stack sx={{ gap: 1.5 }}>
          <Typography variant="body1" color="text.secondary">
            ✨ Got dusty old repositories taking up space?
          </Typography>
          <Typography variant="body1" color="text.secondary">
            🔀 Random forks you don’t even remember creating?
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ⭐ Stars you clicked long ago but never revisited?
          </Typography>
          <Typography variant="body1" color="text.secondary">
            🚀 Sweep them all away, organize your GitHub, and focus only on
            projects that truly matter.
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 500, mt: 1 }}>
            Because your GitHub deserves better than being a digital junk
            drawer.
          </Typography>
        </Stack>

        {/* Buttons */}
        <Stack
          sx={{
            flexDirection: "row",
            gap: 2,
            mt: 2,
          }}
        >
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={{
              fontWeight: "bold",
              "&:hover": { transform: "scale(1.05)" },
              transition: "0.3s ease",
            }}
          >
            🚀 Get Started
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            href="#about"
            sx={{
              "&:hover": { transform: "scale(1.05)" },
              transition: "0.3s ease",
            }}
          >
            ℹ️ Learn More
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
