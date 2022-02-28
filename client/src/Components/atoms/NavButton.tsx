import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const NavButton = () => {
  return (
    <Grid item xs={1} sm={4}>
      <Link to="/Search">
        <Button>
          <ArrowForwardIcon />
        </Button>
      </Link>
    </Grid>
  );
};

export default NavButton;
