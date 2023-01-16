import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

import style from "../../../SCSS/2-Molecules/Cards/SidebarCard.module.scss";

const logoImgVariants = {
  hover: {
    scale: 1.1
  },
  rest: {
    scale: 1
  }
}

function SidebarCard({ to = "/", bgImg = "https://via.placeholder.com/150", bgImgAlt = "default descriptive legend", logoImg = "https://via.placeholder.com/300x100/888888/FFFFFF", logoImgAlt = "default descriptive legend", logoImgWidth = 30 }) {
  return (
      <Link className={style.link} to={to}>
        <motion.div whileHover="hover" initial="rest" className={style.card}>
          <img className={style.bgImg} src={bgImg} alt={bgImgAlt} />
          <motion.img style={{originY: 0, width: `${logoImgWidth}%`}} variants={logoImgVariants} className={style.logoImg} src={logoImg} alt={logoImgAlt} />
        </motion.div>
      </Link>
  );
}

export default SidebarCard;
