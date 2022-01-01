import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box display="flex" marginTop={50} ml={5} mr={5}>
      <Typography variant="h1">Old School Runescape Project</Typography>

      <Button>Button</Button>
    </Box>
  );
};

export default Header;
