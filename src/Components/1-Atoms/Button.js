import React from "react"
import style from "../../SCSS/1-Atoms/Button.module.scss"

export function Button({content = "default", clr = "var(--clr-dark-700)"}) {


    return(
    <button style={{borderColor:`${clr}`, color:`${clr}`}} className={style.btn} type="submit">{content}</button>
        
    )
}
