import React from "react";
import { Routes, Route } from "react-router-dom";
import Training from "./Pages/training/training";
import { HashRouter } from "react-router-dom";
import Resume from "./Pages/Resume";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route index element={<Resume />} path={"/Resume"}></Route>
        <Route element={<Training />} path={"/Training"}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
