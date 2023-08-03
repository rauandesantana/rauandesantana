import styled, { css } from "styled-components";

export const ButtonShowActions = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 0px;
  cursor: pointer;

  font-family: 'Material Symbols Rounded', 'Roboto', sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  font-feature-settings: "liga";
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;

  visibility: ${({$visible}) => ($visible === false) ? 'hidden' : 'visible' };
`;

export const ActionsContainer = styled.div`
  min-width: 200px;
  padding: 0px 0px 10px 20px;
  position: absolute;
  top: 58px;
  right: 0px;
  z-index: 1000;
  background-color: #000;
  border-bottom-left-radius: 0.5rem;
  -webkit-box-shadow: -3px 10px 13px 5px rgba(10,10,10,0.75);
  -moz-box-shadow: -3px 10px 13px 5px rgba(10,10,10,0.75);
  box-shadow: -3px 10px 13px 5px rgba(10,10,10,0.75);

  display: ${({ $showActions }) => ($showActions === true) ? 'block' : 'none'};
`;

export const ActionsContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 10px 0px 0px;
  border-top: 1px solid #303030;
  
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: end;
`;

export const ActionsListButton = styled.ul`
  list-style-type: none;
  overflow: hidden;
`;

export const ActionsButton = styled.a``;

export const ActionsItem = styled.li`
  float: left;
  margin: 5px;
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