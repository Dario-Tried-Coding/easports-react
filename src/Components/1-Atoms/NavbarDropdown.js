import React from "react";
import { Link } from "react-router-dom";

import style from "../../SCSS/1-Atoms/NavbarDropdown.module.scss";

const defaultMockData = {
  btn: "Btn text",
  singleColumn: false,
  columns: [
    {
      heading: "Column Heading",
      links: [["Label 1", "/"], ["Label 2", "/"], ["Label 3", "/"], ["Label 4", "/"], ["Label 5", "/"], ["Label 6", "/"]]
    },
    {
      heading: "Column Heading",
      links: [["Label 1", "/"], ["Label 2", "/"], ["Label 3", "/"], ["Label 4", "/"], ["Label 5", "/"]]
    }
  ]
}

function NavbarDropdown({ data = defaultMockData}) {
  return (
    <div className={style.dropdown}>
      <div className={style.btn}>{data.btn} <span className={style.arrow}></span></div>
      {data.singleColumn
        ? ( <div className={style.body}>
              <div className={`${style.menu} ${style.singleColumn}`}>
                <ul className={style.list}>{data.links.map((link, i) => <li key={i}><Link className={style.link} to={link[1]}>{link[0]}</Link></li> )}</ul>
              </div>
          </div> )
        : ( <div className={style.body}>
              <div className={`${style.menu}`}>
                {data.columns.map((obj, i) => (<div key={i} className={style.col}>
                    <p className={style.p}>{obj.heading}</p>
                    <ul className={style.list}>
                      {obj.links.map((link, i) => <li key={i}><Link to={link[1]} className={style.link}>{link[0]}</Link></li> )}
                    </ul>
                  </div>
                ))}
              </div>
            </div> )}
    </div>
  );
}

export default NavbarDropdown;
