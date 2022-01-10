import { ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router";
import Landing from "./Components/pages/Landing";
import SideDrawerHome from "./Components/pages/SideDrawerHome";
import { defaultTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<SideDrawerHome />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
