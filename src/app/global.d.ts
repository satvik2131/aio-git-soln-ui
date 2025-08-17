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

declare module "@mui/system" {
  interface BreakpointOverrides {
    // Your custom breakpoints
    laptop: true;
    tablet: true;
    mobile: true;
    desktop: true;
    // Remove default breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}
