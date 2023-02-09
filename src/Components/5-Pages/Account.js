import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, } from "react-router-dom";
import style from "../../SCSS/5-Pages/Account.module.scss";

const button2Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 0.98,
  },
};

export default function Account() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  
  const navigate = useNavigate()

  async function getAccount() {
    const response = await fetch(`http://localhost:3000/users/account`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
    const responseJSON = await response.json()

    if (response.status === 401) {
      navigate("/login")
    } else {
      setName(responseJSON.name)
      setSurname(responseJSON.surname)
      setEmail(responseJSON.email)
    }
  }

  async function handleUserLogout(e) {
    e.preventDefault()
    
    const response = await fetch("http://localhost:3000/users/logout", {
      method: "DELETE",
      credentials: "include"
    })
    const responseJSON = await response.json()
    
    if (response.status === 200) {
      navigate("/login")
    }
    else console.log(responseJSON)
  }

  useEffect(() => {
    getAccount()
  }, [])

  return (
    <>
      <Helmet>
        <title>Account - Sito ufficiale EA</title>
      </Helmet>
      <div className={style.page}>
        <div className={style.content}>
          <img src="https://eaassets-a.akamaihd.net/resource_signin_ea_com/551.0.20230120.211.3ef4f9a/p/statics/juno/img/EALogo-New.svg" alt="Logo" />
          <h1>Ciao, {name}!</h1>
          <ul>
            <li>Nome: {name}</li>
            <li>Cognome: {surname}</li>
            <li>E-mail: {email}</li>
          </ul>
          <Link to="/" className={style.link}>
            <motion.button type="submit" whileHover="hover" initial="rest" variants={button2Variants} onClick={handleUserLogout}>
              Log Out
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
}
