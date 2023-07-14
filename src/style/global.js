import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    color: #E0E0E0;
    font-size: 16px;
    box-sizing: border-box;
    user-select: none;
  }

  body {
    max-width: 1800px;
    margin: 0px auto;
    background-color: #0F0F0F;
  }
`;