import React from "react";
import { Container } from "../../components/layout";
import AppBar from "../../components/app-bar";

const actionsAppBar = [
  { title: "Inicio", url: "#" },
  { title: "Projetos", url: "#" },
  { title: "Contato", url: "#" },
];

const Home = () => {
  return (
    <Container margin="0px 10%" justifyContent="center">
      <AppBar actions={actionsAppBar} />
    </Container>
  );
};

export default Home;
