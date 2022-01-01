import { blueGrey, orange, red } from "@mui/material/colors";
import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
  interface Palette {
    extra?: PaletteColor;
  }

  interface PaletteOptions {
    extra?: PaletteColorOptions;
  }
}

const breakpoints = {
  values: {
    xs: 0,
    sm: 960,
    md: 1280,
    lg: 1600,
    xl: 1920,
  },
};

const baseTheme = createTheme({ breakpoints, palette: { mode: "light" } });

export const defaultTheme = createTheme({
  breakpoints,
  palette: {
    mode: baseTheme.palette.mode,
    background: {
      default:
        baseTheme.palette.mode === "dark" ? blueGrey[800] : blueGrey[200],
    },
    primary: {
      main: orange[500],
    },
    extra: {
      main: red[500],
    },
  },
  typography: {
    fontFamily: "",
  },
});
