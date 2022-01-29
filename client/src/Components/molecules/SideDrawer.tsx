import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const SideDrawer = () => {
  return (
    <>
      <Toolbar>
        <Typography variant="h2">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Snipp
          </Link>
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {["Home", "Search"].map((text, index) => (
          <Link
            to={`/${text}`}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            <ListItem button key={text} sx={{}}>
              <ListItemIcon>
                {index % 2 === 0 ? <HomeIcon /> : <SearchIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {["Random", "Contact"].map((text, index) => (
          <Link
            to={`/${text}`}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <ShuffleIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default SideDrawer;
