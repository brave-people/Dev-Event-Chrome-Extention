import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset'; // style-reset 패키지

const GlobalStyles = createGlobalStyle` 
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        color: white;
    }

    *::-webkit-scrollbar{
        -webkit-appearance: none;
    }
    *::-webkit-scrollbar-thumb{
       background-color:white; 
       border-radius: 15px;
       background-clip:padding-box;
       border:6px solid transparent;
    }
`;

export default GlobalStyles;
