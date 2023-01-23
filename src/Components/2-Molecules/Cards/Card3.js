import { Button } from "Components/1-Atoms/Button";
import React from "react";
import { Link } from "react-router-dom";
import style from "../../../SCSS/2-Molecules/Cards/Card3.module.scss";

const imgDefaultMockData = [
    "https://via.placeholder.com/320x180",
    "https://via.placeholder.com/767x432",
    "https://via.placeholder.com/1023x576",
    "https://via.placeholder.com/1455x819"
]

export function Card3({img = imgDefaultMockData, alt = "descriptive legend", title = "Placeholder title", releaseDate = "DD/MM/YYYY", platforms = undefined, genre = undefined, btnContent = "Default CTA", to = "/"}) {
    return (
        <div className={style.card}>
            <picture>
                <source media="(min-width: 1024px)" srcSet={img[3]} />
                <source media="(min-width: 768px)" srcSet={img[2]} />
                <source media="(min-width: 320px)" srcSet={img[1]} />
                <source srcSet={img[0]} />
                <img src={img[0]} alt={alt} />
            </picture>
            <div className={style.content}>
                <h5>{title}</h5>
                <div className={style.info}>
                    <h6>Data di uscita</h6>
                    <p>{releaseDate}</p>
                
                    {platforms && <h6>Piattaforme</h6>}
                    {platforms && <p>{platforms.map((arr, i, platforms) => {
                        if (i + 1 === platforms.length) return <><Link className={style.link} key={i} to={arr[1]}>{arr[0]}</Link></>
                        return <><Link className={style.link} key={i} to={arr[1]}>{arr[0]}</Link>, </>
                    })}</p>}
                
                    {genre && <h6>Genere</h6>}
                    {genre && <p>{genre.map((arr, i, genre) => {
                        if (i + 1 === genre.length) return <><Link className={style.link} key={i} to={arr[1]}>{arr[0]}</Link></>
                        return <><Link className={style.link} key={i} to={arr[1]}>{arr[0]}</Link>, </>
                    })}</p>}
                    
                </div>
                <Button fullWidth content={btnContent} to={to}/>
            </div>
        </div>
    );
}
