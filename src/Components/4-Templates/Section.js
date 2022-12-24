import React from "react";
import style from "../../SCSS/4-Templates/Section.module.scss"
import PropTypes from "prop-types"
import { Button } from "../1-Atoms/Button";

function Section({title = "Placeholder Title Default", btnContent = "default", flowRem = "--flow-spacer-section-100", children }) {
  return (
    // @ts-ignore
    <div style={{"--flow": `var(${flowRem})`, marginBottom: `var(${flowRem})`}} className={`flow ${style.section}`}>
      <h2 style={{marginBottom: `calc(-1 * (var(--flow) / 100 * 70))`}}>{title}</h2>
      {children}
      <Button content={btnContent} />
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  btnContent: PropTypes.string,
  flowRem: ["--flow-spacer-section-100"]
}

export default Section;
