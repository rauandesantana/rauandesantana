import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AppBar from "./components/app-bar";

import HomePage from "./pages/home";
import ContactPage from "./pages/contato";
import ProjectsPage from "./pages/projetos";
import { ScrollBox } from "./components/widgets";

const routes = [
  {
    title: "Inicio",
    appBarButton: true,
    element: <HomePage />,
    path: "/",
    status: null, // default, selected, disabled, gone
  },
  {
    title: "Projetos",
    appBarButton: true,
    element: <ProjectsPage />,
    path: "/projects",
    status: null, // default, selected, disabled, gone
  },
  {
    title: "Contato",
    appBarButton: true,
    element: <ContactPage />,
    path: "/contact",
    status: null, // default, selected, disabled, gone
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <AppBar
        $actions={routes.map((route) => (route.appBarButton ? route : null))}
      />
      <ScrollBox>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.title.concat(route.path)}
              element={route.element}
              path={route.path}
            />
          ))}
        </Routes>
      </ScrollBox>
    </BrowserRouter>
  );
};

export default App;
