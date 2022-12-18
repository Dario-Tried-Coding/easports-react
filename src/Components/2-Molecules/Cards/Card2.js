import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// styling
import style from "../../../SCSS/2-Molecules/Cards/Card2.module.scss";

function Card2({img = "https://via.placeholder.com/766x431", from = "company name", date = "dd-mm-yyyy", title = "Card Title", body = "Card body"}) {
  const MotionLink = motion(Link)

  return (
    <MotionLink to={""} animate={{ y: 0, boxShadow: "0 3px 10px -2px rgba(0, 0, 0, 0.5)" }} initial={{ y: -12, boxShadow: "0px 28px 30px -3px rgba(0, 0, 0, 0.5)" }} whileHover={{ y: -12, boxShadow: "0px 28px 30px -3px rgba(0, 0, 0, 0.5)" }} transition={{ duration: 0.5, ease: "easeInOut" }}>
      <div className={style.container}>
        <img className={style.img} src={img} alt="" />
        <div className={`${style.content} ${style.flow}`}>
          <div className={style.info}>
            <h6 className={`${style.h6} ${style.from}`}>{from}</h6>
            <h6 className={style.h6}>{date}</h6>
          </div>
          <h4 className={style.h4}>{title}</h4>
          <p className={style.body}>{body}</p>
        </div>
      </div>
    </MotionLink>
  );
}

Card2.propTypes = {
  img: PropTypes.string,
  from: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
}

export default Card2;