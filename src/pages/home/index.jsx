import React from "react";
import { Container, Content } from "../../components/layout";
import AppBar from "../../components/app-bar";

const actions = [
  { title: "Teste1", url: "#", status: "" },
  { title: "Teste2", url: "#", status: "" },
  { title: "Teste3", url: "#", status: "" },
  { title: "Teste4", url: "#", status: "" },
  { title: "Teste5", url: "#", status: "" },
];

const Home = () => {
  return (
    <Container alignItems="center">
      <AppBar maxWidth="1300px" actions={actions} />
      <Content width="90%" maxWidth="1300px"></Content>
    </Container>
  );
};

export default Home;
