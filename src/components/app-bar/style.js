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
  justify-content: flex-start;
  align-items: center;

  ${({maxWidth}) => (maxWidth !== '') && css`
    max-width: ${maxWidth};
  `}
`;

export const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const ImageLogo = styled.img`
  width: 50px;
  height: 50px;
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: 500;
  font-family: 'Kanit', 'Roboto' sans-serif;
  font-style: italic;
`;