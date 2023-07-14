import React from 'react';
import { Container } from '../../components/layout';
import AppBar from '../../components/app-bar';

const Home = () => {
  return (
    <Container margin='0px 10%' justifyContent='center'>
      <AppBar actions={[{title: "Teste1", url: "#"},{title: "Teste2", url: "#"},{title: "Teste3", url: "#"}]} />
    </Container>
  );
};

export default Home;