

import { useContext } from 'react';
import './App.css'

import imagen2 from './assets/img/png/character.png'
import ScrollContext from './utils/context/scroll_context';
import introduction from './data/introduction.json'
import HeaderPort from './component/pure/header_portfolio';
import GoToDown from './component/pure/gotodown';

function App() {
  const scrolling = useContext(ScrollContext);
  const isAtTop = scrolling!.isAtTop ?? false;

  return (
    <>
      <HeaderPort></HeaderPort>
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
      <GoToDown></GoToDown>

    </>
  );
}

export default App
