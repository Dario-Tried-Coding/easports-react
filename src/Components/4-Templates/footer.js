import LanguagesBtn from "Components/2-Molecules/LanguagesBtn";

import RegionsBtn from "Components/2-Molecules/RegionsBtn";

import React from "react";
import "../../SCSS/4-Templates/Footer-style.scss";
const Footer = () => {
  return (
    <div className="footer">
      <section>
        <div className="section1">
          <div className="logo">
            <img src="../../Assets/ea-LOGO.png" alt="logo" />
          </div>
          <div className="libreria-giochi">Libreria dei giochi</div>
          <div className="registrati">Registrati</div>
          <div className="riscatta-codice">Riscatta codice</div>
          <div className="EA-app">EA app</div>
          <div className="informazioni">Informazioni</div>
          <div className="accessibilità">Accessibilità</div>
          <div className="aiuto">Aiuto</div>
        </div>
        <div className="section2">
          <div className="privacy">Note legali e privacy</div>
          <div className="accordo-con-utente">Accordo con l'utente</div>
          <div className="cookie-policy">Politica sulla privacy e sui cookie (i tuoi diritti sulla privacy)</div>
          <div className="youtube-policy">Termini di servizio di YouTube</div>
          <div className="google-privacy">Norme sulla privacy di Google</div>
          <div className="eletronic-arts">© 2023 Electronic Arts Inc.</div>
        </div>
      </section>
      <aside>
        <div className="regions">
          <RegionsBtn />
        </div>
        <div className="languages">
          <LanguagesBtn />
        </div>
        <div className="online-services">Aggiornamenti sui servizi online</div>
        <div className="privacy-logo"></div>
      </aside>
    </div>
  );
};

export default Footer;
