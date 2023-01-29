import { Button } from "Components/1-Atoms/Button";
import React from "react";
import style from "../../SCSS/4-Templates/Genitori.module.scss";

export function Genitori({ bgColor = "#6fb0d6", textClr = "var(--clr-dark-700)", heading = "Default Heading", btnContent = "default", btnColor = "var(--clr-dark-700)", btnBgColor = "transparent", btnTransparent = true, spacerHeightSmall = 0, spacerHeightMedium = 0, spacerHeightLarge = 0, spacerHeightXlarge = 0 }) {
  return (
    <div className={style.container} style={{
      backgroundColor: `${bgColor}`, // @ts-ignore
      "--spacerHeightSmall": `${spacerHeightSmall}vw`,
      "--spacerHeightMedium": `${spacerHeightMedium}vw`,
      "--spacerHeightLarge": `${spacerHeightLarge}vw`,
      "--spacerHeightXlarge": `${spacerHeightXlarge}vw`,
    }}>
      <div className={style.spacer}></div>
      <div
        className={`${style.blocco_genitori} ${style.flow}`}>
        <h3 className={style.heading} style={{ color: textClr }}>
          {heading}
        </h3>
        <Button content={btnContent} clr={btnColor} bgClr={btnBgColor} transparent={btnTransparent} />
      </div>
      <div className={style.spacer}></div>
    </div>
  );
}
