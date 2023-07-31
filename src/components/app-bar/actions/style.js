import styled, { css } from "styled-components";

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

