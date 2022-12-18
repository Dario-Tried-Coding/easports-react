import React from "react";
import { Link } from "react-router-dom";
import style from "../../SCSS/1-Atoms/Button.module.scss";

export function Button({ content = "Placeholder text", transparent = true, clr = "var(--clr-dark-700)", bgClr = "transparent", to = ""}) {
    return (
        <Link to={to}>
            <button style={{ color: `${clr}`, backgroundColor: `${bgClr}` }} className={style.btn} type="submit">
                <span style={{borderColor: `${transparent ? clr : bgClr}`}} className={style.border}></span>
                {content}
            </button>
        </Link>
    );
}
