import { blueGrey, grey } from "@mui/material/colors";
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
  interface TypographyVariants {
    bigTitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    bigTitle?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bigTitle: true;
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
      main: `#447BF3`,
    },
    secondary: {
      main: `#F0F3FE`,
    },
    info: {
      main: `#FF6C63`,
    },
    extra: {
      main: grey[400],
    },
  },
  typography: {
    bigTitle: {
      fontSize: 144,
      fontWeight: "bold",
    },
    h1: { fontSize: 24, lineHeight: 32.68 },
    h2: { fontSize: 24, fontWeight: 600 },
    subtitle1: {
      fontSize: 36,
    },
    fontFamily: "",
  },
});
