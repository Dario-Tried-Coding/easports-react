import React from "react";
import useWindowDimensions from "Hooks/useWindowDimensions";

import style from "../../SCSS/3-Organisms/NavigationNav.module.scss";
import NavbarDropdown from "Components/1-Atoms/NavbarDropdown";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const mockData = [
  {
    btn: "Button 1",
    singleColumn: false,
    columns: [
      {
        heading: "Column Heading",
        links: [["Link label", "/"], ["Link label", "/"], ["Link label", "/"], ["Link label", "/"], ["Link label", "/"], ["Link label", "/"]],
      },
      {
        heading: "Column Heading",
        links: [["Link label", "/"], ["Link label", "/"], ["Link label", "/"], ["Link label", "/"], ["Link label", "/"]],
      },
    ],
  },
  {
    btn: "Button 2",
    singleColumn: true,
    links: [["Link label", "/"], ["Link label", "/"], ["Link label", "/"], ["Link label", "/"], ["Link label", "/"]],
  },
  {
    btn: "Button 3",
    singleColumn: true,
    links: [["Link label", "/"], ["Link label", "/"], ["Link label", "/"], ["Link label", "/"], ["Link label", "/"]],
  },
  {
    btn: "Button 4",
    singleColumn: true,
    links: [["Link label", "/"], ["Link label", "/"], ["Link label", "/"], ["Link label", "/"], ["Link label", "/"]],
  },
  {
    btn: "Button 5",
    singleColumn: true,
    links: [["Link label", "/"], ["Link label", "/"], ["Link label", "/"], ["Link label", "/"], ["Link label", "/"]],
  },
];

const toggleVariants = {
  hover: { transform: "scale(1.3)", height: "35%", fill: "var(--clr-brand-400)" },
  rest: { transform: "scale(1)", height: "35%", fill: "var(--clr-dark-900)" }
}
const toggleVariants1 = {
  hover: {fill: "var(--clr-brand-400)"},
  rest: {fill: "var(--clr-dark-900)"}
}

function NavigationNav({ data = mockData, openSidebar = () => console.log("You need to pass the function to close sidebar") }) {
  const { width } = useWindowDimensions();

  return (
    <div className={style.navigationNav}>
      {width > 1024 ? (
        <motion.div onClick={openSidebar} className={style.toggle} style={{transform: "rotate(90deg)"}} initial="rest" whileHover="hover">
          <motion.svg viewBox="0 0 16 16" variants={toggleVariants}>
            <g>
              <circle cx="14.143" cy="8" r="1.857"></circle>
              <circle cx="7.996" cy="8" r="1.857"></circle>
              <circle cx="1.857" cy="8" r="1.857"></circle>
            </g>
          </motion.svg>
        </motion.div>
      ) : (
        <motion.div onClick={openSidebar} className={style.toggle} initial="rest" whileHover="hover">
          <motion.svg x="0px" y="0px" viewBox="0 0 20 16" style={{height: "32%"}} variants={toggleVariants1}>
            <path d="M1,2h18c0.6,0,1-0.4,1-1s-0.4-1-1-1H1C0.4,0,0,0.4,0,1S0.4,2,1,2z M19,7H1C0.4,7,0,7.4,0,8s0.4,1,1,1h18 c0.6,0,1-0.4,1-1S19.6,7,19,7z M19,14H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S19.6,14,19,14z"></path>
          </motion.svg>
        </motion.div>
      )}

      <div className={style.logo}>
        <Link to="/"><img src="https://media.contentapi.ea.com/content/dam/eacom/common/ea-wordmark-network-nav-coral.svg" alt="logo" /></Link>
      </div>

      <ul className={style.shelf}>
        {data.map((dataObj, key) => (
          <li key={key}>
            <NavbarDropdown
              // @ts-ignore
              data={dataObj}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationNav;
