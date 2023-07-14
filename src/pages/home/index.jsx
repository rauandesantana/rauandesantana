import React from "react";
import { Column, Container, Row } from "../../components/layout";
import AppBar from "../../components/app-bar";
import { HomeImageBGCode } from "./style";

const actionsAppBar = [
  { title: "Inicio", url: "#" },
  { title: "Projetos", url: "#" },
  { title: "Contato", url: "#" },
];

const Home = () => {
  return (
    <Container margin="0px 10%" justifyContent="center">
      <AppBar actions={actionsAppBar} />
      <Column>
        <HomeImageBGCode>
          fghdfhd
        </HomeImageBGCode>

      </Column>
    </Container>
  );
};

export default Home;
