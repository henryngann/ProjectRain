import { Button, Stack, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import * as React from "react";

export default function MediaControlCard() {
  return (
    <Card sx={{ display: "flex" }} elevation={24}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Stack
            direction="column"
            spacing={3}
            alignContent="flex-start"
            justifyContent="flex-start"
          >
            <Stack direction="row" spacing={8}>
              <TextField
                id="outlined-basic"
                label="John Smith"
                variant="outlined"
                helperText={<Typography variant="subtitle2">Name</Typography>}
              />
              <TextField
                id="outlined-basic"
                label="Website Inquiry"
                variant="outlined"
                helperText={
                  <Typography variant="subtitle2">Subject</Typography>
                }
              />
            </Stack>
            <TextField
              id="filled-multiline-flexible"
              label="I was thinking..."
              rows={5}
              helperText={<Typography variant="subtitle2">Message</Typography>}
              multiline
            />
            <Button variant="outlined" sx={{ width: 100, height: 35 }}>
              Submit
            </Button>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
}
