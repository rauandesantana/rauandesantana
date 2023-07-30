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

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${({ width }) => (width !== '') && css`
    width: ${width};
  `}

  ${({ height }) => (height !== '') && css`
    height: ${height};
  `}

  ${({ maxWidth }) => (maxWidth !== '') && css`
    max-width: ${maxWidth};
  `}

  ${({ maxHeight }) => (maxHeight !== '') && css`
    max-height: ${maxHeight};
  `}

  ${({ minWidth }) => (minWidth !== '') && css`
    min-width: ${minWidth};
  `}

  ${({ minHeight }) => (minHeight !== '') && css`
    min-height: ${minHeight};
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
  height: 400px;
    
  ${({ flex }) => (flex !== '') && css`
    flex: ${flex};
  `}

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

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
    
  ${({ flex }) => (flex !== '') && css`
    flex: ${flex};
  `}

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