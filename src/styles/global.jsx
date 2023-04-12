import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px 0;
    }

    body {
        background: ${(props) => props.theme['base-background']};
        /* color: ${(props) => props.theme['gray-300']}; */
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;
