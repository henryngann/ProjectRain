import { Typography } from "@mui/material";
import clsx from "clsx";
import React from "react";
import { RnTypographyTypes, useTypography } from "../styles/styles";
export interface TypographyProps {
  variant?: RnTypographyTypes;
}

const RTypography: React.FC<TypographyProps> = ({
  variant = "body1",
  children,
}) => {
  const typographyStyle = useTypography();

  return (
    <Typography className={clsx(typographyStyle[variant])}>
      {children}
    </Typography>
  );
};

export default RTypography;
