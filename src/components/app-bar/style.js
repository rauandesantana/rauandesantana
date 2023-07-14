import styled, { css } from "styled-components";

export const AppBarContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
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
  width: 60px;
  height: 60px;
  margin-right: 10px;
  object-fit: cover;

  ${({disable}) => (disable === true) && css`
    display: none;
  `}
`;

export const AppBarTitle = styled.span`
  font-family: 'Neuton', serif;
`;

export const AppBarActions = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`;

export const AppBarList = styled.ul`
  height: 90%;
  list-style-type: none;
  overflow: hidden;
`;

export const AppBarItem = styled.li`
  float: left;
  margin: 0px 5px;
`;

export const AppBarLink = styled.a`
  display: block;
  padding: 10px 15px;
  text-align: center;  
  text-decoration: none;
  font-family: 'Neuton', serif;
`;