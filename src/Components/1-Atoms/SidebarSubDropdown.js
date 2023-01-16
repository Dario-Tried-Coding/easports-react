import { motion } from "framer-motion";
import React, { useState } from "react";

import style from "../../SCSS/1-Atoms/SidebarSubDropdown.module.scss";

const bgColorVariants = {
  rest: {backgroundColor: "var(--clr-light-900)"},
  hover: {backgroundColor: "var(--clr-brand-400)"},
  active: {backgroundColor: "var(--clr-dark-700)"}
}
const colorVariants = {
  rest: {color: "var(--clr-light-900)"},
  hover: {color: "var(--clr-brand-400)"},
  active: {color: "var(--clr-dark-700)"}
}

const defaultMockData = {
  heading: "Heading",
  links: ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5", "Link 6"],
}

function SidebarSubDropDown({data = defaultMockData}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className={style.subDropdown} initial={false} animate={{borderBottomColor: isOpen ? "var(--clr-dark-700)" : "var(--clr-light-900)"}}>
      <motion.button whileHover="hover" initial={false} animate={isOpen ? "active" : "rest"} onClick={() => setIsOpen(!isOpen)} className={style.btn}> <motion.span variants={colorVariants} transition={{duration: 0}}>{data.heading}</motion.span> <motion.span animate={{rotate: isOpen ? 45 : 0}} className={style.cross}><motion.span variants={bgColorVariants} transition={{duration: 0}}></motion.span><motion.span variants={bgColorVariants} transition={{duration: 0}}></motion.span></motion.span> </motion.button>
      <motion.ul animate={isOpen ? {height: "auto", opacity: 1} : {height: 0, opacity: 0, transition: {opacity: {duration: 0.2}}}}>
        {data.links.map((link, i) => <motion.li key={i} initial={{color: "var(--clr-dark-700)"}} whileHover={{color: "var(--clr-brand-400)"}} transition={{duration: 0}}>{link}</motion.li>)}
      </motion.ul>
    </motion.div>
  );
}

export default SidebarSubDropDown;
