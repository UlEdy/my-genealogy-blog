import styled, { createGlobalStyle } from 'styled-components';

//interface
import { TextStyleProps } from '@interface';

//theme
import theme from '@theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    height: 100%;
    background: ${themes.color.primaryLight};
  }
`;

export const TextStyle = styled.p<TextStyleProps>`
    display: block;
    ${props =>
        props.shadow && `text-shadow: 3px 3px 3px ${theme.color.shadow}`};
    text-align: center;
    justify-content: center;
`;

export default GlobalStyle;
