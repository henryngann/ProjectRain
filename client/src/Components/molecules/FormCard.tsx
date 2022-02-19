import { Button, Stack, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import * as React from "react";

export default function MediaControlCard() {
  return (
    <Card elevation={24} sx={{ height: "45vh" }}>
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          alignContent="space-between"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={8} mb={3}>
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
              helperText={<Typography variant="subtitle2">Subject</Typography>}
            />
          </Stack>
          <TextField
            sx={{ marginBottom: 3 }}
            id="filled-multiline-flexible"
            label="I was thinking..."
            fullWidth
            rows={5}
            helperText={<Typography variant="subtitle2">Message</Typography>}
            multiline
          />

          <Button variant="outlined">Send Messenger Pigeon</Button>
        </Box>
      </CardContent>
    </Card>
  );
}
