import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #121212;
  -webkit-box-shadow: 0px 0px 25px 17px rgba(18,18,18,1);
  -moz-box-shadow: 0px 0px 25px 17px rgba(18,18,18,1);
  box-shadow: 0px 0px 25px 17px rgba(18,18,18,1);

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 90%;
  max-width: ${({ $maxWidth }) => $maxWidth};
  height: 100%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const ImageLogo = styled.img`
  height: 30px;
`;

export const ActionsContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`;

export const ActionsListButton = styled.ul`
  list-style-type: none;
  overflow: hidden;
`;

export const ActionsButton = styled.a``;

export const ActionsItem = styled.li`
  float: left;
  margin: 0px 5px;
  padding: 8px 15px;
  text-align: center;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 15px;
  font-weight: 500;

  ${({ $status }) => (($status === 'gone') && css`

    display: none;

  `) || (($status === 'disabled') && css`

    display: flex;
    background-color: #1f1f1f;
    cursor: default;

  `) || (($status === 'selected') && css`

    display: flex;
    background-color: grey;
    cursor: default;

  `) || (($status === 'default') && css`

    display: flex;
    cursor: pointer;
    &:hover { background-color: #383838; }
    &:active { background-color: #4a4a4a; }
    
  `)
  }
`;

