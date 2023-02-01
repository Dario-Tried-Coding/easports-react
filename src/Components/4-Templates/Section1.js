import React from "react";
import style from "../../SCSS/4-Templates/Section1.module.scss";

function Section1({ children, title = "", subtitle = "", textAlign = "center", paddInline = false, spacerHeightSmall = 0, spacerHeightMedium = 0, spacerHeightLarge = 0, spacerHeightXlarge = 0 }) {
  return (
    <div className={style.container} style={{
      // @ts-ignore
      "--spacerHeightSmall": `${spacerHeightSmall}vw`,
      "--spacerHeightMedium": `${spacerHeightMedium}vw`,
      "--spacerHeightLarge": `${spacerHeightLarge}vw`,
      "--spacerHeightXlarge": `${spacerHeightXlarge}vw`,
    }}>
      <div className={style.spacer}></div>
      <section
        className={style.section}
        data-text-align={textAlign}
        data-padding-inline={paddInline}
      >
        <h3 data-margin-section={!paddInline}>{title}</h3>
        <h4 data-margin-section={!paddInline}>{subtitle}</h4>
        {children}
      </section>
      <div className={style.spacer}></div>
    </div>
  );
}

export default Section1;
