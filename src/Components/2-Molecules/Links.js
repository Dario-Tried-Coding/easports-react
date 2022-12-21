import { Social } from "Components/1-Atoms/Social";
import React from "react";
import style from "../../SCSS/2-Molecules/Links.module.scss";

export function Links(){
return(
    <div className={style.blocco_link_gio}>
        <div className={style.linkf_gio}>
            <div className={style.link_funo}>
              <a className={style.link_gio} href="">Lavora con noi</a>
            </div>
            <div className={style.link_fdue}>
              <a className={style.link_gio} href="">Dirigenza</a>
            </div>
            <div className={style.link_ftre}>
              <a className={style.link_gio} href="">Rapporto sull'impatto</a>
            </div>
            <div className={style.link_fquattro}>
              <a className={style.link_gio} href="">I nostri impegni</a>
            </div>
            <div className={style.link_fcinque}>
              <a className={style.link_gio} href="">Segnala un problema</a>
            </div>
            
        </div>
        <Social />
    </div>
    
)
}