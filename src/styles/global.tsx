import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
 
   :root {
        --primary:#F6F6F6;
        --secundary:#322938 ;
        --active:#cfcca8;
        --text:#001408;
   }
  // --text:#331c6c;--secundary:#444c8d;--primary:#F6F6F6;cfc89a
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        overflow-x: hidden;

        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }


    body {
        background: var(--primary);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opcaity: 0.6;
        cursor: not-allowed;
    }
    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
    
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        

        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--primary);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }

    .react-modal-close {

        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.7);
        }
    }
  
::-webkit-scrollbar {
  width: 0.6rem;     
  
}

::-webkit-scrollbar-track {
    border-radius: 1rem;
    background:var(--primary);        /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: var(--secundary);    /* color of the scroll thumb */
  border-radius: 1rem;  
  &:hover {
    background-color:var(--text);
  }
}




`;
