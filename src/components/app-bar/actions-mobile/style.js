import styled, { css } from "styled-components";
import { buttonDefaultEffect, buttonHoverEffect, buttonSelectedEffect } from '../../../animation/gradient-app-bar'

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

  animation: ${buttonDefaultEffect} 5s linear infinite;

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
  margin: 0px 5px;
  padding: 2px 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Teko';
  text-align: center;
  border: 2px solid transparent;
  border-radius: 1rem;

  ${({ $status }) => (($status === 'gone') && css`
  
    display: none;

  `) || (($status === 'disabled') && css`

    display: flex;
    color: #000;
    opacity: 0.3;
    animation: ${buttonSelectedEffect} 5s linear infinite;
    cursor: default;

  `) || (($status === 'selected') && css`

    display: flex;
    color: #000;
    cursor: default;
    animation: ${buttonSelectedEffect} 5s linear infinite;

  `) || (($status === 'default') && css`

    display: flex;
    animation: ${buttonDefaultEffect} 5s linear infinite;
    cursor: pointer;

    &:hover { 
      animation: ${buttonHoverEffect} 5s linear infinite;
    }

    &:active { 
      animation: ${buttonSelectedEffect} 5s linear infinite; 
    }
    
  `)
  }
`;