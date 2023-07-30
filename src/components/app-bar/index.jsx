import React from "react";
import { ActionsContent, Container, Content, ImageLogo } from "./style";

const AppBar = ({ activeSearchBar, actions, maxWidth }) => {
  return (
    <Container>
      <Content maxWidth={maxWidth}>
        <ImageLogo src='logo.png' />
        <ActionsContent>
          {activeSearchBar !== false ? <></> : null}
          {actions ? actions.map((item) => <>{item.title}</>) : null}
        </ActionsContent>
      </Content>
    </Container>
  );
};

export default AppBar;
