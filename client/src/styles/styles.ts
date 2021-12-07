import { makeStyles } from "@mui/styles";
import { themeOne } from "./theme";

export type RnTypographyTypes =
  | "h1"
  | "h2"
  | "body1"
  | "body2"
  | "subtitle1"
  | "subtitle2"
  | "caption1";

export const useTypography: any = makeStyles((theme: themeOne) => ({
  h1: {
    ...theme.styleGuide?.typography.h1,
  },
  h2: {
    ...theme.styleGuide?.typography.h2,
  },
  body1: {
    ...theme.styleGuide?.typography.body1,
  },
  body2: {
    ...theme.styleGuide?.typography.body2,
  },
  subtitle1: {
    ...theme.styleGuide?.typography.subtitle1,
  },
  subtitle2: {
    ...theme.styleGuide?.typography.subtitle2,
  },
  caption1: {
    ...theme.styleGuide?.typography.caption1,
  },
}));
