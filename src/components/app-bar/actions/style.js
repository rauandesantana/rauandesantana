import styled, { css } from "styled-components";
import { buttonDefaultEffect, buttonHoverEffect, buttonSelectedEffect } from '../../../animation/gradient-app-bar'

export const ActionsContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  
  visibility: ${({ $visible }) => ($visible === false) ? 'hidden' : 'visible'};
`;

export const ActionsListButton = styled.ul`
  list-style-type: none;
  overflow: hidden;
`;

export const ActionsButton = styled.a`
  white-space: nowrap;
`;


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

