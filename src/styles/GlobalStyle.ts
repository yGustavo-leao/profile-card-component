import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Kumbh Sans", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-variation-settings:
            "YOPQ" 300;
    }

    html {
        height: 100%;
    }

    body {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #19a2ae;
    }

    span {
        display: block;
    }
`