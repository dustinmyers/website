import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { COLORS } from '../themes/cssVariables';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    --breakpoint-xs: 'screen and (max-width: 450px)';
    --breakpoint-sm: 'screen and (max-width: 640px)';
    --breakpoint-md: 'screen and (max-width: 768px)';
    --breakpoint-lg: 'screen and (max-width: 1024px)';
    --breakpoint-xl: 'screen and (max-width: 1280px)';
    --font-title: "Open Sans, sans-serif";
    --font-main: "Open Sans, sans-serif";
  }
  body {
    font-family: var(--title);
    font-size: 1.6rem;
    background: var(--background);
    color: var(--primary1);
    cursor: default;
    transition: .8s ease;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: var(--title);
    transition: .8s ease;
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyles;