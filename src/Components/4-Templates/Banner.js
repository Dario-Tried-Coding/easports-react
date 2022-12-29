import { Button } from "Components/1-Atoms/Button";
import React from "react";
import style from "../../SCSS/4-Templates/Banner.module.scss";

export function Banner({ children, margInlineXL = "var(--marg-inline-section)", bgImageData, textPosition = "center", textAlign = "center", btnContent = "default", btnTransparent = true, btnColor = "var(--clr-dark-700)", btnBgColor = "transparent" }) {
  return (
    <div className={style.container}>
      <picture>
        <source media="(min-width: 1456px)" srcSet={bgImageData[4]} />
        <source media="(min-width: 1024px)" srcSet={bgImageData[3]} />
        <source media="(min-width: 768px)" srcSet={bgImageData[2]} />
        <source media="(min-width: 320px)" srcSet={bgImageData[1]} />
        <img className={style.img} src={bgImageData[0]} alt="background - small screens" />
      </picture>
      {/* @ts-ignore */}
      <div style={{ "--custom-marg-inline": `${margInlineXL}` }} className={`${style.contentWrapper} ${style[textPosition]}`}>
        {/* @ts-ignore */}
        <div style={{ textAlign: `${textAlign}` }}>
          {children}
          <Button fullWidth transparent={btnTransparent} clr={btnColor} bgClr={btnBgColor} content={btnContent} />
        </div>
      </div>
    </div>
  );
}
