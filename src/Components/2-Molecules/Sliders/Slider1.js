import SliderTab from "Components/1-Atoms/SliderTab";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styleCSS from "../../../SCSS/2-Molecules/Sliders/Slider1.module.scss";

function Slider1({ data = [], activate, activeSet }) {
  const [slidePosition, setSlidePosition] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);

  const xMotionValue = useMotionValue(0);
  useMotionValueEvent(xMotionValue, "animationComplete", () => setSlidePosition(xMotionValue.get()));

  const sliderRef = useRef(null);
  const tabsRef = useRef(null);

  function handleArrowDX() {
    const end = (100 * (sliderRef.current.offsetWidth - tabsRef.current.offsetWidth)) / 100;
    const movement = slidePosition - maxSlide * (sliderRef.current.offsetWidth / (maxSlide * 2));
    setSlidePosition(Math.max(end, movement));
  }
  function handleArrowSX() {
    const end = (0 * (sliderRef.current.offsetWidth - tabsRef.current.offsetWidth)) / 100;
    const movement = slidePosition + maxSlide * (sliderRef.current.offsetWidth / (maxSlide * 2));
    setSlidePosition(Math.min(end, movement));
  }

  let wrapperDivClassname
  if (maxSlide < 0) {
    if (slidePosition >= 0) {wrapperDivClassname = `${styleCSS["wrapper-div"]} ${styleCSS["hide-right"]}`}
    else if (slidePosition <= maxSlide) {wrapperDivClassname = `${styleCSS["wrapper-div"]} ${styleCSS["hide-left"]}`}
    else {wrapperDivClassname = `${styleCSS["wrapper-div"]} ${styleCSS["hide-both"]}`}
  } else wrapperDivClassname = `${styleCSS["wrapper-div"]}`

  useEffect(() => {
    function updateMaxSlide() {
      setMaxSlide(sliderRef.current.offsetWidth - tabsRef.current.offsetWidth);
    }

    updateMaxSlide()
    window.addEventListener("resize", updateMaxSlide)
  });
  useEffect(() => {if (maxSlide > 0) setSlidePosition(0)}, [maxSlide])

  return (
    <div className={styleCSS.container}>
      {maxSlide < 0 && slidePosition < 0 - 5 && <div onClick={handleArrowSX} className={`${styleCSS["arrow-container"]} ${styleCSS["arrow-container-left"]}`}></div>}
      <div className={wrapperDivClassname}>
        <div ref={sliderRef} style={{overflow: "visible"}}>
          <motion.ul ref={tabsRef} drag={maxSlide < 0 ? "x" : false} dragConstraints={sliderRef} dragMomentum={false} dragElastic={false} style={{ x: xMotionValue }} animate={{ x: slidePosition }}>
            {data.map((obj, index) => (
              <SliderTab key={index} title={obj.setTitle} onClick={activate} active={obj.setTitle === activeSet.setTitle ? true : false} />
            ))}
          </motion.ul>
        </div>
      </div>
      {maxSlide < 0 && slidePosition > maxSlide + 5 && <div onClick={handleArrowDX} className={`${styleCSS["arrow-container"]} ${styleCSS["arrow-container-right"]}`}></div>}
      <div className={`${styleCSS["border-bottom"]}`}></div>
    </div>
  );
}

export default Slider1;
