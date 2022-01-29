import { Grid } from "@mui/material";
import React from "react";
import Header from "../atoms/Header";
import NavButton from "../atoms/NavButton";
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
