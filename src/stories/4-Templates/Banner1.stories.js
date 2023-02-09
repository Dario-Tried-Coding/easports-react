import React from 'react';
import Banner1 from 'Components/4-Templates/Banner1';

export default {
  title: "Templates/Banner1",
  component: Banner1,
  argTypes: {
    contentBgColor: {
      control: "color"
    },
    textPosition: {
      control: "inline-radio",
      options: ["left", "center", "right"]
    },
    textAlign: {
      control: "inline-radio",
      options: ["left", "center", "right"]
    },
    textColor: {
      control: "inline-radio",
      options: ["light", "dark"]
    }
  }
}

export const hero1 = (args) => <Banner1 {...args}/>
hero1.args = {
  stacked: true,
  animateEntrance: false,
  contentBgColor: "rgba(255, 255, 255, 0)",
  textPosition: "left",
  textAlign: "center",
  textColor: "dark",
  btnTransparent: false,
  title: "2022: A Year Powered by Play",
  subTitle: "A look back at how players enjoyed our games in 2022",
  btnContent: "Explore Now",
  bgImg: true,
  bgImageData: [
    "https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-year-in-gaming-2022-hero-md-7x2-xl.jpg.adapt.crop16x9.320w.jpg",
    "https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-year-in-gaming-2022-hero-md-7x2-xl.jpg.adapt.crop16x9.767w.jpg",
    "https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-year-in-gaming-2022-hero-md-7x2-xl.jpg.adapt.crop2x1.1023w.jpg",
    "https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-year-in-gaming-2022-hero-md-7x2-xl.jpg.adapt.crop5x2.1455w.jpg",
    "https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-year-in-gaming-2022-hero-md-7x2-xl.jpg.adapt.crop7x2.1920w.jpg",
  ]
}
hero1.parameters = {
  controls: {
    exclude: ["body", "to", "delay", "videoOnce", "video", "videoData", "logoImg", "logoImgWidth", "spacerHeightSmall","spacerHeightMedium", "spacerHeightLarge", "spacerHeightXlarge" ]
  }
}

export const hero2 = (args) => <Banner1 {...args}/>
hero2.args = {
  stacked: true,
  animateEntrance: true,
  contentBgColor: "rgba(255, 255, 255, 0)",
  textPosition: "right",
  textAlign: "center",
  textColor: "light",
  btnTransparent: false,
  logoImg: "https://media.contentapi.ea.com/content/dam/gin/common/logos/dead-space-logo-main-page-hero-marge.svg",
  title: "Gioca oggi a Dead Space™",
  btnContent: "Acquista ora",
  video: true,
  videoData: [
    "https://media.contentapi.ea.com/content/dam/eacom/dead-space/videos/2022/11/dead-space-hero-video-landing-hero-sm-xs.mp4",
    "https://media.contentapi.ea.com/content/dam/eacom/dead-space/videos/2022/11/dead-space-hero-video-landing-hero-md.mp4",
    "https://media.contentapi.ea.com/content/dam/eacom/dead-space/videos/2022/11/dead-space-hero-video-landing-hero-l.mp4",
    "https://media.contentapi.ea.com/content/dam/eacom/dead-space/videos/2022/11/dead-space-hero-video-landing-hero-xl.mp4"
  ],
  spacerHeightSmall: 43.75,
  spacerHeightMedium: 6,
  spacerHeightLarge: 6,
  spacerHeightXlarge: 6,
}
hero2.parameters = {
  controls: {
    exclude: ["body", "to", "delay", "videoOnce", "bgImg", "bgImageData", "logoImgWidth", "subTitle"]
  }
}

export const hero3 = (args) => <Banner1 {...args}/>
hero3.args = {
  stacked: true,
  animateEntrance: true,
  contentBgColor: "rgba(255, 255, 255, 0)",
  videoOnce: true,
  textPosition: "right",
  textAlign: "left",
  textColor: "dark",
  btnTransparent: false,
  title: "Progettata per la velocità",
  body: "Con questa piattaforma veloce e ottimizzata, scoprire, scaricare e giocare è più facile che mai. Accedi ai tuoi giochi in meno tempo e meno clic.",
  video: true,
  videoData: [
    "https://media.contentapi.ea.com/content/dam/eacom/ea-app/videos/2022/05/ea-app-designedforspeed-hero-medium-16x9-sm-xs.mp4",
    "https://media.contentapi.ea.com/content/dam/eacom/ea-app/videos/2022/05/ea-app-designedforspeed-hero-medium-2x1-md.mp4",
    "https://media.contentapi.ea.com/content/dam/eacom/ea-app/videos/2022/05/ea-app-designedforspeed-hero-medium-5x2-lg.mp4",
    "https://media.contentapi.ea.com/content/dam/eacom/ea-app/videos/2022/05/ea-app-designedforspeed-hero-medium-7x2-xl.mp4"
  ]
}
hero3.parameters = {
  controls: {
    exclude: ["to", "delay", "bgImg", "bgImageData", "logoImg", "logoImgWidth", "subTitle", "btnContent", "spacerHeightSmall","spacerHeightMedium", "spacerHeightLarge", "spacerHeightXlarge" ]
  }
}

export const video = (args) => <Banner1 {...args}/>
video.args = {
  stacked: true,
  animateEntrance: false,
  contentBgColor: "rgba(255, 255, 255, 0)",
  bgImg: true,
  bgImageData: [
    "https://media.contentapi.ea.com/content/dam/eacom/images/2022/07/ea-hero-md-bg-mashup-trailer-pegi-16-7x2-xl.png.adapt.crop16x9.320w.png",
    "https://media.contentapi.ea.com/content/dam/eacom/images/2022/07/ea-hero-md-bg-mashup-trailer-pegi-16-7x2-xl.png.adapt.crop16x9.767w.png",
    "https://media.contentapi.ea.com/content/dam/eacom/images/2022/07/ea-hero-md-bg-mashup-trailer-pegi-16-7x2-xl.png.adapt.crop2x1.1023w.png",
    "https://media.contentapi.ea.com/content/dam/eacom/images/2022/07/ea-hero-md-bg-mashup-trailer-pegi-16-7x2-xl.png.adapt.crop5x2.1455w.png",
    "https://media.contentapi.ea.com/content/dam/eacom/images/2022/07/ea-hero-md-bg-mashup-trailer-pegi-16-7x2-xl.png.adapt.crop7x2.1920w.png"
  ],
  video: true,
  videoData: [
    "https://media.contentapi.ea.com/content/dam/eacom/videos/2022/10/ea-about-top-video-sizzle-s.mp4",
    "https://media.contentapi.ea.com/content/dam/eacom/videos/2022/10/ea-about-top-video-sizzle-m.mp4",
    "https://media.contentapi.ea.com/content/dam/eacom/videos/2022/10/ea-games-hero-md-fy23-sizzle-reel-5x2-lg.mp4",
    "https://media.contentapi.ea.com/content/dam/eacom/videos/2022/10/ea-games-hero-md-fy23-sizzle-reel-7x2-xl.mp4"
  ]
}
video.parameters = {
  controls: {
    exclude: ["textPosition", "textAlign", "textColor", "btnTransparent", "body", "btnContent", "logoImg", "logoImgWidth", "title", "subTitle", "to", "delay", "videoOnce", "spacerHeightSmall","spacerHeightMedium", "spacerHeightLarge", "spacerHeightXlarge" ]
  }
}