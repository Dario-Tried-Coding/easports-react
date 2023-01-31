import React from "react";

import style from "../../../SCSS/3-Organisms/Wrappers/WrCards2.module.scss"

function WrCards2({ children }) {
  return <div className={style.wrapper}>{children}</div>;
}

export default WrCards2;
