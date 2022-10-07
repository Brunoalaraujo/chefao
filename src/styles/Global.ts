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
    --apoioBranco: #FCE8F5;

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
