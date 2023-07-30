import styled, { css } from 'styled-components';

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
  height: 100%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  ${({maxWidth}) => (maxWidth !== '') && css`
    max-width: ${maxWidth};
  `}
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
  
`;