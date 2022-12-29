import React from "react";
import { Link } from "react-router-dom";
import style from "../../SCSS/1-Atoms/Button.module.scss";

export function Button({marginsBlock = "0", fullWidth = false, content = "Placeholder text", transparent = true, clr = "var(--clr-dark-700)", bgClr = "transparent", to = ""}) {
    return (
        <Link to={to} className={fullWidth ? `${style.link} ${style.full}` : `${style.link}`} >
            <button style={{ color: `${clr}`, backgroundColor: `${bgClr}`, marginBlock: `${marginsBlock}` }} className={style.btn} type="submit">
                <span style={{borderColor: `${transparent ? clr : bgClr}`}} className={style.border}></span>
                {content}
            </button>
        </Link>
    );
}
