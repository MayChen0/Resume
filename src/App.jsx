import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./Pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Resume />} path={"/Resume"}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
