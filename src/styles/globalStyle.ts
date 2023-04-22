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
    font-family: 'Raleway', sans-serif;
    background: ${themes.color.primary};
  }
`;

export const TextStyle = styled.p`
    text-shadow: 2px 2px 5px ${themes.color.secondary};
`;

export default GlobalStyle;
