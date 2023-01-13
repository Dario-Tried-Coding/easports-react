import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import NavigationNav from "./NavigationNav";
import NetworkNav from "./NetworkNav";

import style from "../../SCSS/4-Templates/Navigation.module.scss";

const isVisibleVariants = {
  visible: { y: 0 },
  hidden: { y: -40 },
};

const mockData = [
  {
    btn: "Button 1",
    singleColumn: false,
    columns: [
      {
        heading: "Column Heading",
        links: ["Link label", "Link label", "Link label", "Link label", "Link label", "Link label"],
      },
      {
        heading: "Column Heading",
        links: ["Link label", "Link label", "Link label", "Link label", "Link label"],
      },
    ],
  },
  {
    btn: "Button 2",
    singleColumn: true,
    links: ["Link label", "Link label", "Link label", "Link label", "Link label"],
  },
  {
    btn: "Button 3",
    singleColumn: true,
    links: ["Link label", "Link label", "Link label", "Link label", "Link label"],
  },
  {
    btn: "Button 4",
    singleColumn: true,
    links: ["Link label", "Link label", "Link label", "Link label", "Link label"],
  },
  {
    btn: "Button 5",
    singleColumn: true,
    links: ["Link label", "Link label", "Link label", "Link label", "Link label"],
  },
];

function Navigation({data = mockData}) {
  const [isVisible, setIsVisible] = useState(true);

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

  return (
    <>
      <motion.nav className={style.nav} animate={isVisible ? "visible" : "hidden"} variants={isVisibleVariants} transition={{ ease: [0.5, 0.25, 0.015, 1], duration: 0.4 }}>
        <NetworkNav />
        <NavigationNav data={data} />
      </motion.nav>
      <div className={style.spacer}></div>
    </>
  );
}

export default Navigation;
