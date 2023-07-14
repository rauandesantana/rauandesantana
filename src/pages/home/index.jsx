import React from "react";
import { Column, Container, Row } from "../../components/layout";
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
      <Row margin='0px 0px 20px 0px' >
        <Column>
          
        </Column>
        <Column>
        </Column>
      </Row>
    </Container>
  );
};

export default Home;
