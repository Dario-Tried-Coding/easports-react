import SliderTab from "Components/1-Atoms/SliderTab";
import { motion, useAnimationControls, useMotionValue, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styleCSS from "../../../SCSS/2-Molecules/Sliders/Slider1.module.scss";

function Slider1({ data = [], activate, activeSet }) {
  const [slidePosition, setSlidePosition] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);

  const sliderRef = useRef(null);
  const tabsRef = useRef(null);

  const controls = useAnimationControls();
  const xMotionValue = useMotionValue(0);
  useMotionValueEvent(xMotionValue, "animationComplete", () => setSlidePosition(Math.round((xMotionValue.get() / maxSlide) * -100)));

  // update maxSlide on resize
  useEffect(() => {
    const updateMaxSlide = () => setMaxSlide(tabsRef.current.offsetWidth - sliderRef.current.offsetWidth);
    
    setMaxSlide(tabsRef.current.offsetWidth - sliderRef.current.offsetWidth);
    window.addEventListener("resize", updateMaxSlide)
    
    return () => window.removeEventListener("resize", updateMaxSlide)
  }, []);

  // snap slidePosition back to 0 if slider not needed (maxSlide < 0)
  useEffect(() => {if (maxSlide <= 0) controls.start({x: 0})}, [maxSlide])

  // slide left/right on arrow click
  function handleArrowDX() {
    const movement = maxSlide * (sliderRef.current.offsetWidth / (maxSlide * 2));
    controls.start({ x: Math.max(-maxSlide, xMotionValue.get() - movement), transition: { duration: 0.4, ease: "easeInOut" } });
  }
  function handleArrowSX() {
    const movement = maxSlide * (sliderRef.current.offsetWidth / (maxSlide * 2));
    controls.start({ x: Math.min(0, xMotionValue.get() + movement), transition: { duration: 0.4, ease: "easeInOut" } });
  }

  // show/hide right or left
  let wrapperDivClassname;
  if (slidePosition === 100) wrapperDivClassname = `${styleCSS["wrapper-div"]} ${styleCSS["hide-left"]}`;
  else if (slidePosition === 0) wrapperDivClassname = `${styleCSS["wrapper-div"]} ${styleCSS["hide-right"]}`;
  else wrapperDivClassname = `${styleCSS["wrapper-div"]} ${styleCSS["hide-both"]}`;

  return (
    <div className={styleCSS.container}>
      {maxSlide > 0 && slidePosition > 0 && <div onClick={handleArrowSX} className={`${styleCSS["arrow-container"]} ${styleCSS["arrow-container-left"]}`}></div>}
      <div className={wrapperDivClassname}>
        <div ref={sliderRef}>
          <motion.ul ref={tabsRef} drag="x" dragConstraints={sliderRef} dragMomentum={false} dragElastic={false} dragListener={maxSlide <= 0 ? false : true} animate={controls} style={{ x: xMotionValue }}>
            {data.map((obj, index) => (
              <SliderTab key={index} title={obj.setTitle} onClick={activate} active={obj.setTitle === activeSet.setTitle ? true : false} />
            ))}
          </motion.ul>
        </div>
      </div>
      {maxSlide > 0 && slidePosition < 100 && <div onClick={handleArrowDX} className={`${styleCSS["arrow-container"]} ${styleCSS["arrow-container-right"]}`}></div>}
      <div className={`${styleCSS["border-bottom"]}`}></div>
    </div>
  );
}

export default Slider1;
