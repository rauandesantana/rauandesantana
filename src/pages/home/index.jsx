import React from "react";
import { Container, Content } from "../../components/layout";
import AppBar from "../../components/app-bar";

const actions = [
  { title: "Home", url: "#", status: "selected" },
  { title: "Sobre mim", url: "#" },
  { title: "Projetos", url: "#" },
  { title: "Contato", url: "#" },
];

const Home = () => {
  return (
    <Container $alignItems="center">
      <AppBar $maxWidth="1300px" $maxWidthResize="650px" $actions={actions} />
      <Content $width="90%" $maxWidth="1300px"></Content>
    </Container>
  );
};

export default Home;
