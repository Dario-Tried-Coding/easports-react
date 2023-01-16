import { motion, useScroll } from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";
import NavigationNav from "../3-Organisms/NavigationNav";
import NetworkNav from "../3-Organisms/NetworkNav";

import style from "../../SCSS/4-Templates/Navigation.module.scss";
import Sidebar from "../3-Organisms/Sidebar";
import useScrollBlock from "Hooks/useScrollBlock";
import ScrollBlockedContext from "Context/ScrollBlockedContext";

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
const defaultSidebarDesktopMockData = {
  bigImg: {
    bgImg: "https://via.placeholder.com/767",
    logoImg: "https://via.placeholder.com/300x100/ffffff/000000",
    to: "/",
    bgImgAlt: "description",
    logoImgAlt: "description",
    logoImgWidth: 30
  },
  cards: [
    {
      bgImg: "https://via.placeholder.com/767",
      logoImg: "https://via.placeholder.com/300x100/ffffff/000000",
      to: "/",
      bgImgAlt: "description",
      logoImgAlt: "description",
      logoImgWidth: 30
    },
    {
      bgImg: "https://via.placeholder.com/767",
      logoImg: "https://via.placeholder.com/300x100/ffffff/000000",
      to: "/",
      bgImgAlt: "description",
      logoImgAlt: "description",
      logoImgWidth: 30
    },
    {
      bgImg: "https://via.placeholder.com/767",
      logoImg: "https://via.placeholder.com/300x100/ffffff/000000",
      to: "/",
      bgImgAlt: "description",
      logoImgAlt: "description",
      logoImgWidth: 30
    },
    {
      bgImg: "https://via.placeholder.com/767",
      logoImg: "https://via.placeholder.com/300x100/ffffff/000000",
      to: "/",
      bgImgAlt: "description",
      logoImgAlt: "description",
      logoImgWidth: 30
    },
    {
      bgImg: "https://via.placeholder.com/767",
      logoImg: "https://via.placeholder.com/300x100/ffffff/000000",
      to: "/",
      bgImgAlt: "description",
      logoImgAlt: "description",
      logoImgWidth: 30
    },
    {
      bgImg: "https://via.placeholder.com/767",
      logoImg: "https://via.placeholder.com/300x100/ffffff/000000",
      to: "/",
      bgImgAlt: "description",
      logoImgAlt: "description",
      logoImgWidth: 30
    },
  ]
}

const MotionSidebar = motion(Sidebar)

function Navigation({navigationData = mockData, sidebarData = defaultSidebarDesktopMockData, children}) {
  const [isVisible, setIsVisible] = useState(true);
  const {isScrollBlocked, setIsScrollBlocked} = useContext(ScrollBlockedContext)
  const pageContent = useRef(null)

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

  // sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false)
  function handleToggleClick() {
    setIsVisible(true)
    setSidebarOpen(true)
    setIsScrollBlocked(true)
  }
  function handleCloseSidebar() {
    if (scrollY.current !== 0) setIsVisible(false)
    setSidebarOpen(false)
    setIsScrollBlocked(false)
  }

  // anable/disable scroll
  const [blockScroll, allowScroll] = useScrollBlock();
  if (isScrollBlocked) blockScroll()
  else allowScroll()

  return (
    <>
      <motion.nav className={style.nav} animate={isVisible ? "visible" : "hidden"} variants={isVisibleVariants} transition={{ ease: [0.5, 0.25, 0.015, 1], duration: 0.4 }}>
        <NetworkNav pageContentRef={pageContent} />
        <NavigationNav openSidebar={handleToggleClick} data={navigationData} />
        <MotionSidebar initial={false} animate={{x: sidebarOpen ? 0 : "-100%"}} closeSidebar={handleCloseSidebar} navigationData={navigationData} sidebarData={sidebarData} />
        <motion.div onClick={handleCloseSidebar} className={style.backdrop} initial={false} animate={sidebarOpen ? {opacity: 0.7, pointerEvents: "auto"} : {opacity: 0, pointerEvents: "none"}} transition={{duration: 0.2}}></motion.div>
      </motion.nav>
      <div className={style.spacer}></div>
      <div ref={pageContent}>
        {children}
      </div>
    </>
  );
}

export default Navigation;
