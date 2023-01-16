import React from "react";
import "../../SCSS/4-Templates/LanguagesModal.scss";
import usa from "../../Assets/usa-flag.jpeg";
import russia from "../../Assets/russian-flag-russian-flag-russia-flag-of-russia.jpeg";
import norway from "../../Assets/norway-flag.webp";
import uk from "../../Assets/Flag-United-Kingdom.webp";
import spain from "../../Assets/spain-flag.png";
import sweden from "../../Assets/Sweden-Flag.png";
import australia from "../../Assets/australia-flag.jpeg";
import czekRepublic from "../../Assets/czek-republic.png";
import china from "../../Assets/china-flag.webp";
import france from "../../Assets/france-flag.webp";
import canada from "../../Assets/canada-flag.webp";
import korea from "../../Assets/korea-flag.jpeg";
import germany from "../../Assets/germany-flag.png";
import italy from "../../Assets/italy-flag.png";
import denmark from "../../Assets/denmark-flag.png";
import turkey from "../../Assets/turkey-flag.png";
import japan from "../../Assets/japan-flag.png";
import finland from "../../Assets/finland-flag.png";
import poland from "../../Assets/poland-flag.png";
import mexico from "../../Assets/mexico-flag.webp";
import brazil from "../../Assets/brasil-flag.png";
import netherland from "../../Assets/netherland-flag.png";
const LanguagesModal = () => {
  return (
    <div className="languagesBlock">
      <div className="firstBlock">
        <ul>
          <li>
            <div className="flags">
              <img className="flagsImg" src={usa} alt="usa flag" />
              <p> United States</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={russia} alt="russian flag" />
              <p>Русский</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={norway} alt="norway flag" />
              <p>Norge</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={uk} alt="UK flag" />
              <p>United Kingdom</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={spain} alt="spain flag" />
              <p>España</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={sweden} alt="sweden flag" />
              <p>Sverige</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={australia} alt="australia flag" />
              <p>Australia</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={czekRepublic} alt="czek republic flag" />
              <p> Česká republika</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={china} alt="china flag" />
              <p> 中国</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={france} alt="france flag" />
              <p> France</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={canada} alt="canada flag" />
              <p> Canada (En)</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={korea} alt="korean flag" />
              <p> 대한민국</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={germany} alt="germany flag" />
              <p>Deutschland</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={canada} alt="canada flag" />
              <p>Canada (Fr )</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={china} alt="china flag" />
              <p>繁體中文</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={italy} alt="italian flag" />
              <p>Italia</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={denmark} alt="denmark flag" />
              <p>Denmark</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={turkey} alt="turkey flag" />
              <p>Türkiye</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="secondBlock">
        <ul>
          <li>
            <div className="flags">
              <img className="flagsImg" src={japan} alt="japan flag" />
              <p> 日本</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={finland} alt="finland flag" />
              <p> Suomi</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={poland} alt="poland flag" />
              <p> Polska</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={mexico} alt="mexico flag" />
              <p> México</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={brazil} alt="mexico flag" />
              <p>Brasil</p>
            </div>
          </li>
          <li>
            <div className="flags">
              <img className="flagsImg" src={netherland} alt="netherland flag" />
              <p>Nederland</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguagesModal;
