import SliderTab from "Components/1-Atoms/SliderTab";
import React, { useRef } from "react";
import styleCSS from "../../../SCSS/2-Molecules/Sliders/Slider1.module.scss";

function Slider1({ data = [], activate, activeSet }) {
  const wrapperDiv = useRef(null);
  const tabs = useRef();
  const arrowSx = useRef(null);
  const arrowDx = useRef(null);
  const startEvents = ["mousedown", "touchstart"];
  const endEvents = ["mouseup", "mouseleave", "touchend"];
  const moveEvents = ["mousemove", "touchmove"];

  let tabsWidth;
  let wrapperDivWidth;
  let maxSlide;
  let movement;
  let slidePosition;
  let previousWindowWidth = window.innerWidth;
  let pressed = false
  let startX

  // get the actual width of an element content box
  function getContentWidth(elem) {
    const computedStyles = window.getComputedStyle(elem.current);
    const bodyWidth = window.innerWidth;
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    return bodyWidth - parseFloat(computedStyles.paddingLeft) - parseFloat(computedStyles.paddingRight) - scrollbarWidth;
  }

  // adjust slider's sliding position to look good also on window's resizing
  function makeSliderFollowResizing() {
    // @ts-ignore
    tabs.current.style.transition = "none";
    const newWindowWidth = window.innerWidth;

    if (newWindowWidth > previousWindowWidth) {
      if (maxSlide > 0) {
        if (slidePosition > maxSlide) {
          slidePosition = maxSlide;
          // @ts-ignore
          tabs.current.style.transform = `translateX(${-slidePosition}px)`;
        }
      } else {
        slidePosition = 0;
        // @ts-ignore
        tabs.current.style.transform = `translateX(${-slidePosition}px)`;
      }
    }

    previousWindowWidth = newWindowWidth;

    setTimeout(() => {
      // @ts-ignore
      tabs.current.style.transition = "transform 0.4s";
    });
  }

  //set the magic needed for the slider to work ;-)
  function setSlider() {
    // @ts-ignore
    tabsWidth = tabs.current.offsetWidth; //update how long the slider is
    wrapperDivWidth = getContentWidth(wrapperDiv); //update how much space is for the slider to show
    maxSlide = tabsWidth - wrapperDivWidth; //calculate how much sliding is needed for the slider to reach the end with these new values
    movement = maxSlide * (wrapperDivWidth / (maxSlide * 2)); //determine a 'user-friendly' amount of scroll to be executed at every arrow click

    makeSliderFollowResizing();
    hideShowArrows();
  }

  //slide the slider on 'arrow click'
  function slideSlider(arrow) {
    arrow.current.addEventListener("click", (e) => {
      if (e.target === arrowDx.current) {
        slidePosition += movement;
        if (slidePosition < maxSlide) {
          // @ts-ignore
          tabs.current.style.transform = `translateX(${-slidePosition}px)`;
        } else {
          // @ts-ignore
          tabs.current.style.transform = `translateX(${-maxSlide}px)`;
          slidePosition = maxSlide;
        }
      } else {
        slidePosition -= movement;
        if (slidePosition > 0) {
          // @ts-ignore
          tabs.current.style.transform = `translateX(${-slidePosition}px)`;
        } else {
          // @ts-ignore
          tabs.current.style.transform = `translateX(0px)`;
          slidePosition = 0;
        }
      }
      hideShowArrows();
    });
  }
  
  // drag the slider
  function dragSlider() {
    startEvents.forEach(eventTupe => {
        wrapperDiv.current.addEventListener(eventTupe, e => {
            if (wrapperDivWidth < tabsWidth) {
                pressed = true
                startX = e.pageX
            }
        })
    })
    
    endEvents.forEach(eventTupe => {
        window.addEventListener(eventTupe, () => {
            pressed = false
        })
    })

    moveEvents.forEach(eventTupe => {
        window.addEventListener(eventTupe, e => {
            if (!pressed) return
    
            e.preventDefault()
            // @ts-ignore
            const x = e.pageX
            slidePosition += startX - x
            
            // @ts-ignore
            tabs.current.style.transition = "none"
            if (slidePosition < 0) slidePosition = 0
            else if (slidePosition > maxSlide) slidePosition = maxSlide
            // @ts-ignore
            tabs.current.style.transform = `translateX(${-slidePosition}px)`
            setTimeout(() => {
                // @ts-ignore
                tabs.current.style.transition = "transform 0.4s"
            }, 500)
    
            startX = x
            hideShowArrows()
        })
    })
}

  //when to show which arrow
  function hideShowArrows() {
    // if scroll is needed...
    if (tabsWidth > wrapperDivWidth) {
      // and the slider is nor at the start or at the end
      if (slidePosition > 0 && slidePosition < maxSlide) {
        arrowSx.current.style.display = "flex";
        arrowDx.current.style.display = "flex";
        wrapperDiv.current.className = `${styleCSS["wrapper-div"]} ${styleCSS["hide-both"]}`;
      } //instead if it's at the start
      else if (slidePosition <= 0) {
        arrowSx.current.style.display = "none";
        arrowDx.current.style.display = "flex";
        wrapperDiv.current.className = `${styleCSS["wrapper-div"]} ${styleCSS["hide-right"]}`;
      } //instead if it's at the end
      else if (slidePosition >= maxSlide) {
        arrowSx.current.style.display = "flex";
        arrowDx.current.style.display = "none";
        wrapperDiv.current.className = `${styleCSS["wrapper-div"]} ${styleCSS["hide-left"]}`;
      }
    } // instead if scroll is not needed
    else {
      arrowSx.current.style.display = "none";
      arrowDx.current.style.display = "none";
      wrapperDiv.current.className = `${styleCSS["wrapper-div"]}`;
    }
  }

  // functional code
  window.addEventListener("load", () => {
    slidePosition = 0;
    setSlider();
    dragSlider()
    slideSlider(arrowDx);
    slideSlider(arrowSx);
  });

  window.addEventListener("resize", () => {
    setSlider();
  });

  return (
    <div className={styleCSS.container}>
      <div ref={arrowSx} className={`${styleCSS["arrow-container"]} ${styleCSS["arrow-container-left"]}`}></div>
      <div ref={wrapperDiv} className={`${styleCSS["wrapper-div"]}`}>
        <ul ref={tabs}>
          {data.map((obj, index) => (
            <SliderTab key={index} title={obj.setTitle} onClick={activate} active={obj.setTitle === activeSet.setTitle ? true : false} />
          ))}
        </ul>
      </div>
      <div ref={arrowDx} className={`${styleCSS["arrow-container"]} ${styleCSS["arrow-container-right"]}`}></div>
      <div className={`${styleCSS["border-bottom"]}`}></div>
    </div>
  );
}

export default Slider1;
