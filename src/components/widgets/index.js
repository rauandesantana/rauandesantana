import styled, { css } from "styled-components";

export const ScrollBox = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: auto;

  ${({ $direction }) => (($direction === 'auto') && css`

    overflow-y: auto;
    overflow-x: auto;

  `) || (($direction === 'vertical') && css`
  
    overflow-y: auto;
    overflow-x: hidden;

  `) || (($direction === 'vertical') && css`
  
    overflow-y: hidden;
    overflow-x: auto;
  
  `)};
`;