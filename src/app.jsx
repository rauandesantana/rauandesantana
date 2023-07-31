import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import PageConfig from "./pages/config";
import PageContact from "./pages/contato";
import PageProjects from "./pages/projetos";
import PageAboutMe from "./pages/sobre";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<PageAboutMe />} path="/about-me" />
        <Route element={<PageProjects />} path="/projects" />
        <Route element={<PageContact />} path="/contact" />
        <Route element={<PageConfig />} path="/config" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
