import { Typography, TypographyProps } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";

export interface CustomTypographyProps extends TypographyProps {
  contrast?: boolean;
  flex?: "center";
  inline?: boolean;
  bold?: boolean;
}

const useStyles = makeStyles(() => ({
  inline: { display: "inline" },
  bold: { fontWeight: 700 },
}));

const CustomTypography: React.FC<CustomTypographyProps> = ({ children }) => {
  const classes = useStyles();
  return <Typography> {children} </Typography>;
};

export default CustomTypography;
