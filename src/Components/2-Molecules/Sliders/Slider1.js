import SliderTab from "Components/1-Atoms/SliderTab";
import { motion, useMotionValue } from "framer-motion";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styleCSS from "../../../SCSS/2-Molecules/Sliders/Slider1.module.scss";

function Slider1({ data = [], activate, activeSet }) {
  function getTranslation() {
    return (slidePosition * maxSlide) / -100;
  }

  const sliderRef = useRef(null);
  const tabsRef = useRef(null);

  const [slidePosition, setSlidePosition] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);
  const [dragging, setDragging] = useState(false);

  const xMotionValue = useMotionValue(0);

  function handleArrowClickDx() {
    const movement = maxSlide * (sliderRef.current.offsetWidth / (maxSlide * 2))
    setSlidePosition(Math.min(100, slidePosition + Math.round(movement / maxSlide * 100)))
  }
  function handleArrowClickSx() {
    const movement = maxSlide * (sliderRef.current.offsetWidth / (maxSlide * 2))
    setSlidePosition(Math.max(0, slidePosition + Math.round(movement / maxSlide * -100)))
  }

  let wrapperDivClassname
  if (slidePosition === 100) wrapperDivClassname = `${styleCSS["wrapper-div"]} ${styleCSS["hide-left"]}`
  else if (slidePosition === 0) wrapperDivClassname = `${styleCSS["wrapper-div"]} ${styleCSS["hide-right"]}`
  else wrapperDivClassname = `${styleCSS["wrapper-div"]} ${styleCSS["hide-both"]}`

  useEffect(() => {
    function getMaxSlide() {
      setMaxSlide(tabsRef.current.offsetWidth - sliderRef.current.offsetWidth);
    }

    getMaxSlide()
    window.addEventListener("resize", getMaxSlide)
    return () => window.removeEventListener("resize", getMaxSlide)
  });
  useEffect(() => {if (maxSlide < 0) setSlidePosition(0)}, [maxSlide]);

  return (
    <div className={styleCSS.container}>
      {maxSlide > 0 && slidePosition > 0 && <div onClick={handleArrowClickSx} className={`${styleCSS["arrow-container"]} ${styleCSS["arrow-container-left"]}`}></div>}
      <div className={wrapperDivClassname}>
        <div ref={sliderRef}>
          <motion.ul ref={tabsRef} drag={maxSlide > 0 ? "x" : false} onDragStart={() => setDragging(true)} onDrag={() => setSlidePosition(Math.round((xMotionValue.get() / maxSlide) * -100))} onDragEnd={() => setDragging(false)} dragConstraints={sliderRef} dragMomentum={false} dragElastic={false} style={{ x: xMotionValue }} animate={dragging ? false : { x: getTranslation() }} transition={{duration: 0.4, ease: "easeInOut"}}>
            {data.map((obj, index) => (
              <SliderTab key={index} title={obj.setTitle} onClick={activate} active={obj.setTitle === activeSet.setTitle ? true : false} />
            ))}
          </motion.ul>
        </div>
      </div>
      {maxSlide > 0 && slidePosition < 100 && <div onClick={handleArrowClickDx} className={`${styleCSS["arrow-container"]} ${styleCSS["arrow-container-right"]}`}></div>}
      <div className={`${styleCSS["border-bottom"]}`}></div>
    </div>
  );
}

export default Slider1;
