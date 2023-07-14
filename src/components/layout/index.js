import styled, { css } from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;

  ${({ margin }) => (margin !== '') && css`
    margin: ${margin};
  `}

  ${({ padding }) => (padding !== '') && css`
    padding: ${padding};
  `}

  ${({ justifyContent }) => (justifyContent !== '') && css`
    justify-content: ${justifyContent};
  `}

  ${({ alignItems }) => (alignItems !== '') && css`
    align-items: ${alignItems};
  `}

  ${({ border }) => (border !== '') && css`
    border: ${border};
  `}
`;

export const Row = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row nowrap;

  ${({ margin }) => (margin !== '') && css`
    margin: ${margin};
  `}

  ${({ padding }) => (padding !== '') && css`
    padding: ${padding};
  `}
    
  ${({ flex }) => (flex !== '') && css`
    flex: ${flex};
  `}

  ${({ justifyContent }) => (justifyContent !== '') && css`
    justify-content: ${justifyContent};
  `}

  ${({ alignItems }) => (alignItems !== '') && css`
    align-items: ${alignItems};
  `}

  ${({ border }) => (border !== '') && css`
    border: ${border};
  `}
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;

  ${({ margin }) => (margin !== '') && css`
    margin: ${margin};
  `}

  ${({ padding }) => (padding !== '') && css`
    padding: ${padding};
  `}
    
  ${({ flex }) => (flex !== '') && css`
    flex: ${flex};
  `}

  ${({ justifyContent }) => (justifyContent !== '') && css`
    justify-content: ${justifyContent};
  `}

  ${({ alignItems }) => (alignItems !== '') && css`
    align-items: ${alignItems};
  `}

  ${({ border }) => (border !== '') && css`
    border: ${border};
  `}
`;