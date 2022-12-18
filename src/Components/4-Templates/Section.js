import React from "react";
import style from "../../SCSS/4-Templates/Section.module.scss"
import PropTypes from "prop-types"
import { Button } from "Components/1-Atoms/Button";

function Section({btnSpacer = "0", title = "Placeholder Title Default", children }) {
  return (
    <div className={`flow-spacer-section-100 ${style.section}`}>
      <h2>{title}</h2>
      {children}
      <Button margins={btnSpacer}/>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string
}

export default Section;
