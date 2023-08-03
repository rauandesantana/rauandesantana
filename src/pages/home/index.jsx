import React from "react";
import { Container, Content } from "../../components/layout";
import AppBar from "../../components/app-bar";

const actions = [
  { title: "Inicio", url: "/", status: "selected" },
  { title: "Sobre mim", url: "/about-me" },
  { title: "Projetos", url: "/projects" },
  { title: "Contato", url: "/contact" },
  { title: "Configurações", url: "/config" },
];

const PageHome = () => {
  return (
    <Container $alignItems="center">
      <AppBar $maxWidth="1300px" $actions={actions} />
      <Content $width="90%" $maxWidth="1300px"></Content>
    </Container>
  );
};

export default PageHome;
