import React from "react";
import style from "../../SCSS/4-Templates/Section.module.scss"
import PropTypes from "prop-types"
import { Button } from "../1-Atoms/Button";

function Section({title = "Placeholder Title Default", btnContent = "default", to = "/", children }) {
  return (
    <div className={`flow-spacer-section-100 ${style.section}`}>
      <h2 className={style.h2}>{title}</h2>
      {children}
      <Button to={to} content={btnContent} />
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  btnContent: PropTypes.string,
}

export default Section;
