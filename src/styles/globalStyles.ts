import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #584AD3;
        color: #fff;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        overflow: hidden;
        height: 100vh;
    }
`;
