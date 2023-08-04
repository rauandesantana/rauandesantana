import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import PageContact from "./pages/contato";
import PageProjects from "./pages/projetos";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<PageProjects />} path="/projects" />
        <Route element={<PageContact />} path="/contact" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
