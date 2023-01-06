import React from "react"
import { NavLink } from "react-router-dom"


const Cards = (props) => {

  const {containerClass,
    imgPath,
    altIMg,
    logoClass,
    imgLogoPath,
    altLogo,
    height,
    width,
    link} = props

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
               style={{height: height, width: width}} //height - width needs an Object in JSX
              />
            </div>
            {link}
          </div>
          </NavLink>
      </div>
     );
}

export default Cards