import React from "react";
import style from "../../SCSS/4-Templates/Section.module.scss"
import PropTypes from "prop-types"

function Section({ title = "Placeholder Title Default", children }) {
  return (
    <div className="flow-spacer-section-100">
      <h2 className={style.title}>{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string
}

export default Section;
