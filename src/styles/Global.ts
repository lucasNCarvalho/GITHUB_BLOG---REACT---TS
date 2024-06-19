import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0 ;
    box-sizing: border-box
}

body {
    background: ${(props) => props.theme.base_background};
}

body,input,button {
        font: 400 1rem Nunito, sans-serif;
    }
`

