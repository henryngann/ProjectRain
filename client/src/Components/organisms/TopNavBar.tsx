import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

const TopNavBar = () => {
  const drawerWidth = 240;
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          A great way to find the info you've been looking for.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
