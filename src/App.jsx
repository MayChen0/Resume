import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./Pages/Resume";
import Unicharm from "./Pages/unicharm/unicharm";
import Yichuan from "./Pages/yichuan/yichuan";
import Buddah from "./Pages/buddah/buddah";
import Dormitory from "./Pages/dormitory/dormitory";
import Whatif from "./Pages/whatif/whatif";
import Break from "./Pages/break/break";
import Flipped from "./Pages/flipped/flipped";
import Poster from "./Pages/poster/poster";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Resume />} path={"/Resume"}></Route>
        <Route element={<Unicharm />} path={"/Unicharm"}></Route>
        <Route element={<Yichuan />} path={"/Yichuan"}></Route>
        <Route element={<Buddah />} path={"/Buddah"}></Route>
        <Route element={<Dormitory />} path={"/Dormitory"}></Route>
        <Route element={<Whatif />} path={"/Whatif"}></Route>
        <Route element={<Break />} path={"/Break"}></Route>
        <Route element={<Flipped />} path={"/Flipped"}></Route>
        <Route element={<Poster />} path={"/Poster"}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
