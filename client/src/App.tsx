import { ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router";
import ContactPage from "./Components/pages/ContactPage";
import Landing from "./Components/pages/Landing";
import RandomPage from "./Components/pages/RandomPage";
import SearchPage from "./Components/pages/SearchPage";
import SearchPageContent from "./Components/pages/SearchPageContent";
import { defaultTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Search" element={<SearchPage />} />
        <Route path="/Search/:name" element={<SearchPageContent />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Random" element={<RandomPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
