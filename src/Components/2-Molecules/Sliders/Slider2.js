import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import SliderTab2 from "Components/1-Atoms/SliderTab2";

import style from "../../../SCSS/2-Molecules/Sliders/Slider2.module.scss";

const defaultMockData = [
  {
    isActive: true,
    to: "/",
    text: "default1",
  },
  {
    isActive: false,
    to: "/",
    text: "default2",
  },
  {
    isActive: false,
    to: "/",
    text: "default3",
  },
  {
    isActive: false,
    to: "/",
    text: "default4",
  },
  {
    isActive: false,
    to: "/",
    text: "default5",
  },
  {
    isActive: false,
    to: "/",
    text: "default6",
  },
];

function Slider2({ data = defaultMockData }) {
  const [slidePosition, setSlidePosition] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);

  const containerRef = useRef(null);
  const tabsRef = useRef(null);
  const prevMaxSlideValue = useRef(0);

  // slide slider on click
  function handleArrowDXClick() {
    if (slidePosition - maxSlide * (containerRef.current.offsetWidth / (maxSlide * 2)) < maxSlide) setSlidePosition(maxSlide);
    else setSlidePosition(slidePosition - maxSlide * (containerRef.current.offsetWidth / (maxSlide * 2)));
  }
  function handleArrowSXClick() {
    if (slidePosition + maxSlide * (containerRef.current.offsetWidth / (maxSlide * 2)) > 0) setSlidePosition(0);
    else setSlidePosition(slidePosition + maxSlide * (containerRef.current.offsetWidth / (maxSlide * 2)));
  }

  // update maxSlide on resizing
  useEffect(() => {
    function updateMaxSlide() {
      setMaxSlide(containerRef.current.offsetWidth - tabsRef.current.offsetWidth);
    }

    if (containerRef.current && tabsRef.current) updateMaxSlide();

    window.addEventListener("resize", updateMaxSlide);
    return () => window.removeEventListener("resize", updateMaxSlide);
  }, [tabsRef, containerRef]);

  // ensure slidePosition looks good on resizing
  useEffect(() => {
    if (prevMaxSlideValue.current < maxSlide) {
      if (maxSlide < 0) {
        if (slidePosition < maxSlide) setSlidePosition(maxSlide);
      } else setSlidePosition(0);
    }

    prevMaxSlideValue.current = maxSlide;
  }, [maxSlide]);

  function giveWrapperDivClassname() {
    switch (slidePosition) {
      case 0:
        return `${style.wrapperDiv} ${style.hideRight}`;
      case maxSlide:
        return `${style.wrapperDiv} ${style.hideLeft}`;
      default:
        return `${style.wrapperDiv} ${style.hideBoth}`;
    }
  }

  return (
    <div className={style.container}>
      {maxSlide <= 0 && slidePosition !== 0 && <div className={`${style.arrowContainer} ${style.arrowContainerLeft}`} onClick={handleArrowSXClick}></div>}
      <div className={giveWrapperDivClassname()}>
        <div ref={containerRef}>
          <motion.ul ref={tabsRef} animate={{ x: slidePosition }} transition={{ duration: 0.4, ease: "easeInOut" }}>
            {data.map((obj, i) => (
              <SliderTab2 key={i} isActive={obj.isActive} to={obj.to} text={obj.text} />
            ))}
          </motion.ul>
        </div>
      </div>
      {maxSlide <= 0 && slidePosition !== maxSlide && <div className={`${style.arrowContainer} ${style.arrowContainerRight}`} onClick={handleArrowDXClick}></div>}
      <div className={style.borderBottom}></div>
    </div>
  );
}

export default Slider2;
