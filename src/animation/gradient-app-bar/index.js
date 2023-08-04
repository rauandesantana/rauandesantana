import { keyframes } from "styled-components";

const colorScale = [
  '#ff6969',
  '#fff569',
  '#96ff69',
  '#69ffe6',
  '#69a3ff',
  '#7069ff',
];

export const buttonSelectedEffect = keyframes`
  0% {
    background-color: ${colorScale[1]};
    background-position: 100% 50%;
  } 
  10% {
    background-color: ${colorScale[2]};
    background-position: 0% 50%;
  }
  30% {
    background-color: ${colorScale[3]};
    background-position: 100% 50%;
  } 
  50% {
    background-color: ${colorScale[4]};
    background-position: 0% 50%;
  } 
  70% {
    background-color: ${colorScale[5]};
    background-position: 100% 50%;
  }
  90% {
    background-color: ${colorScale[0]};
    background-position: 0% 50%;
  }
  100% {
    background-color: ${colorScale[1]};
    background-position: 100% 50%;
  } 
`;

export const buttonDefaultEffect = keyframes`
  0% {
    color: ${colorScale[1]};
    background-position: 100% 50%;
  } 
  10% {
    color: ${colorScale[2]};
    background-position: 0% 50%;
  }
  30% {
    color: ${colorScale[3]};
    background-position: 100% 50%;
  } 
  50% {
    color: ${colorScale[4]};
    background-position: 0% 50%;
  } 
  70% {
    color: ${colorScale[5]};
    background-position: 100% 50%;
  }
  90% {
    color: ${colorScale[0]};
    background-position: 0% 50%;
  }
  100% {
    color: ${colorScale[1]};
    background-position: 100% 50%;
  } 
`;

export const buttonHoverEffect = keyframes`
  0% {
    color: ${colorScale[1]};
    border: 2px solid ${colorScale[1]};
    background-position: 100% 50%;
  } 
  10% {
    color: ${colorScale[2]};
    border: 2px solid ${colorScale[2]};
    background-position: 0% 50%;
  }
  30% {
    color: ${colorScale[3]};
    border: 2px solid ${colorScale[3]};
    background-position: 100% 50%;
  } 
  50% {
    color: ${colorScale[4]};
    border: 2px solid ${colorScale[4]};
    background-position: 0% 50%;
  } 
  70% {
    color: ${colorScale[5]};
    border: 2px solid ${colorScale[5]};
    background-position: 100% 50%;
  }
  90% {
    color: ${colorScale[0]};
    border: 2px solid ${colorScale[0]};
    background-position: 0% 50%;
  }
  100% {
    color: ${colorScale[1]};
    border: 2px solid ${colorScale[1]};
    background-position: 100% 50%;
  } 
`;

export const logoEffect = keyframes`
  0% {
    fill: ${colorScale[0]};
    background-position: 100% 50%;
  } 
  10% {
    fill: ${colorScale[1]};
    background-position: 0% 50%;
  }
  30% {
    fill: ${colorScale[2]};
    background-position: 100% 50%;
  } 
  50% {
    fill: ${colorScale[3]};
    background-position: 0% 50%;
  } 
  70% {
    fill: ${colorScale[4]};
    background-position: 100% 50%;
  }
  90% {
    fill: ${colorScale[5]};
    background-position: 0% 50%;
  }
  100% {
    fill: ${colorScale[0]};
    background-position: 100% 50%;
  } 
`;
