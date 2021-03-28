import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    *{
       margin: 0;
       padding: 0;
       box-sizing: border-box; 
       font-family: 'Roboto', sans-serif;
    }

    body {
        background: #eee;
    }

    button, 
    input {
        outline: 0;
    }

    button {
        cursor: pointer;
    }

    .footer {
    font-weight: bold;
    text-align: center;
    color: var(--dark-blue);
    opacity: 0.6;
    position: relative;
    top: 10px;

    }


    .footer i {
    color: #666666;
    font-size: 1.8rem;
    opacity: 0.6;
    margin-left: 5px;
    }

    i:hover {
    opacity: 1;
    }
`