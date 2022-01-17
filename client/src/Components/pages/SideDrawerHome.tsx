import CasinoIcon from "@mui/icons-material/Casino";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Grid, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../atoms/Searchbar";
import OSRSItems from "../organisms/OSRSItems";

const drawerWidth = 240;

const SideDrawerHome = () => {
  const randomButton = () => {
    console.log("pressed");
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
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
        <Drawer
          sx={{
            height: `100vh`,
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <Typography variant="h2">
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Snipp
              </Link>
            </Typography>
          </Toolbar>

          <Divider />
          <List>
            {["Home", "Search", "Settings"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Random One", "Random Two", "Random Three"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />

          <SearchBar />
          {/* Search Bar Content Here*/}
          <Box marginTop={30}>
            <Divider textAlign="left" sx={{ marginY: 10 }}>
              <Typography variant="h2">hi</Typography>
            </Divider>
            <IconButton
              color="info"
              sx={{ p: "10px" }}
              aria-label="directions"
              onClick={randomButton}
            >
              <CasinoIcon />
            </IconButton>
            <Grid container direction="row" spacing={4}>
              <OSRSItems />
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SideDrawerHome;
