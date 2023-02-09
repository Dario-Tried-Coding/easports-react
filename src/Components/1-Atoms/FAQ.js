import React from "react";
import style from "../../SCSS/1-Atoms/FAQ.module.scss"

function FAQ({title = "Default title/question", body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt neque sapiente impedit reiciendis cumque a doloremque architecto voluptas accusantium aliquid tempora eligendi dolor nulla, officia, maiores aut fugiat facere!"}) {
  return ( <div className={style.FAQ}>
    <h4 className={style.h4}>{title}</h4>
    <p className={style.p}>{body}</p>
  </div> )
}

export default FAQ