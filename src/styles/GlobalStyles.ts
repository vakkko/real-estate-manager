import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'FiraGo' ;
    src: url("/fonts/FiraGO-Regular.woff2") format("woff2"),
     url("/fonts/FiraGO-Regular.woff") format("woff");
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

button{
    background-color: transparent;
    border: none;
    font-family: 'FiraGo', sans-serif;
    cursor: pointer;
}

a{
    text-decoration: none;
}

input{
    outline: none;
    font-family: 'FiraGo', sans-serif;
}

textarea{
    resize: none;
    outline: none;
    font-family: 'FiraGo', sans-serif;
}

select{
    font-family: 'FiraGo', sans-serif;
    cursor: pointer;
}



:root{
    --lightGray: #DBDBDB;
    --darkBlue: #021526;
    --red: #F93B1D;
    --gray: #808A93;
    --green: #45A849;
    --darkGradient: #02152680;
    --gray: #021526B2
}

`;
