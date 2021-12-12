import { ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "./Screens/Homepage";
import Landing from "./Screens/Landing";
import { defaultTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
