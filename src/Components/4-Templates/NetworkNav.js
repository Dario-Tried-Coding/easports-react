import React, { useRef, useState, useEffect } from "react";
import useScrollBlock from "Hooks/useScrollBlock";
import { Link, NavLink } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

import NavbarLink from "Components/1-Atoms/NavbarLink";
import style from "../../SCSS/4-Templates/NetworkNav.module.scss";

const isVisibleVariants = {
  visible: { y: 0 },
  hidden: { y: "-100%" },
};
const bodyOpenVariants = {
  open: {
    transform: "scaleY(1)",
    height: 400,
  },
  closed: {
    transform: "scaleY(0)",
    height: 0,
  },
};
const modalOpenVariants = {
  open: {
    transform: "translateY(0px)",
    opacity: 1,
  },
  close: {
    transform: "translateY(-200px)",
    opacity: 0,
  },
};

function NetworkNav({ children }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [is1Open, setIs1Open] = useState(false);
  const [is2Open, setIs2Open] = useState(false);

  // close if click outside
  const networkNavbarRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (isOpen && !networkNavbarRef.current.contains(e.target)) {
        setIsOpen(false);
        setTimeout(() => {
          setIs1Open(false);
          setIs2Open(false);
        }, 1000);
      }
    });
  });

  // hide/show
  const { scrollY } = useScroll();
  function updateIsVisible() {
    // @ts-ignore
    if (scrollY?.current <= scrollY?.prev) setIsVisible(true);
    // @ts-ignore
    else if (scrollY?.current > scrollY?.prev) setIsVisible(false);
  }
  useEffect(() => {
    return scrollY.onChange(() => updateIsVisible());
  }, [scrollY, updateIsVisible]);

  // anable/disable scroll
  const [blockScroll, allowScroll] = useScrollBlock(networkNavbarRef);
  if (isOpen) blockScroll();
  else allowScroll();

  // open/close body
  function handleAccountSVGClick() {
    if (!isOpen) {
      setIsOpen(true);
      setIs1Open(true);
      setIs2Open(false);
    } else if (isOpen && !is1Open) {
      setIs1Open(true);
      setIs2Open(false);
    } else if (isOpen && is1Open) {
      setIsOpen(false);
      setTimeout(() => {
        setIs1Open(false);
        setIs2Open(false);
      }, 1000);
    }
  }
  function handleHelpSVGClick() {
    if (!isOpen) {
      setIsOpen(true);
      setIs1Open(false);
      setIs2Open(true);
    } else if (isOpen && !is2Open) {
      setIs1Open(false);
      setIs2Open(true);
    } else if (isOpen && is2Open) {
      setIsOpen(false);
      setTimeout(() => {
        setIs1Open(false);
        setIs2Open(false);
      }, 1000);
    }
  }

  const bgColor = isOpen ? { backgroundColor: "var(--clr-dark-700)" } : { backgroundColor: "var(--clr-dark-700)" };

  return (
    <div>
      <motion.div ref={networkNavbarRef} className={style.networkNav} style={bgColor} animate={isVisible ? "visible" : "hidden"} variants={isVisibleVariants} transition={{ ease: [0.5, 0.25, 0.015, 1], duration: 0.4 }}>
        <header className={style.header}>
          <ul className={style.ul}>
            <li>
              <button onClick={handleAccountSVGClick}>
                <svg viewBox="-1.5 -.5 18 18">
                  <path style={is1Open ? { fill: "var(--clr-light-400)" } : null} d="M7.5,9A4.5,4.5,0,1,0,3,4.5,4.5,4.5,0,0,0,7.5,9Zm0-7A2.5,2.5,0,1,1,5,4.5,2.5,2.5,0,0,1,7.5,2Z"></path>
                  <path style={is1Open ? { fill: "var(--clr-light-400)" } : null} d="M8,10.028s-0.254-.007-0.506-0.007S7,10.023,7,10.028c-7.033.283-7,3.558-7,6.972H15C15,13.586,14.985,10.312,8,10.028ZM8,15H2.056c0.2-1.946,1.077-2.815,5.024-2.974l0.1,0H7.494l0.326,0,0.1,0c3.928,0.16,4.819,1.03,5.022,2.974H8Z"></path>
                </svg>
              </button>
            </li>
            <li>
              <button onClick={handleHelpSVGClick}>
                <svg viewBox="0 0 10 17">
                  <path style={is2Open ? { fill: "var(--clr-light-400)" } : null} d="M5.193,0C0.538,0,0,2.673,0,4.684a0.978,0.978,0,0,0,1.955,0c0-1.648.225-2.729,3.238-2.729,2.852,0,2.852,1.45,2.852,2.729a1.951,1.951,0,0,1-1.29,1.675l-0.216.083C4.8,7.108,3.809,7.531,3.809,8.472v3.5a0.978,0.978,0,1,0,1.955,0V8.887c0.4-.209,1.152-0.5,1.474-0.62l0.224-.085A3.831,3.831,0,0,0,10,4.684C10,3.526,10,0,5.193,0Z"></path>
                  <path style={is2Open ? { fill: "var(--clr-light-400)" } : null} d="M5.366,14.943H3.982a1.029,1.029,0,0,0,0,2.057H5.366A1.029,1.029,0,1,0,5.366,14.943Z"></path>
                </svg>
              </button>
            </li>
            <li>
              <NavLink to="/" className={style.homeNavLink}>
                <svg className={style.homeSVG} viewBox="0 0 32 32">
                  <path className={style.path} d="M19.766,8.372L6.927,8.392l-2.093,3.337l12.818-0.004L19.766,8.372 M14.221,20.518c-0.151,0-7.604,0.016-8.114,0.016 c0.249-0.393,1.665-2.611,1.738-2.733c0.163,0,5.014,0,5.271,0l2.122-3.354L3.117,14.467l-2.114,3.342l2.827-0.005L0,23.874h16.151 c0.286-0.453,5.654-9.017,5.904-9.412c0.219,0.334,1.664,2.623,1.9,3.002c-0.363,0-1.682,0-1.682,0l-2.101,3.337 c0,0,0.009,0,0.029,0c0.428,0,5.719,0,5.875,0c0.085,0.135,1.827,2.876,1.921,3.023H32L22.038,8.127 C21.646,8.738,14.311,20.374,14.221,20.518"></path>
                </svg>
              </NavLink>
            </li>
          </ul>
        </header>
        <motion.div className={style.body} animate={isOpen ? "open" : "close"} variants={bodyOpenVariants} transition={{ ease: [0.5, 0.25, 0.015, 1], transform: { duration: 0.4 }, height: { duration: 0.5 } }}>
          <motion.div className={style.flexContainer} variants={modalOpenVariants} animate={is1Open ? "open" : "close"} transition={{ ease: [0.5, 0.25, 0.015, 1], duration: 0.5 }}>
            <ul>
              <li>
                <NavbarLink src="https://media.contentapi.ea.com/content/dam/eacom/common/200429_global-nav/eaglobalnav-iconsignin.svg" alt="login" text="Sing In" />
              </li>
              <li>
                <NavbarLink src="https://media.contentapi.ea.com/content/dam/eacom/common/200429_global-nav/eaglobalnav-iconregister.svg" alt="create account" text="Create Account" />
              </li>
            </ul>
          </motion.div>
          <motion.div className={style.gridContainer} variants={modalOpenVariants} animate={is2Open ? "open" : "close"} transition={{ ease: [0.5, 0.25, 0.015, 1], duration: 0.5 }}>
            <div className={style.content}>
              <p>Ti serve aiuto?</p>
              <ul>
                <li>
                  <NavbarLink src="https://media.contentapi.ea.com/content/dam/eacom/common/200429_global-nav/eaglobalnav-iconorigin.svg" alt="Verifica dati accesso" text="Verifica dati di accesso a Origin" />
                </li>
                <li>
                  <NavbarLink src="https://media.contentapi.ea.com/content/dam/eacom/common/200429_global-nav/eaglobalnav-iconlink.svg" alt="Collega account Origin" text="Collega Origin al mio ID PSN" />
                </li>
                <li>
                  <NavbarLink src="https://media.contentapi.ea.com/content/dam/eacom/common/200429_global-nav/eaglobalnav-iconorigincode.svg" alt="Come riscattare un codice" text="Come riscattare un codice" />
                </li>
                <li>
                  <NavbarLink src="https://media.contentapi.ea.com/content/dam/eacom/common/200429_global-nav/eaglobalnav-iconalert.svg" alt="Non riesco a giocare" text="Non riesco a giocare" />
                </li>
              </ul>
              <p>
                Non hai trovato ciò che cerchi? Vai su{" "}
                <Link className={style.link} to="/">
                  Aiuto EA
                </Link>
                ,{" "}
                <Link className={style.link} to="/">
                  Answers HQ
                </Link>{" "}
                o{" "}
                <Link className={style.link} to="/">
                  Forum EA
                </Link>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <div>{children}</div>
    </div>
  );
}

export default NetworkNav;
