import React from "react";
import { Container, Content } from "../../components/layout";
import AppBar from "../../components/app-bar";

const actions = [
  { title: "Inicio", url: "/", status: "selected" },
  { title: "Projetos", url: "/projects" },
  { title: "Contato", url: "/contact" },
];

const PageHome = () => {
  return (
    <Container $alignItems="center">
      <AppBar $actions={actions} />
      <Content $width="90%">
        
      </Content>
    </Container>
  );
};

export default PageHome;
