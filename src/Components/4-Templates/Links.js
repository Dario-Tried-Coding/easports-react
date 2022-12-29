import { Social } from "Components/1-Atoms/Social";
import React from "react";
import style from "../../SCSS/4-Templates/Links.module.scss";

export function Links() {
  return (
    <div className={style.wrapper}>
      <div className={style.links}>
        <a className={style.link} href="/">Lavora con noi</a>
        <a className={style.link} href="/">Dirigenza</a>
        <a className={style.link} href="/">Rapporto sull'impatto</a>
        <a className={style.link} href="/">I nostri impegni</a>
        <a className={style.link} href="/">Segnala un problema</a>
      </div>
      <hr className={style.hr} />
      <Social className={style.social} />
    </div>
  );
}
