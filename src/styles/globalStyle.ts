import { createGlobalStyle } from 'styled-components';

//colors
import { themeColors } from '@/styles/colors';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    height: 100vh;
    font-family: 'Raleway', sans-serif;
    background: ${themeColors.main};
  }
`;
