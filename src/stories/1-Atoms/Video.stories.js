import React from 'react';
import Video from 'Components/1-Atoms/Video';

export default {
  title: "Atoms/Video",
  component: Video
}

export const template = (args) => <Video {...args} />
template.args = {
  autoPlay: true,
  loop: false,
  data: [
    "https://media.contentapi.ea.com/content/dam/eacom/ea-app/videos/2022/05/ea-app-game-tile-row-xs-s-16x9.mp4",
    "https://media.contentapi.ea.com/content/dam/eacom/ea-app/videos/2022/05/ea-app-game-tile-row-m-2x1.mp4",
    "https://media.contentapi.ea.com/content/dam/eacom/ea-app/videos/2022/05/ea-app-game-tile-row-l-3x2.mp4",
    "https://media.contentapi.ea.com/content/dam/eacom/ea-app/videos/2022/05/ea-app-game-tile-row-xl-7x2.mp4"
  ]
}