declare module "@mui/material/styles" {
  interface Theme {
    customBackgrounds: {
      intro: string;
      githubAuth: string;
    };
  }
  interface ThemeOptions {
    customBackgrounds?: {
      intro?: string;
      githubAuth?: string;
    };
  }
}
