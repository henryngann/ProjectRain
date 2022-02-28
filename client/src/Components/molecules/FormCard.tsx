import { Button, Stack, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import * as React from "react";

export default function MediaControlCard() {
  return (
    <Card elevation={24}>
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          alignContent="space-between"
          justifyContent="space-between"
        >
          <Typography>You can find me on</Typography>
          <Typography>Email</Typography>
          <Typography>Linkedin</Typography>
          <Typography>Github</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
