"use client";

import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import CodeIcon from "@mui/icons-material/Code";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export function About() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto", // push footer to bottom when using flex layout
        px: 2,
        py: 6,
      }}
    >
      <Box sx={{ maxWidth: "900px", mx: "auto" }}>
        {/* Title */}
        <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
          About This Project
        </Typography>

        {/* Description */}
        <Typography
          variant="h6"
          color="text.secondary"
          paragraph
          align="center"
        >
          This tool helps you clean up your GitHub with ease — delete multiple
          repositories, unstar the ones you don’t like, and filter them based on
          language, creation date, or even search by name.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Feature List */}
        <List>
          <ListItem>
            <ListItemIcon>
              <GitHubIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Bulk delete GitHub repositories in one go" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StarBorderIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Unstar repos you no longer need" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CodeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Filter repos by programming language" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccessTimeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Sort and filter by creation date" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SearchIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Search for specific repositories instantly" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        {/* Action Buttons */}
        <Stack
          sx={{ my: 3, flexDirection: "row", gap: 2, justifyContent: "center" }}
        >
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href="https://github.com/your-github-repo"
            target="_blank"
          >
            View on GitHub
          </Button>
          <Button
            variant="outlined"
            startIcon={<FavoriteIcon />}
            href="https://www.producthunt.com"
            target="_blank"
          >
            View on Product Hunt
          </Button>
        </Stack>

        {/* Footer Bottom Line */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 4, textAlign: "center" }}
        >
          Made with <FavoriteIcon fontSize="small" color="error" /> by{" "}
          <strong>Satvik</strong> for the community.
        </Typography>
      </Box>
    </Box>
  );
}
