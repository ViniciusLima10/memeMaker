import React from 'react';

import GlobalStyle from './styles/global'
import Home from './pages/Home'

function App() {
  return (
    <>
      <footer class='footer'>
            <p>
            Desenvolvido por Vinicius Lima.<br/><br/>
            
                        <a target="_blank" rel="noreferrer" href="https://github.com/ViniciusLima10"><i class="fab fa-github"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vinicius-almeida-lima-3281771b1/"><i class="fab fa-linkedin-in"></i></a>
        </p>
        </footer>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
