import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import style from "../../SCSS/5-Pages/Account.module.scss";

const button2Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 0.98,
  },
};

export default function Account({}) {
  return (
    <>
      <Helmet>
        <title>Account - Sito ufficiale EA</title>
      </Helmet>
      <div className={style.page}>
        <div className={style.content}>
          <img src="https://eaassets-a.akamaihd.net/resource_signin_ea_com/551.0.20230120.211.3ef4f9a/p/statics/juno/img/EALogo-New.svg" alt="Logo image" />
          <h1>Ciao, Nome!</h1>
          <ul>
            <li>Nome:</li>
            <li>Cognome:</li>
            <li>E-mail:</li>
            <li>Password:</li>
          </ul>
          <Link to="/" className={style.link}>
            <motion.button type="submit" whileHover="hover" initial="rest" variants={button2Variants}>
              Log Out
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
}
