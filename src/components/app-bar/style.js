import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #000;
  -webkit-box-shadow: 0px 10px 19px 5px rgba(5,5,5,1);
  -moz-box-shadow: 0px 10px 19px 5px rgba(5,5,5,1);
  box-shadow: 0px 10px 19px 5px rgba(5,5,5,1);

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
