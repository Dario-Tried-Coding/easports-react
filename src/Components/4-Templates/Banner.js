import { Button } from "Components/1-Atoms/Button";
import React from "react";
import style from "../../SCSS/4-Templates/Banner.module.scss";

export function Banner({ children, textPosition = "center", textAlign = "center", btnContent = "default", btnTransparent = true, btnColor = "var(--clr-dark-700)", btnBgColor = "transparent"}) {
  return (
    // @ts-ignore
    <div style={{textAlign: `${textAlign}`}} className={style.container}>
      <picture>
        <source media="(min-width: 1456px)" srcSet="https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-hero-holiday-sale-md-7x2-xl.jpg.adapt.crop7x2.1920w.jpg" />
        <source media="(min-width: 1024px)" srcSet="https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-hero-holiday-sale-md-7x2-xl.jpg.adapt.crop5x2.1455w.jpg" />
        <source media="(min-width: 768px)" srcSet="https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-hero-holiday-sale-md-7x2-xl.jpg.adapt.crop2x1.1023w.jpg" />
        <source media="(min-width: 320px)" srcSet="https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-hero-holiday-sale-md-7x2-xl.jpg.adapt.crop3x5.320w.jpg" />
        <img className={style.img} src="https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-hero-holiday-sale-md-7x2-xl.jpg.adapt.crop3x5.320w.jpg" alt="background - small screens" />
      </picture>
      <div className={`${style.contentWrapper} ${style[textPosition]}`}>
        <div>
          {children}
          <Button fullWidth transparent={btnTransparent} clr={btnColor} bgClr={btnBgColor} content={btnContent} />
        </div>
      </div>
    </div>
  );
}
