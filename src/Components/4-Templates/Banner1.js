import { Button } from "Components/1-Atoms/Button";
import { motion, useInView } from "framer-motion";
import useWindowSize from "Hooks/useWindowSize";
import React from "react";
import { useRef } from "react";
import style from "../../SCSS/4-Templates/Banner1.module.scss";

const defaultVideoMockData = [
  "https://media.contentapi.ea.com/content/dam/eacom/ea-app/videos/2022/05/ea-app-designedforspeed-hero-medium-16x9-sm-xs.mp4",
  "https://media.contentapi.ea.com/content/dam/eacom/ea-app/videos/2022/05/ea-app-designedforspeed-hero-medium-2x1-md.mp4",
  "https://media.contentapi.ea.com/content/dam/eacom/ea-app/videos/2022/05/ea-app-designedforspeed-hero-medium-5x2-lg.mp4",
  "https://media.contentapi.ea.com/content/dam/eacom/ea-app/videos/2022/05/ea-app-designedforspeed-hero-medium-7x2-xl.mp4"
]
const defaultImgMockData = [
  "https://media.contentapi.ea.com/content/dam/eacom/ea-app/images/2022/05/ea-app-hero-medium-xl-7x2.png.adapt.crop16x9.320w.png",
  "https://media.contentapi.ea.com/content/dam/eacom/ea-app/images/2022/05/ea-app-hero-medium-xl-7x2.png.adapt.crop16x9.767w.png",
  "https://media.contentapi.ea.com/content/dam/eacom/ea-app/images/2022/05/ea-app-hero-medium-xl-7x2.png.adapt.crop2x1.1023w.png",
  "https://media.contentapi.ea.com/content/dam/eacom/ea-app/images/2022/05/ea-app-hero-medium-xl-7x2.png.adapt.crop5x2.1455w.png",
  "https://media.contentapi.ea.com/content/dam/eacom/ea-app/images/2022/05/ea-app-hero-medium-xl-7x2.png.adapt.crop7x2.1920w.png"
]

function Banner1({ stacked = false, textPosition = "center", textAlign = "center", textColor = "dark", btnTransparent = false, title = "", subTitle = "", body = "", btnContent = "", to = "/", animateEntrance = false, delay = 0, videoOnce = false, bgImg = false, bgImageData = defaultImgMockData, video = false, videoData = defaultVideoMockData, logoImg = "", logoImgWidth = 100, spacerHeightSmall = 0, spacerHeightMedium = 0, spacerHeightLarge = 0, spacerHeightXlarge = 0 }) {
  const { width } = useWindowSize();
  const bannerRef = useRef(null);
  const isInView = useInView(bannerRef, { once: true, margin: "0px 0px -200px 0px" });

  let videoSrc;
  if (width < 768) videoSrc = videoData[0];
  else if (width < 1024) videoSrc = videoData[1];
  else if (width < 1440) videoSrc = videoData[2];
  else videoSrc = videoData[3];

  return (
    // @ts-ignore
    <div ref={bannerRef} className={style.banner} style={{"--imgWidth": `${logoImgWidth}%`, "--spacerHeightSmall": `${spacerHeightSmall}vw`, "--spacerHeightMedium": `${spacerHeightMedium}vw`, "--spacerHeightLarge": `${spacerHeightLarge}vw`, "--spacerHeightXlarge": `${spacerHeightXlarge}vw`}}>
      <div className={style.spacer}></div>
      <div className={`${style.ratio} ${stacked && style.stacked}`}>
        {video ? videoOnce ? <video muted autoPlay src={videoSrc}></video> : <video loop muted autoPlay src={videoSrc}></video> : null}
        {bgImg ? animateEntrance ? (
          <motion.picture initial={{x: 100, opacity: 0}} animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }} transition={{ duration: 1, delay: delay }}>
            <source media="(min-width: 1456px)" srcSet={bgImageData[4]} />
            <source media="(min-width: 1024px)" srcSet={bgImageData[3]} />
            <source media="(min-width: 768px)" srcSet={bgImageData[2]} />
            <source media="(min-width: 320px)" srcSet={bgImageData[1]} />
            <img src={bgImageData[0]} alt="background" />
          </motion.picture>
        ) : (
          <picture>
            <source media="(min-width: 1456px)" srcSet={bgImageData[4]} />
            <source media="(min-width: 1024px)" srcSet={bgImageData[3]} />
            <source media="(min-width: 768px)" srcSet={bgImageData[2]} />
            <source media="(min-width: 320px)" srcSet={bgImageData[1]} />
            <img src={bgImageData[0]} alt="background" />
          </picture>
        ) : null}
      </div>
      {animateEntrance ? (
        <motion.div className={`${style.content} ${stacked && style.stacked}`} initial={{y: 50, opacity: 0}} animate={isInView ? {y: 0, opacity: 1} : {y: 50, opacity: 0}} transition={{duration: 1, delay: delay}} data-text-position={textPosition} data-text-align={textAlign} data-text-color={textColor}>
          {logoImg && <img className={style.logoImg} src={logoImg} alt="logo" />}
          {title && <h1>{title}</h1>}
          {subTitle && <h2>{subTitle}</h2>}
          {body && <h6>{body}</h6>}
          {btnContent && (
            <div className={style.btn}>
              <Button fullWidth content={btnContent} to={to} transparent={btnTransparent} bgClr={!btnTransparent ? (textColor === "dark" ? "var(--clr-dark-700)" : "var(--clr-light-400)") : "transparent"} clr={!btnTransparent ? (textColor === "dark" ? "var(--clr-light-400)" : "var(--clr-dark-700)") : textColor === "dark" ? "var(--clr-dark-700)" : "var(--clr-light-400)"} />
            </div>
          )}
        </motion.div>
      ) : (
        <div className={`${style.content} ${stacked && style.stacked}`} data-text-position={textPosition} data-text-align={textAlign} data-text-color={textColor}>
          {logoImg && <img className={style.logoImg} src={logoImg} alt="logo" />}
          {title && <h1>{title}</h1>}
          {subTitle && <h2>{subTitle}</h2>}
          {body && <h6>{body}</h6>}
          {btnContent && (
            <div className={style.btn}>
              <Button fullWidth content={btnContent} to={to} transparent={btnTransparent} bgClr={!btnTransparent ? (textColor === "dark" ? "var(--clr-dark-700)" : "var(--clr-light-400)") : "transparent"} clr={!btnTransparent ? (textColor === "dark" ? "var(--clr-light-400)" : "var(--clr-dark-700)") : textColor === "dark" ? "var(--clr-dark-700)" : "var(--clr-light-400)"} />
            </div>
          )}
        </div>
      )}
      <div className={style.spacer} data-nth-last ></div>
    </div>
  );
}

export default Banner1;
