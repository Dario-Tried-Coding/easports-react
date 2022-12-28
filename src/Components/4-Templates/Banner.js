import { Button } from "Components/1-Atoms/Button";
import React from "react";
import { Children } from "react";
import style from "../../SCSS/4-Templates/Banner.module.scss"
export function Banner({children, bgImage = "https://via.placeholder.com/1519x434.png", btnContent="default"}){
    return(
        
     <div className={style.container_gio}>
        <div className="blocco_play">
          <div className={style.blocco_bgplay}>
            <img
              className={style.bg_play}
              src={bgImage}
              alt="games background"
              width="1920px"
              height="600px"
            />

            <div className={style.play}>
             {children}
              <Button content={btnContent} />
            </div>
          </div>
        </div>
      </div>
);
}