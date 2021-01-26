import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: radial-gradient(ellipse at center, #45484d 0%,#000000 100%);
    min-height: 98vh;
    font-family: 'Roboto', sans-serif;
    padding-bottom: 50px;
  }
`;
