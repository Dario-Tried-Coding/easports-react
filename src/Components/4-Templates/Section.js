import React from "react";
import style from "../../SCSS/4-Templates/Section.module.scss"
import PropTypes from "prop-types"
import { Button } from "../1-Atoms/Button";

function Section({title = "Placeholder Title Default", btnContent = "", to = "/", children, margTop = "default", margBottom = "default", flow = "default", titleMargBottom = "default", btnMargTop = "default" }) {
  const cssStylePropObj = {
    "--flow": flow === "default" ? "var(--flow-spacer-section-100)" : `var(--spac-${flow}`,
    "--headingMargBottom": titleMargBottom === "default" ? "var(--flow)" : `var(--spac-${titleMargBottom}`,
    "--btnMargTop": btnMargTop === "default" ? "var(--flow)" : `var(--spac-${btnMargTop}`,
    "--margTop": margTop === "default" ? "var(--spac-medium)" : `var(--spac-${margTop})`,
    "--margBottom": margBottom === "default" ? "var(--flow-spacer-section-100)" : `var(--spac-${margBottom})`
  }

  return (
    // @ts-ignore
    <div style={cssStylePropObj} className={`${style.section}`}>
      <h2 className={style.h2}>{title}</h2>
      {children}
      {btnContent && <Button to={to} content={btnContent} />}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  btnContent: PropTypes.string,
}

export default Section;
