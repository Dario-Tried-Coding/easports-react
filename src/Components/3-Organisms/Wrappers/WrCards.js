import React from 'react';
import PropTypes from "prop-types"

// styling
import style from "../../../SCSS/3-Organisms/Wrappers/WrCards.module.scss"

// children array must already contain the right molecule array
function WrCards({children, gap = "--gap-cards-1"}) {
  return ( <div style={{gap: `var(${gap})`}} className={style.wrapper}>
    {children}
  </div> );
}

WrCards.propTypes = {
  gap: PropTypes.string
}

export default WrCards;