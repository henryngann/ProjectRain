import { Card, CardContent, Input } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import TopNavBar from "../organisms/TopNavBar";

const ContactPage = () => {
  const ariaLabel = { "aria-label": "description" };

  return (
    <Box sx={{ display: "flex" }}>
      <TopNavBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Card>
          <CardContent>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <Input defaultValue="Hello world" inputProps={ariaLabel} />
              <Input placeholder="Placeholder" inputProps={ariaLabel} />
              <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
              <Input defaultValue="Error" error inputProps={ariaLabel} />
            </Box>
          </CardContent>
        </Card>

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
