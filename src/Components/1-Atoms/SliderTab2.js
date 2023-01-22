import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

import style from "../../SCSS/1-Atoms/SliderTab2.module.scss";

const defaultMockData = {
  isActive: false,
  to: "/",
  text: "default"
}

function SliderTab2({data = defaultMockData}) {
  return (
    <Link className={style.link} to={data.to} draggable={false}>
      <motion.li initial={{backgroundColor: data.isActive ? "hsl(0 0% 87% / 100%)" : "hsl(0 0% 100% / 0%)"}} whileHover={{backgroundColor: "hsl(0 0% 87% / 100%)"}} transition={{duration: 0}} className={style.tabContainer}>
        <span className={style.tab}>{data.text}</span>
        <span className={style.divider} ></span>
        <span className={style.border} style={{width: data.isActive ? "75%" : 0 }}></span>
      </motion.li>
    </Link>
  );
}

export default SliderTab2;
