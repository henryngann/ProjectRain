import { ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router";
import ContactPage from "./Components/pages/ContactPage";
import DisplayPage from "./Components/pages/DisplayPage";
import Landing from "./Components/pages/Landing";
import Random from "./Components/pages/Random";
import SearchPage from "./Components/pages/SearchPage";
import { defaultTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/Home" element={<DisplayPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Random" element={<Random />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
