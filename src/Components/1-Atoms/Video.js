import useWindowSize from "Hooks/useWindowSize";
import React from "react";
import style from "../../SCSS/1-Atoms/Video.module.scss"

const defaultMockData = [
  "https://media.contentapi.ea.com/content/dam/eacom/ea-app/videos/2022/05/ea-app-game-tile-row-xs-s-16x9.mp4",
  "https://media.contentapi.ea.com/content/dam/eacom/ea-app/videos/2022/05/ea-app-game-tile-row-m-2x1.mp4",
  "https://media.contentapi.ea.com/content/dam/eacom/ea-app/videos/2022/05/ea-app-game-tile-row-l-3x2.mp4",
  "https://media.contentapi.ea.com/content/dam/eacom/ea-app/videos/2022/05/ea-app-game-tile-row-xl-7x2.mp4"
]

function Video({data = defaultMockData, autoPlay = false, loop = false}) {
  const { width } = useWindowSize();

  let videoSrc
  if (width < 768) videoSrc = data[0]
  else if (width < 1024) videoSrc = data[1];
  else if (width < 1440) videoSrc = data[2];
  else videoSrc = data[3];

  return <video className={style.video} autoPlay={autoPlay} loop={loop} muted src={videoSrc}></video>;
}

export default Video