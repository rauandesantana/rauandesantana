import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    color: #E0E0E0;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    user-select: none;
    cursor: default;
  }

  body {
    max-width: 2000px;
    margin: 0px auto;
    background-color: #1c1c1c;
  }
`;