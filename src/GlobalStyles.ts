import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'FiraGo' ;
    src: url("./fonts/FiraGo-Regular.woff") format("woff"),
    url("./fonts/FiraGo-Regular.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

body{
    font-family: 'FiraGo', sans-serif;
}

:root{
    --lightGray: #DBDBDB;
}

`;
