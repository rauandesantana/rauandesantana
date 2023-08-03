import React from "react";
import { Container, Content } from "../../components/layout";
import AppBar from "../../components/app-bar";

const actions = [
  { title: "Inicio", url: "/" },
  { title: "Sobre mim", url: "/about-me" },
  { title: "Projetos", url: "/projects", status: "selected" },
  { title: "Contato", url: "/contact" },
  { title: "Configurações", url: "/config" },
];

const PageProjects = () => {
  return (
    <Container $alignItems="center">
      <AppBar $maxWidth="1300px" $actions={actions} />
      <Content $width="90%" $maxWidth="1300px"></Content>
    </Container>
  );
};

export default PageProjects;
