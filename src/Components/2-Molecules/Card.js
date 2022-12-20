import React from "react"
import { NavLink } from "react-router-dom"
import style from "../../SCSS/2-Molecules/Cards/Card.module.scss";

const Cards = (props) => {

  const {containerClass, imgPath, altIMg, logoClass, imgLogoPath, altLogo, width} = props


    return (

      <div style={{position: "relative"}}>
        {/* <div class="b-icon">
          <i class="bi bi-three-dots"></i>
          <i class="bi bi-x"></i>
        </div> */}

        <NavLink end to = "#">
          <div className={containerClass}>
            <img
              src={imgPath}
              alt={altIMg}
            />
            <div className={logoClass}>
              <img
                src={imgLogoPath}
                alt={altLogo}
               style={{width: width}} //height - width needs an Object in JSX
              />
            </div>
            <p>Sito ufficiale</p>
          </div>
        </NavLink>
      </div>
     );
}

export default Cards