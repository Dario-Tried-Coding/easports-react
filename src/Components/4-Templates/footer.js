import LanguagesBtn from "Components/2-Molecules/LanguagesBtn";
import RegionsBtn from "Components/2-Molecules/RegionsBtn";
import logo from "../../Assets/ea-LOGO.png";
import React from "react";
import "../../SCSS/4-Templates/Footer-style.scss";
import logosvg from "../../Assets/logo.jpg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
            <img src={logo} />
      </div>
      <div className="meno-logo">
        <div className="section1">
        <div className="scritte1">
          <div className="libreria-giochi">Libreria dei giochi</div>
          <div className="registrati">Registrati</div>
          <div className="riscatta-codice">Riscatta codice</div>
          <div className="EA-app">EA app</div>
          <div className="informazioni">Informazioni</div>
          <div className="accessibilità">Accessibilità</div>
          <div className="aiuto">Aiuto</div>
       </div> 
       <div className="buttons"> 
          <div className="button1">ciao</div>
          <div className="button2">ciaoooo</div>
       </div>
      </div>
      <div className="section2">
       <div className="scritte2">
          <div className="privacy">Note legali e privacy</div>
          <div className="accordo-con-utente">Accordo con l'utente</div>
          <div className="cookie-policy">Politica sulla privacy e sui cookie (i tuoi diritti sulla privacy)</div>
          <div className="youtube-policy">Termini di servizio di YouTube</div>
          <div className="google-privacy">Norme sulla privacy di Google</div>
          <div className="eletronic-arts">© 2023 Electronic Arts Inc.</div>
          </div>
          <div className="logo2">
          <img src="https://privacy-policy.truste.com/privacy-seal/seal?rid=2593a571-b03b-4951-9a22-c175bd66b351"/>
          </div>
          </div>
          </div>
        
      </div>
  );
};

export default Footer;
