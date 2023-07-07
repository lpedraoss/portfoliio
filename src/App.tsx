
import './App.css'

import imagen2 from './assets/img/png/character.png'

import introduction from './data/introduction.json'
import HeaderPort from './component/pure/header_portfolio';
import GoToDown from './component/pure/gotodown';
import CardProject from './component/pure/card_project';

function App() {
  return (
    <>
      <HeaderPort></HeaderPort>
      <p className="intro-paragraph">
        {introduction.introText}
      </p>
      <section id="content">
        <h1>Contenido del portfolio</h1>
        {/* Resto del contenido */}
        <CardProject></CardProject>
       
      </section>
      <GoToDown></GoToDown>

    </>
  );
}

export default App
