import { Grid } from "@mui/material";
import React from "react";
import Header from "../molecules/Header";
import NavButton from "../molecules/NavButton";
import "./Global.css";

function Landing() {
  return (
    <Grid
      container
      display="flex"
      width="100vw"
      height="100vh"
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <Header />
      <NavButton />
    </Grid>
  );
}

export default Landing;
