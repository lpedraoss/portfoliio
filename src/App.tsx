

import { useContext } from 'react';
import './App.css'
import imagen1 from './assets/img/png/character2.png'
import imagen2 from './assets/img/png/character.png'
import ScrollContext from './utils/context/scroll_context';
import introduction from './data/introduction.json'
function App() {
  const scrolling = useContext(ScrollContext);
  const isAtTop = scrolling?.isAtTop || false;

  return (
    <>
      <header className={`header ${isAtTop ? 'visible' : ''}`}>
        <picture className='header-picture'>
          <img src={imagen1} alt="Example" />
        </picture>
        <h1 className="header-title">Hola, soy Luis</h1>

      </header>
      <p className="intro-paragraph">
        {introduction.introText}
      </p>
      <section id="content">
        <h1>Contenido del portfolio</h1>
        {/* Resto del contenido */}
        <picture>
          <img src={imagen2} alt="Example" />
        </picture>
      </section>

      <div className={`scroll-down ${isAtTop ? 'visible' : 'hidden'}`}>
        <a href="#content">
          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
            <path d="M12 3L12 21" />
            <path d="M18 15L12 21L6 15" fill='white' />
          </svg>
          Scroll down
        </a>
      </div>
    </>
  );
}

export default App
