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
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #1c1c1c;
  }

  #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 60px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column nowrap;
  }
`;