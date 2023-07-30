import React from 'react';
import { Container, Content, Header, ImageLogo, Title } from './style';


const AppBar = ({ title, actions, disableLogo, maxWidth }) => {
  return (
    <Container>
      <Content maxWidth={maxWidth}>
        <Header>
          {(disableLogo !== true) ? <ImageLogo src='logo192.png' /> : null}
          <Title>{(title !== '') ? title : ''}</Title>
        </Header>
      </Content>
    </Container>
  );
};

export default AppBar;
