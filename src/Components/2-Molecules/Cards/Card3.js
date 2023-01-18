import { Button } from "Components/1-Atoms/Button";
import React from "react";
import style from "../../../SCSS/2-Molecules/Cards/Card3.module.scss"

export function Card3(props){
    const {containerClass,
        imgPath,
        altIMg,
        title,
        height,
        width,
        data,
        generi,
piattaforma1,
piattaforma2,
piattaforma3,
linkp1,
linkp2,
linkp3,
linkg} = props
    return(
       <section>
        <div className={style.containerClass}>
            <div>
            <img src={imgPath}
              alt={altIMg}
              style={{height: height, width: width}}/>
            </div>
            <div className={style.card3title}>{title}</div>
            <div className={style.card3p}>
                <div className={style.rowp}>
                    <div className={style.sub}>Data di uscita</div>
                    <div className={style.subData}>{data}</div>
                </div>
                <hr />
                <div className={style.rowp}>
                    <div className={style.sub} >Piattaforma</div>
                    <div className={style.subData}>
                        <a className={style.a} href={linkp1}>{piattaforma1}</a>,
                     <a className={style.a} href={linkp2}>{piattaforma2}</a>,
                     <a className={style.a} href={linkp3}>{piattaforma3}</a>
                    </div>
                    
                </div>
                <hr />
                <div className={style.rowp}>
                    <div className={style.sub}>Genere</div>
                    <div className={style.subData}>
                        <a className={style.a} href={linkg}>{generi}</a>
                    </div>
                </div>
                <hr />
            </div>
            <div className={style.btn}>
                <Button />
            </div>
            
            
        </div>
       </section>
    
    )
}