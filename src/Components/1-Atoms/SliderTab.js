import React from 'react';
import style from "../../SCSS/1-Atoms/SliderTab.module.scss";
import { motion } from "framer-motion";

const variants = {
  close: {width: 0},
  open: {width: "80%"}
}

function SliderTab({ title = "default", active = false, onClick }) {
  const isActive = active

  function handleActivation(e) {
    onClick(e)
  }

  return (
    <li onClick={handleActivation} title={title} className={`${style["tab-container"]} ${isActive ? style.active : undefined}`}>
      <span className={`${style.tab}`}>{title}</span>
      <span className={`${style.divider}`}></span>
      <motion.span className={`${style.border}`} animate={isActive ? "open" : "close"} variants={variants} ></motion.span>
    </li>
  );
}

export default SliderTab;
