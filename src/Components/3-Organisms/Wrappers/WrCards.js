import React from 'react';

// styling
import style from "../../../SCSS/3-Organisms/Wrappers/WrCards.module.scss"

// children array must already contain the right molecule array
function WrCards({children = [], gap}) {
  return ( <div style={{gap: `var(${gap})`}} className={style.wrapper}>
    {children}
  </div> );
}

export default WrCards;