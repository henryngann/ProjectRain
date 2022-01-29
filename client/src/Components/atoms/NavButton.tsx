import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const NavButton = () => {
  return (
    <Grid item>
      <Link to="/home">
        <Button>
          <ArrowForwardIcon />
        </Button>
      </Link>
    </Grid>
  );
};

export default NavButton;
