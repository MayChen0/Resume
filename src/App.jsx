import React from "react";
import { Routes, Route } from "react-router-dom";
import Training from "./Pages/training/training";

import Resume from "./Pages/Resume";

function App() {
  return (
    <Routes>
      <Route index element={<Resume />} path={"/Resume"}></Route>
      <Route element={<Training />} path={"/Training"}></Route>
    </Routes>
  );
}

export default App;
