import { createGlobalStyle } from "styled-components";

import colors from "./colors";

const { background, primary, secondary } = colors;

const GlobalStyles = createGlobalStyle`
html {
    font-size: 62.5%;
    --antd-wave-shadow-color: ${primary}; 
}
body {
    margin: 0;
    padding: 0;
    background: ${background};
    font-size: 1.4rem;
    font-family: 'Heebo', sans-serif;
} 
a {
    color: ${primary};
    text-decoration: none;
    &:hover {
        color: ${secondary};
    }
}
  `;

export default GlobalStyles;
