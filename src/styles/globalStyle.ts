import styled, { createGlobalStyle } from 'styled-components';

//themes
import themes from '@themes';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    height: 100vh;
    background: ${themes.color.primaryLight};
  }
`;

export const TextStyle = styled.p`
    text-shadow: 3px 3px 3px ${themes.color.shadow};
`;

export default GlobalStyle;
