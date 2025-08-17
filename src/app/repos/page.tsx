"use client";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Container,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import { FaSearchengin } from "react-icons/fa";
import RepoList from "./RepoList";

export default function Repos() {
  // sample repo data
  const repoOptions = [
    { name: "react", description: "A JavaScript library for building UIs" },
    { name: "next.js", description: "The React Framework for production" },
    { name: "mui", description: "Material UI React components" },
    { name: "three.js", description: "3D JavaScript library" },
    { name: "nestjs", description: "A progressive Node.js framework" },
  ];

  return (
    <Container>
      <Stack sx={{ p: 4, gap: 3 }}>
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <strong>Repo </strong> Search
          <FaSearchengin />
        </Typography>

        {/**Search */}
        <Autocomplete
          sx={{ px: { md: 15 } }}
          options={repoOptions.map((option) => option.name)}
          renderInput={(params) => (
            <TextField {...params} label="Search repository" />
          )}
        />
      </Stack>
      <RepoList repoOptions={repoOptions} />
    </Container>
  );
}
