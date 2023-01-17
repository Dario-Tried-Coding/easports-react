import React from "react";
import { Link } from "react-router-dom";
import style from "../../SCSS/1-Atoms/NavbarLink.module.scss";

function NavbarLink({ to = "/", src = "https://media.contentapi.ea.com/content/dam/eacom/common/200429_global-nav/eaglobalnav-iconsignin.svg", alt = "descriptive alt", text = "placeholder text" }) {
  return (
    <Link to={to} className={style.link}>
      <img src={src} alt={alt} />
      <span>{text}</span>
    </Link>
  );
}

export default NavbarLink;
