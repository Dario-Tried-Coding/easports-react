import React from "react";
import { Link } from "react-router-dom";

// styling
import style from "../../../SCSS/2-Molecules/Cards/Card2.module.scss"

function Card2({img, from, date, title, body}) {
  return (
    <Link to="/news/:title">
      <div className={style.container}>
        <img className={style.img} src={img} alt=""
        />
        <div className={`${style.content} ${style.flow}`}>
          <div className={style.info}>
            <h6 className={`${style.h6} ${style.from}`}>{from}</h6>
            <h6 className={style.h6}>{date}</h6>
          </div>
          <h4 className={style.h4}>{title}</h4>
          <p className={style.body}>{body}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card2;
