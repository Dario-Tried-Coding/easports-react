import { Button } from "Components/1-Atoms/Button";
import React from "react";
import style from "../../SCSS/4-Templates/Genitori.module.scss";

export function Genitori({ bgColor = "#6fb0d6", heading = "Default Heading", btnContent = "default", btnColor = "var(--clr-dark-700)", btnBgColor = "transparent", btnTransparent = true }) {
  return (
    <div style={{ backgroundColor: `${bgColor}` }} className={`${style.blocco_genitori} ${style.flow}`}>
      <h3 className="genitori">{heading}</h3>
      <Button content={btnContent} clr={btnColor} bgClr={btnBgColor} transparent={btnTransparent} />
    </div>
  );
}
