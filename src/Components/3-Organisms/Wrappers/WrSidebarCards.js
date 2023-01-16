import React from 'react';

import style from "../../../SCSS/3-Organisms/Wrappers/WrSidebarCards.module.scss";

function WrSidebarCards({children}) {
  return ( <div className={style.wrapper}>{children}</div> );
}

export default WrSidebarCards;