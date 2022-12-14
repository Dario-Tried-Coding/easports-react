import React from "react";
import PropTypes from "prop-types"

// styling
import style from "../../../SCSS/2-Molecules/Cards/Card2.module.scss";
import { Link } from "react-router-dom";

function Card2({img = "https://via.placeholder.com/766x431", from = "company name", date = "dd-mm-yyyy", title = "Card Title", body = "Card body"}) {
  return (
    <Link to={""}>
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
    </Link>
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