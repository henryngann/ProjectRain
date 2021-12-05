import { TypographyStyleOptions } from "@mui/material/styles/createTypography";

export interface StyleGuide {
  primary: ColorPallete;
  notification: ColorPallete;
  text: ColorPallete;
  typography: {
    h1: TypographyStyleOptions;
    h2: TypographyStyleOptions;
    subtitle1: TypographyStyleOptions;
    subtitle2: TypographyStyleOptions;
    body1: TypographyStyleOptions;
    body2: TypographyStyleOptions;
    caption1: TypographyStyleOptions;
  };
}

interface ColorPallete {
  1: string;
  2?: string;
  3?: string;
  4?: string;
}

export const globalStyle: StyleGuide = {
  primary: {
    1: "#447BF3",
    2: "#F0F3FE",
  },
  notification: {
    1: "#FF6C63",
  },
  text: {
    1: "#000000",
    2: "#777777",
    3: "#D9D9D9",
    4: "#FFFFFF",
  },
  typography: {
    h1: {
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "33px",
    },
    h2: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "33px",
    },
    subtitle1: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "22px",
    },
    subtitle2: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "19px",
    },
    body1: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "22px",
    },
    body2: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "19px",
    },
    caption1: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "16px",
    },
  },
};
