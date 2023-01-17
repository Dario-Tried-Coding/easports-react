import { Button } from "Components/1-Atoms/Button";
import React from "react";
import style from "../../../SCSS/2-Molecules/Cards/Card3.module.scss";

export function Card3(props){
    const {containerClass,
          imgPath,
          altIMg,
          card3title,
          card3p,
          rowp,
          sub,
          subData
          } = props
    return(
       <section>
        <div className={style.containerClass}>
            <div className={style.altIMg}>
            <img src="https://images-ext-1.discordapp.net/external/TmHyAQ8_7jhYOzMFlnM6oE3BV2RiotTttOd-pZQYgnY/https/media.contentapi.ea.com/content/dam/eacom/dead-space/images/2021/07/deadspace-3840x2160.jpg.adapt.crop16x9.1455w.jpg?width=1040&height=585"/>
            </div>
            <div className={style.card3title}>Dead Space</div>
            <div className={style.card3p}>
                <div className={style.rowp}>
                    <div className={style.sub}>Data di uscita</div>
                    <div className={style.subData}>27 gennaio 2023</div>
                </div>
                <hr/>
                <div className={style.rowp}>
                    <div className={style.sub}>Piattaforme</div>
                    <div className={style.subData}>
                     <a href="https://www.ea.com/it-it/games/library/pc-download">PC</a>,
                     <a href="https://www.ea.com/it-it/games/library/ps5">PlayStation®5</a>,
                     <a href="https://www.ea.com/it-it/games/library/xbox-series-x">Xbox Series X|S</a>
                    </div>
                
                </div>
                <hr />
                <div className={style.rowp}>
                    <div className={style.sub}>Genere:</div>
                    <div className={style.subData}>
                        <a href="https://www.ea.com/it-it/games/library/horror">Horror</a>
                    </div>
                </div>
                <hr className={style.prova}/>
            </div>
            <div className={style.btn}>
                <Button />
            </div>
            
            
        </div>
       </section>
    
    )
}