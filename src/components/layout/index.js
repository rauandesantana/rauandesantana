import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;

  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  border: ${({ $border }) => $border};
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  max-width: ${({ $maxWidth }) => $maxWidth};
  max-height: ${({ $maxHeight }) => $maxHeight};
  min-width: ${({ $minWidth }) => $minWidth};
  min-height: ${({ $minHeight }) => $minHeight};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  border: ${({ $border }) => $border};
`;

export const Row = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  height: 400px;

  flex: ${({ $flex }) => $flex};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  border: ${({ $border }) => $border};
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
    
  flex: ${({ $flex }) => $flex};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  border: ${({ $border }) => $border};
`;