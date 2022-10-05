import { createGlobalStyle } from "styled-components";
import KrubFont from "./Fonts";

const GlobalStyle = createGlobalStyle`
  ${KrubFont}
  
  * {
    margin: 0;
    padding: 0;
    font-family: KrubFont, sans-serif;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *::before,
  *::after{
    box-sizing: border-box;
  }

  :root{
    --destaqueRosa: #CF2CD9;
    --destaqueAzul: #00DAFF;
    

  }

`;

export default GlobalStyle;
