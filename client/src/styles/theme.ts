import { createTheme, Theme } from "@mui/material";
import { globalStyle, StyleGuide } from "./style-guide";

export interface themeOne extends Theme {
  styleGuide?: StyleGuide;
}
export const theme = (): themeOne => {
  let styleGuide = globalStyle;

  const baseTheme = createTheme({
    palette: {},
    typography: {
      h1: {
        ...styleGuide.typography.h1,
      },
      h2: {
        ...styleGuide.typography.h2,
      },
      subtitle1: {
        ...styleGuide.typography.subtitle1,
      },
      subtitle2: {
        ...styleGuide.typography.subtitle2,
      },
      body1: {
        ...styleGuide.typography.body1,
      },
      body2: {
        ...styleGuide.typography.body2,
      },
      caption: {
        ...styleGuide.typography.caption1,
      },
    },
  });
  return { ...baseTheme, styleGuide };
};
