
import React from "react";
import "../../SCSS/4-Templates/Footer-style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
            <img src="https://media.contentapi.ea.com/content/dam/eacom/it-it/common/october-ea-ring.png" />
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
            <div className="dropdown-price">
            <div className="dropdown">
              <button id="swapArrow" className="button-link">
                <div>Prezzi per Regione</div>
                <div id="color-nation">
                  <p>Switzerland <i id="arrow" className="arrow down"></i></p>
                  
                </div>
              </button>
              <div className="dropdown-menu information-grid">
                <div className="dropdown-link">
                  <a href="#" className="link">Austria</a>
                  <a href="#" className="link">Belgium</a>
                  <a href="#" className="link">Bulgaria</a>
                  <a href="#" className="link">Croatia</a>
                  <a href="#" className="link">Cyprus</a>
                  <a href="#" className="link">Czech Republic</a>
                  <a href="#" className="link">Denamrk</a>
                  <a href="#" className="link">Estonia</a>
                  <a href="#" className="link">Finland</a>
                </div>
                <div className="dropdown-link">
                  <a href="#" className="link">France</a>
                  <a href="#" className="link">Germany</a>
                  <a href="#" className="link">Greece</a>
                  <a href="#" className="link">Hungary</a>
                  <a href="#" className="link">Iceland</a>
                  <a href="#" className="link">Ireland</a>
                  <a href="#" className="link">Italy</a>
                  <a href="#" className="link">Latvia</a>
                  <a href="#" className="link">Liechtenstein</a>
                </div>
                <div className="dropdown-link">
                  <a href="#" className="link">Lithuania</a>
                  <a href="#" className="link">Luxembourg</a>
                  <a href="#" className="link">Malta</a>
                  <a href="#" className="link">Netherlands</a>
                  <a href="#" className="link">Norway</a>
                  <a href="#" className="link">Poland</a>
                  <a href="#" className="link">Portugal</a>
                  <a href="#" className="link">Romania</a>
                  <a href="#" className="link">Slovenia</a>
                </div>
                <div className="dropdown-link">
                  <a href="#" className="link">Spain</a>
                  <a href="#" className="link">Sweden</a>
                  <a href="#" className="link">Switzerland</a>
                </div>
              </div>
              <div className="select-price">
                <select name="nation" id="nation">
                  <option value="austria.html">Austria</option>
                  <option value="belgium.html">Belgium</option>
                  <option value="bulgaria.html">Bulgaria</option>
                  <option value="croatia.html">Croatia</option>
                  <option value="cyprus.html">Cyprus</option>
                  <option value="czech-republic.html">Czech Republic</option>
                  <option value="denmark.html">Denmark</option>
                  <option value="estonia.html">Estonia</option>
                  <option value="finland.html">Finland</option>
                  <option value="france.html">France</option>
                  <option value="germany.html">Germany</option>
                  <option value="greece.html">Greece</option>
                  <option value="hungary.html">Hungary</option>
                  <option value="italy.html">Italy</option>
                  <option value="latvia.html">Latvia</option>
                  <option value="liechtenstein.html">Liechtenstein</option>
                  <option value="lituania.html">Lituania</option>
                  <option value="luxembourg.html">Luxembourg</option>
                  <option value="malta.html">Malta</option>
                  <option value="netherlands.html">Netherlands</option>
                  <option value="norway.html">Norway</option>
                  <option value="poland.html">Poland</option>
                  <option value="portugal.html">Portugal</option>
                  <option value="romania.html">Romania</option>
                  <option value="slovenia.html">Slovenia</option>
                  <option value="spain.html">Spain</option>
                  <option value="sweden.html">Sweden</option>
                  <option value="switzerland.html">Switzerland</option>
                </select>
              </div>
            </div>
            </div>
            <div className="dropdown-language">
            <div className="dropdown">
              <button className="button-link">
                <div>Lingua</div>
                <div id="color-nation">
                  <span className="fi fi-it"></span>
                  <div className="wrapper-text-arrow">
                    <div>Italia</div>
                    <div>
                      <img src="" alt="" />
                    </div>
                  </div>
                </div>
              </button>
              <div className="dropdown-menu information-grid">
                <div className="dropdown-link">
                  <a href="#" className="link"><span className="fi fi-us"></span>United States</a>
                  <a href="#" className="link"><span className="fi fi-gb"></span>United Kingdom</a>
                  <a href="#" className="link"><span className="fi fi-au"></span>Australia</a>
                  <a href="#" className="link"><span className="fi fi-fr"></span>France</a>
                  <a href="#" className="link"><span className="fi fi-de"></span>Deutschland</a>
                  <a href="#" className="link"><span className="fi fi-it"></span>Italia</a>
                  <a href="#" className="link"><span className="fi fi-jp"></span>日本</a>
                  <a href="#" className="link"><span className="fi fi-pl"></span>Polska</a>
                  <a href="#" className="link"><span className="fi fi-br"></span>Brasil</a>
                </div>
                <div className="dropdown-link">
                  <a href="#" className="link"><span className="fi fi-ru"></span>Россия</a>
                  <a href="#" className="link"><span className="fi fi-es"></span>España</a>
                  <a href="#" className="link"><span className="fi fi-cz"></span>Česká republika</a>
                  <a href="#" className="link"><span className="fi fi-ca"></span>Canada (En)</a>
                  <a href="#" className="link"><span className="fi fi-ca"></span>Canada (fr)</a>
                  <a href="#" className="link"><span className="fi fi-dk"></span>Danmark</a>
                  <a href="#" className="link"><span className="fi fi-fi"></span>Suomi</a>
                  <a href="#" className="link"><span className="fi fi-mx"></span>México</a>
                  <a href="#" className="link"><span className="fi fi-nl"></span>Nederland</a>
                </div>
                <div className="dropdown-link">
                  <a href="#" className="link"><span className="fi fi-se"></span>Sverige</a>
                  <a href="#" className="link"><span className="fi fi-xx"></span>中国</a>
                  <a href="#" className="link"><span className="fi fi-kr"></span>대한민국</a>
                  <a href="#" className="link"><span className="fi fi-xx"></span>繁體中文</a>
                  <a href="#" className="link"><span className="fi fi-tr"></span>Türkiye</a>
                </div>
              </div>
              <div className="select-language">
                <select name="language" id="language">
                  <option value="us.html">United States</option>
                  <option value="uk.html">United Kingdom</option>
                  <option value="au.html">Australia</option>
                  <option value="fr.html">France</option>
                  <option value="de.html">Deutschland</option>
                  <option value="it.html">Italia</option>
                  <option value="jp.html">日本</option>
                  <option value="pl.html">Polska</option>
                  <option value="br.html">Brasil</option>
                  <option value="ru.html">Россия</option>
                  <option value="es.html">España</option>
                  <option value="cz.html">Česká republika</option>
                  <option value="ca-en.html">Canada (En)</option>
                  <option value="ca-fr.html">Canada (fr)</option>
                  <option value="dk.html">Danmark</option>
                  <option value="fi.html">Suomi</option>
                  <option value="mx.html">México</option>
                  <option value="nl.html">Nederland</option>
                  <option value="se.html">Sverige</option>
                  <option value="#.html">中国</option>
                  <option value="kr.html">대한민국</option>
                  <option value="#.html">繁體中文</option>
                  <option value="tr.html">Türkiye</option>
                </select>
              </div>
          </div>
            </div>
          </div>
        </div>  
        <div className="section2">
          <div className="scritte2">
          <div className="privacy">Note legali e privacy</div>
          <div className="accordo-con-utente">Accordo con l'utente</div>
          <div className="cookie-policy">Politica sulla privacy e sui cookie (i tuoi diritti sulla privacy)</div>
          <div className="google-privacy">Aggiornamenti sui servizi online</div>
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
