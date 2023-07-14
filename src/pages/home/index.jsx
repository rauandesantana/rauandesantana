import React from "react";
import { Column, Container, ContainerImage, Row } from "../../components/layout";
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
      <ContainerImage image='https://profdanielbrandao.files.wordpress.com/2019/08/microsoft-bosque-programming-language-1.jpg.png'>
        asdadad
      </ContainerImage>
      <Row margin='0px 0px 20px 0px'>
        <Column>
          dsfsfsd
        </Column>
        <Column>
        sdfsdss
        </Column>
      </Row>
    </Container>
  );
};

export default Home;
