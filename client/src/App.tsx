import { ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "./Components/pages/Homepage";
import Landing from "./Components/pages/Landing";
import Random from "./Components/pages/Random";
import { defaultTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
