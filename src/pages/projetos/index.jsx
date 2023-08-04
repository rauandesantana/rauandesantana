import React from "react";
import { Container, Content } from "../../components/layout";
import AppBar from "../../components/app-bar";

const actions = [
  { title: "Inicio", url: "/" },
  { title: "Projetos", url: "/projects", status: "selected" },
  { title: "Contato", url: "/contact" },
];

const PageProjects = () => {
  return (
    <Container $alignItems="center">
      <AppBar $actions={actions} />
      <Content $width="90%"></Content>
    </Container>
  );
};

export default PageProjects;
