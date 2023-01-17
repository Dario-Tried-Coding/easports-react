import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import style from "../../SCSS/1-Atoms/SidebarDropdown.module.scss";
import SidebarSubDropDown from "./SidebarSubDropdown";

const arrowDxVariants = {
  rest: {
    rotate: -42.5,
    backgroundColor: "var(--clr-dark-500)",
  },
  active: {
    rotate: 42.5,
    backgroundColor: "var(--clr-brand-400)",
  },
};
const arrowSxVariants = {
  rest: {
    rotate: 42.5,
    backgroundColor: "var(--clr-dark-500)",
  },
  active: {
    rotate: -42.5,
    backgroundColor: "var(--clr-brand-400)",
  },
};

const defaultMockData = {
  btn: "Button text",
  singleColumn: false,
  columns: [
    {
      heading: "Heading",
      links: [["Link 1", "/"], ["Link 2", "/"], ["Link 3", "/"], ["Link 4", "/"], ["Link 5", "/"], ["Link 6", "/"]],
    },
    {
      heading: "Heading",
      links: [["Link 1", "/"], ["Link 2", "/"], ["Link 3", "/"], ["Link 4", "/"], ["Link 5", "/"]],
    },
  ],
}

function SidebarDropdown({data = defaultMockData }) {
  function determineIfOpenOrClose() {
    if (!data.singleColumn) return data.columns.some(obj => obj.links.some(arr => arr.includes("active")))
    else if (data.singleColumn) return data.links.some(arr => arr.includes("active"))
    else return false
  }

  const [isOpen, setIsOpen] = useState(determineIfOpenOrClose);

  return !data.singleColumn ? (
    <div className={style.dropdown}>
      <motion.button className={style.btn} onClick={() => setIsOpen(!isOpen)} whileHover={{ color: "var(--clr-brand-400)" }} initial={{ borderBottomColor: "var(--clr-dark-700)", color: "var(--clr-dark-700)" }} animate={{ borderBottomColor: isOpen ? "var(--clr-brand-400)" : "var(--clr-dark-700)", color: isOpen ? "var(--clr-brand-400)" : "var(--clr-dark-700)" }} transition={{ duration: 0 }}>
        {data.btn}
        <div className={style.arrow}>
          <motion.span initial="rest" animate={isOpen ? "active" : "rest"} variants={arrowSxVariants}></motion.span>
          <motion.span initial="rest" animate={isOpen ? "active" : "rest"} variants={arrowDxVariants}></motion.span>
        </div>
      </motion.button>
      <motion.ul animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0, transition: { opacity: { duration: 0.2 } } }}>
        {data.columns.map((subDropdown, i) => <SidebarSubDropDown key={i} data={subDropdown} />)}
      </motion.ul>
    </div>
  ) : (
    <div className={style.dropdown}>
      <motion.button className={style.btn} onClick={() => setIsOpen(!isOpen)} whileHover={{ color: "var(--clr-brand-400)" }} initial={{ borderBottomColor: "var(--clr-dark-700)", color: "var(--clr-dark-700)" }} animate={{ borderBottomColor: isOpen ? "var(--clr-brand-400)" : "var(--clr-dark-700)", color: isOpen ? "var(--clr-brand-400)" : "var(--clr-dark-700)" }} transition={{ duration: 0 }}>
        {data.btn}
        <div className={style.arrow}>
          <motion.span initial="rest" animate={isOpen ? "active" : "rest"} variants={arrowSxVariants}></motion.span>
          <motion.span initial="rest" animate={isOpen ? "active" : "rest"} variants={arrowDxVariants}></motion.span>
        </div>
      </motion.button>
      <motion.ul animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0, transition: { opacity: { duration: 0.2 } } }}>
        {data.links.map((link, i) => <li key={i} style={{color: link[2] ? "var(--clr-brand-400)" : "var(--clr-dark-700)"}}><Link to={link[1]}>{link[0]}</Link></li> )}
      </motion.ul>
    </div>
  );
}

export default SidebarDropdown;
