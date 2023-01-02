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
          <div className="section2-n1">Note legali e privacy</div>
          <div className="section2-n2">Accordo con l'utente</div>
          <div className="section2-n3">Politica sulla privacy e sui cookie (i tuoi diritti sulla privacy)</div>
          <div className="section2-n4">Termini di servizio di YouTube</div>
          <div className="section2-n5">Norme sulla privacy di Google</div>
          <div className="section2-n6">© 2023 Electronic Arts Inc.</div>
        </div>
      </section>
      <aside></aside>
    </div>
  );
};

export default Footer;
