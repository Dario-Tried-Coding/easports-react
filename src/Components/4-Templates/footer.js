import Selector from "Components/1-Atoms/Selector";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import style from "../../SCSS/4-Templates/Footer.module.scss";

const Footer = () => {
  const [is1Open, setIs1Open] = useState(false)
  const [is2Open, setIs2Open] = useState(false)

  const selector1Ref = useRef(null)
  const selector2Ref = useRef(null)

  function handleClick(e) {
    if (selector1Ref.current.contains(e.target)) {
      setIs2Open(false)
      setIs1Open(!is1Open)
    } else if (selector2Ref.current.contains(e.target)) {
      setIs1Open(false)
      setIs2Open(!is2Open)
    }
  }

  return (
    <div className={style.footer}>
      <div className={style.logo}>
        <Link to="/"><img src="https://media.contentapi.ea.com/content/dam/eacom/it-it/common/october-ea-ring.png" alt="logo" /></Link>
      </div>

      <div className={style.content}>
        <div className={style.section1}>
          <div className={style.links}>
            <Link to="/games/library">Libreria dei giochi</Link>
            <Link to="/ea-play">Registrati</Link>
            <Link to="/redeem">Riscatta codice</Link>
            <Link to="/ea-app">EA app</Link>
            <Link to="/about">Informazioni</Link>
            <Link to="/">Accessibilità</Link>
            <Link to="/">Aiuto</Link>
          </div>
          <div className={style.buttons}>
            <Selector label="Prezzi per regione" handleClick={handleClick} ref={selector1Ref} isOpen={is1Open} />
            <Selector label="Lingua" handleClick={handleClick} ref={selector2Ref} isOpen={is2Open} />
          </div>
        </div>
        <div className={style.section2}>
          <div className={style.links}>
            <Link to="/legal">Note legali e privacy</Link>
            <Link to="/legal/user-agreement">Accordo con l'utente</Link>
            <Link to="/legal/privacy-and-cookie-policy">Politica sulla privacy e sui cookie (i tuoi diritti sulla privacy)</Link>
            <Link to="/legal/service-updates">Aggiornamenti sui servizi online</Link>
            <p>© 2023 Electronic Arts Inc.</p>
          </div>
          <div className={style.policy}>
            <Link to="/"><img src="https://privacy-policy.truste.com/privacy-seal/seal?rid=2593a571-b03b-4951-9a22-c175bd66b351" alt="policy"/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
