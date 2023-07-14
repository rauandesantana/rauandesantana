import styled, { css } from "styled-components";

export const AppBarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding-left: 10%;
  
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const AppBarHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const AppBarLogo = styled.img`
  width: 100px;
  height: 50px;
  margin-right: 10px;
  object-fit: cover;

  ${({disable}) => (disable === true) && css`
    display: none;
  `}
`;

export const AppBarTitle = styled.span`
  font-family: 'Neuton', serif;
  font-size: 24px;
  padding-bottom: 8px;
`;

export const AppBarActions = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`;

export const AppBarList = styled.ul`
  list-style-type: none;
  overflow: hidden;
`;

export const AppBarItem = styled.li`
  float: left;
  margin: 0px 5px;
`;

export const AppBarLink = styled.a`
  display: block;
  padding: 5px 15px 8px 15px;
  text-align: center;  
  text-decoration: none;
  font-family: 'Neuton', serif;
  font-size: 18px;
  border-radius: 0.7rem;

  &:hover {
    background-color: #383838;
  }
`;