import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "./Screens/Homepage";
import Landing from "./Screens/Landing";

function App() {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
}

export default App;
