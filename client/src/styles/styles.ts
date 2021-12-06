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
}));
