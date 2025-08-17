import { Container, Paper, Typography, Grid } from "@mui/material";

import React from "react";

type RepoOption = {
  name: string;
  description: string;
};

type RepoListProps = {
  repoOptions: RepoOption[];
};

export default function RepoList({ repoOptions }: RepoListProps) {
  return (
    <Container sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {repoOptions.map((repo) => (
          <Grid item xs={12} md={6} key={repo.name}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="h6">{repo.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {repo.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
