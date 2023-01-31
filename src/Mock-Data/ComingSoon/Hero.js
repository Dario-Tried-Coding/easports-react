// data[0] -> default
// data[1] -> small
// data[2] -> medium
// data[3] -> large
// data[4] -> xlarge

const data = [
  "https://media.contentapi.ea.com/content/dam/eacom/images/2022/07/ea-hero-md-bg-mashup-trailer-pegi-16-7x2-xl.png.adapt.crop16x9.320w.png",
  "https://media.contentapi.ea.com/content/dam/eacom/images/2022/07/ea-hero-md-bg-mashup-trailer-pegi-16-7x2-xl.png.adapt.crop16x9.767w.png",
  "https://media.contentapi.ea.com/content/dam/eacom/images/2022/07/ea-hero-md-bg-mashup-trailer-pegi-16-7x2-xl.png.adapt.crop2x1.1023w.png",
  "https://media.contentapi.ea.com/content/dam/eacom/images/2022/07/ea-hero-md-bg-mashup-trailer-pegi-16-7x2-xl.png.adapt.crop5x2.1455w.png",
  "https://media.contentapi.ea.com/content/dam/eacom/images/2022/07/ea-hero-md-bg-mashup-trailer-pegi-16-7x2-xl.png.adapt.crop7x2.1920w.png"
]

const videoData = [
  "https://media.contentapi.ea.com/content/dam/eacom/videos/2022/10/ea-about-top-video-sizzle-s.mp4",
  "https://media.contentapi.ea.com/content/dam/eacom/videos/2022/10/ea-about-top-video-sizzle-m.mp4",
  "https://media.contentapi.ea.com/content/dam/eacom/videos/2022/10/ea-games-hero-md-fy23-sizzle-reel-5x2-lg.mp4",
  "https://media.contentapi.ea.com/content/dam/eacom/videos/2022/10/ea-games-hero-md-fy23-sizzle-reel-7x2-xl.mp4"
]

export default JSON.stringify(data)
export const HeroVideo = JSON.stringify(videoData)