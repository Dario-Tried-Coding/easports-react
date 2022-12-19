import SliderTab from "Components/1-Atoms/SliderTab";
import React from "react";
import styleCSS from "../../../SCSS/2-Molecules/Sliders/Slider1.module.scss";

function Slider1({ data = [], activate, activeSet }) {
  return (
    <div className={styleCSS.container}>
      <div className={`${styleCSS["arrow-container"]} ${styleCSS["arrow-container-left"]}`}></div>
      <div className={`${styleCSS["wrapper-div"]}`}>
        <ul className={`${styleCSS.tabs}`}>
          {data.map((obj, index) => (
            <SliderTab key={index} title={obj.setTitle} onClick={activate} active={obj.setTitle === activeSet.setTitle ? true : false} />
          ))}
        </ul>
      </div>
      <div className={`${styleCSS["arrow-container"]} ${styleCSS["arrow-container-right"]}`}></div>
      <div className={`${styleCSS["border-bottom"]}`}></div>
    </div>
  );
}

export default Slider1;
