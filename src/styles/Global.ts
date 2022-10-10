import { createGlobalStyle } from "styled-components";
import KrubFont from "./Fonts";

const GlobalStyle = createGlobalStyle`
  
    :root{
    --destaqueRosa: #CF2CD9;
    --destaqueAzul: #00DAFF;
    --apoioBranco: #FCE8F5;
    --textoCinza: #595959;
  };
  
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: KrubFont;
  }

  *::before,
  *::after{
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Questrial','Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Consolas, 'Courier New', monospace;
  }
`;

export default GlobalStyle;