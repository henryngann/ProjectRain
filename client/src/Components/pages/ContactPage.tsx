import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import SideDrawer from "../organisms/SideDrawer";
import TopNavBar from "../organisms/TopNavBar";

const ContactPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <TopNavBar />
      <SideDrawer />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />

        {/* Search Bar Content Here*/}
        <Box marginTop={30}>
          <Divider textAlign="left" sx={{ marginY: 10 }}>
            <Typography variant="h2">Contact Me!</Typography>
          </Divider>
        </Box>
      </Box>
    </Box>
  );
};
export default ContactPage;
