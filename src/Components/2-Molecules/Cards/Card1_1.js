import React, { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import style from "../../../SCSS/2-Molecules/Cards/Card1_1.module.scss";

const MotionLink = motion(Link);

const defaultMockData = {
  bgImg: "https://via.placeholder.com/767",
  logoImg: "https://via.placeholder.com/300x100/FFFFFF/000000",
  logoImgWidth: 100,
  gradient: false,
  cardLink: "/",
  links: [
    ["Sito ufficiale", "/"],
    ["Aiuto", "/"],
    ["Forum", "/"],
  ]
}

function Card1_1({data = defaultMockData }) {
  const [isActive, setIsActive] = useState(false);

  function handleSVGClick() {
    setIsActive(!isActive)
  }

  return (
    <>
      <BrowserView>
        <motion.div className={style.card} initial="rest" whileHover="hover" transition={{ ease: "easeOut", duration: 0.4 }}>
          <img className={style.bgImg} src={data.bgImg} alt="background image" />
          <div className={style.overlay} style={{backgroundColor: "black", opacity: 0.3}} ></div>
          <MotionLink className={style.overlay} to={data.cardLink} style={{background: data.gradient ? "linear-gradient(90deg, rgba(32,27,112,0.896796218487395) 0%, rgba(204,32,32,0.8995973389355743) 100%)" : "rgba(13,9,84,0.9)"}} variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }} transition={{ duration: 0.2 }}></MotionLink>
          <div className={style.content}>
            <motion.img variants={{ rest: { y: "0%" }, hover: { y: "-80%" } }} className={style.logoImg} style={{width: `${data.logoImgWidth}%`}} src={data.logoImg} alt="logo image" />
            <motion.div variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }} className={style.links}>
              {data.links.map((arr, i) => <MotionLink variants={{ rest: { y: `-${i * 100}%` }, hover: { y: "0%" } }} to={arr[1]} className={style.link}>{arr[0]}</MotionLink> )}
            </motion.div>
          </div>
        </motion.div>
      </BrowserView>
      <MobileView>
        <motion.div className={style.card} initial="rest" animate={isActive ? "hover" : "rest"} transition={{ ease: "easeOut", duration: 0.4 }} >
          <img className={style.bgImg} src={data.bgImg} alt="background image" />
          {isActive ? <svg onClick={handleSVGClick} className={style.toggle} viewBox="0 0 16 16"><g><path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" transform="rotate(45,8,8)"></path></g></svg> : <svg onClick={handleSVGClick} className={style.toggle} viewBox="0 0 16 16" ><g><circle cx="14.143" cy="8" r="1.857"></circle><circle cx="7.996" cy="8" r="1.857"></circle><circle cx="1.857" cy="8" r="1.857"></circle></g></svg> }
          <div className={style.overlay} style={{backgroundColor: "black", opacity: 0.3}} ></div>
          <MotionLink className={style.overlay} to={data.cardLink} style={{background: data.gradient ? "linear-gradient(90deg, rgba(32,27,112,0.896796218487395) 0%, rgba(204,32,32,0.8995973389355743) 100%)" : "rgba(13,9,84,0.9)"}} variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }} transition={{ duration: 0.2 }}></MotionLink>
          <div className={style.content}>
            <motion.img variants={{ rest: { y: "0%" }, hover: { y: "-80%" } }} className={style.logoImg} src={data.logoImg} alt="logo image" />
            <motion.div variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }} className={style.links}>
              {data.links.map((arr, i) => <MotionLink variants={{ rest: { y: `-${i * 100}%` }, hover: { y: "0%" } }} to={arr[1]} className={style.link}>{arr[0]}</MotionLink> )}
            </motion.div>
          </div>
        </motion.div>
      </MobileView>
    </>
  );
}

export default Card1_1;
