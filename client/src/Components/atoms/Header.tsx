import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Grid container item sm={4} direction="column" justifyContent={"center"}>
      <Grid item>
        <Typography variant="bigTitle">OSRS.GG</Typography>
      </Grid>

      <Grid item>
        <Box ml={1}>
          <Typography variant="subtitle1">Find more, learn smarter.</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
