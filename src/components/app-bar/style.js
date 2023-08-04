import styled from "styled-components";
import { ReactComponent as LogoSVG } from './logo.svg';
import { logoEffect } from '../../animation/gradient-app-bar'

export const Container = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0px;
  background-color: #000;
  z-index: 1000;

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
  height: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth ?? '1300px'};

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerLogo = styled.div`
  width: 165px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ImageLogo = styled(LogoSVG)`
  width: 165px;
  height: 30px;
  fill: #fff;
  overflow: hidden;
  animation: ${logoEffect} 5s linear infinite;
`;
