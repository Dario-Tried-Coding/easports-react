import React from "react";
import "../../SCSS/4-Templates/FooterProva.scss";
const FooterProva = () => {
  return (
    <footer>
      <div className="footer-main-link">
        <div className="logo">
          <div className="wrapper-logo">
            <img src="../../assets/img/ea-ring.png" alt="" />
          </div>
        </div>

        <div className="footer-link1">
          <ul>
            <li>Libreria dei giochi</li>
            <li>Registrati</li>
            <li>Riscatta codice</li>
            <li>Origin</li>
            <li>Informazioni</li>
            <li>Accessibilità</li>
            <li>Aiuto</li>
          </ul>
        </div>
      </div>
      <div className="dropdown-price">
        <div className="dropdown">
          <button className="button-link">
            <div>Prezzi per Regione</div>
            <div id="color-nation">
              Switzerland
              <div>
                <img src="/assets/img/arrow_down.svg" alt="" />
              </div>
            </div>
          </button>
          <div className="dropdown-menu information-grid">
            <ul className="dropdown-link">
              <li className="link">Austria</li>
              <li className="link">Belgium</li>
              <li className="link">Bulgaria</li>
              <li className="link">Croatia</li>
              <li className="link">Cyprus</li>
              <li className="link">Czech Republic</li>
              <li className="link">Denmark</li>
              <li className="link">Estonia</li>
              <li className="link">Finland</li>
            </ul>
            <ul className="dropdown-link">
              <li className="link">France</li>
              <li className="link">Germany</li>
              <li className="link">Greece</li>
              <li className="link">Hungary</li>
              <li className="link">Iceland</li>
              <li className="link">Ireland</li>
              <li className="link">Italy</li>
              <li className="link">Latvia</li>
              <li className="link">Liechtenstein</li>
            </ul>
            <ul className="dropdown-link">
              <li className="link">Lithuania</li>
              <li className="link">Luxembourg</li>
              <li className="link">Malta</li>
              <li className="link">Netherlands</li>
              <li className="link">Norway</li>
              <li className="link">Poland</li>
              <li className="link">Portugal</li>
              <li className="link">Romania</li>
              <li className="link">Slovania</li>
            </ul>
            <ul className="dropdown-link">
              <li className="link">Spain</li>
              <li className="link">Sweden</li>
              <li className="link">Switzerland</li>
            </ul>
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
      <div className="dropdown-language">
        <div className="dropdown">
          <button className="button-link">
            <div>Lingua</div>
            <div id="color-nation">
              <span className="fi fi-it"></span>
              <div className="wrapper-text-arrow">
                <div>Italia</div>
                <div>
                  <img src="/assets/img/arrow_down.svg" alt="" />
                </div>
              </div>
            </div>
          </button>
          <div className="dropdown-menu information-grid">
            <ul className="dropdown-link">
              <li className="link">
                <span className="fi fi-us"></span>United States
              </li>
              <li className="link">
                <span className="fi fi-gb"></span>United Kingdom
              </li>
              <li className="link">
                <span className="fi fi-au"></span>Australia
              </li>
              <li className="link">
                <span className="fi fi-fr"></span>France
              </li>
              <li className="link">
                <span className="fi fi-de"></span>Deutschland
              </li>
              <li className="link">
                <span className="fi fi-it"></span>Italia
              </li>
              <li className="link">
                <span className="fi fi-jp"></span>日本
              </li>
              <li className="link">
                <span className="fi fi-pl"></span>Polska
              </li>
              <li className="link">
                <span className="fi fi-br"></span>Brazil
              </li>
            </ul>
            <ul className="dropdown-link">
              <li className="link">
                <span className="fi fi-ru"></span>Россия
              </li>
              <li className="link">
                <span className="fi fi-es"></span>España
              </li>
              <li className="link">
                <span className="fi fi-cz"></span>Česká republika
              </li>
              <li className="link">
                <span className="fi fi-ca"></span>Canada (En)
              </li>
              <li className="link">
                <span className="fi fi-ca"></span>Canada (Fr)
              </li>
              <li className="link">
                <span className="fi fi-dk"></span>Danmark
              </li>
              <li className="link">
                <span className="fi fi-fi"></span>Suomi
              </li>
              <li className="link">
                <span className="fi fi-mx">México</span>
              </li>
              <li className="link">
                <span className="fi fi-nl"></span>Nederland
              </li>
            </ul>
            <ul className="dropdown-link">
              <li className="link">
                <span className="fi fi-se"></span>Sverige
              </li>
              <li className="link">
                <span className="fi fi-xx"></span>中国
              </li>
              <li className="link">
                <span className="fi fi-kr"></span>대한민국
              </li>
              <li className="link">
                <span className="fi fi-xx"></span>繁體中文
              </li>
              <li className="link">
                <span className="fi fi-tr"></span>Türkiye
              </li>
            </ul>
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
        <div className="footer-legal-link">
          <ul>
            <li>Note Legali e Privacy</li>
            <li>Accordo con l'utente</li>
            <li>Politica sulla privacy e sui cookie (i tuoi diritti sulla privacy)</li>
            <li>Aggiornamenti sui servizi online</li>
            <li>Termini di servizio di YouTube</li>
            <li>Norme sulla privacy di Google</li>
            <li>Cookie Preferenze</li>
            <li className="copyright">© 2022 Electronic Arts Inc</li>
          </ul>
          <div className="copyright">© 2022 Electronic Arts Inc.</div>
        </div>

        <div className="footer-privacy">
          <div className="image-privacy">
            <img src="../../assets/img/privacy.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterProva;
