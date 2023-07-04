import { useContext } from "react";
import ScrollContext from "../../utils/context/scroll_context";
import imagen1 from '../../assets/img/png/character2.png'
export default function HeaderPort() {
  const scrolling = useContext(ScrollContext);
  const isAtTop = scrolling!.isAtTop ?? false;

  return (

    <header className={`header ${isAtTop ? 'visible' : ''}`}>
      <picture className='header-picture'>
        <img src={imagen1} alt="Example" />
      </picture>
      <h1 className="header-title">Hola, soy Luis</h1>

    </header>
  )
}
