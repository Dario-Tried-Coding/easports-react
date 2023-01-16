import { Banner } from "Components/4-Templates/Banner";
import Play from "Mock-Data/Home/Play";
import React from "react";

const hero1 = [
  "https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-year-in-gaming-2022-hero-md-7x2-xl.jpg.adapt.crop16x9.320w.jpg",
  "https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-year-in-gaming-2022-hero-md-7x2-xl.jpg.adapt.crop16x9.767w.jpg",
  "https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-year-in-gaming-2022-hero-md-7x2-xl.jpg.adapt.crop2x1.1023w.jpg",
  "https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-year-in-gaming-2022-hero-md-7x2-xl.jpg.adapt.crop5x2.1455w.jpg",
  "https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-year-in-gaming-2022-hero-md-7x2-xl.jpg.adapt.crop7x2.1920w.jpg"
]
const hero2 = [
  "https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-homepage-f23-vote-now-hero-med-7x2-xl.png.adapt.crop16x9.320w.png",
  "https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-homepage-f23-vote-now-hero-med-7x2-xl.png.adapt.crop16x9.767w.png",
  "https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-homepage-f23-vote-now-hero-med-7x2-xl.png.adapt.crop2x1.1023w.png",
  "https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-homepage-f23-vote-now-hero-med-7x2-xl.png.adapt.crop5x2.1455w.png",
  "https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-homepage-f23-vote-now-hero-med-7x2-xl.png.adapt.crop7x2.1920w.png"
]
const play = JSON.parse(Play);

export default {
  title: "Templates/Banner",
  component: Banner,
  argTypes: {
    textPosition: { 
      control: "select",
      options: ["left", "center", "right"]
    },
    textAlign: { 
      control: "select",
      options: ["left", "center", "right"]
    },
    btnColor: {
      control: {
        type: 'color',
        presetColors: ['rgb(242, 242, 242)', 'rgb(23, 23, 23)']
      }
    },
    btnBgColor: {
      control: {
        type: 'color',
        presetColors: ['rgb(242, 242, 242)', 'rgb(23, 23, 23)', "rgba(100, 100, 100, 0)"]
      }
    }
  },
};

export const heroSection1 = ({ stacked, margInlineXL, btnColor, btnBgColor, btnTransparent, btnContent, textAlign, textPosition, textClrLight, title, subtitle, args }) => <Banner stacked={stacked} margInlineXL={margInlineXL} textClrLight={textClrLight} textPosition={textPosition} textAlign={textAlign} bgImageData={hero1} title={title} subtitle={subtitle} btnTransparent={btnTransparent} btnColor={btnColor} btnBgColor={btnBgColor} btnContent={btnContent} {...args} />;
heroSection1.args = {
  stacked: true,
  textClrLight: false,
  title: "2022: A Year Powered by Play",
  subtitle: "A look back at how players enjoyed our games in 2022",
  textPosition: "left",
  textAlign: "center",
  btnContent: "Explore Now",
  btnTransparent: false,
  btnColor: "rgb(242, 242, 242)",
  btnBgColor: "rgb(23, 23, 23)",
  margInlineXL: "6%"
};
heroSection1.parameters = {
  controls: {
    exclude: ["logoImg", "logoMaxWidth", "body"],
  },
};

export const heroSection2 = ({ stacked, margInlineXL, btnColor, btnBgColor, btnTransparent, btnContent, textAlign, textPosition, textClrLight, title, subtitle, args }) => <Banner stacked={stacked} logoMaxWidth="346px" logoImg="https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-homepage-f23-toty-logo-7x2-xl.png.adapt.crop7x2.1920w.png" margInlineXL={margInlineXL} textClrLight={textClrLight} textPosition={textPosition} textAlign={textAlign} bgImageData={hero2} title={title} subtitle={subtitle} btnTransparent={btnTransparent} btnColor={btnColor} btnBgColor={btnBgColor} btnContent={btnContent} {...args} />;
heroSection2.args = {
  stacked: true,
  textClrLight: true,
  title: "SQUADRA DELL'ANNO",
  subtitle: "Di' la tua sui migliori al mondo. Vota e aiutaci a decidere chi farà parte della Squadra dell'anno.",
  textPosition: "left",
  textAlign: "center",
  btnContent: "Vota ora",
  btnTransparent: false,
  btnColor: "rgb(23, 23, 23)",
  btnBgColor: "rgb(242, 242, 242)",
  margInlineXL: "6%"
};
heroSection2.parameters = {
  controls: {
    exclude: ["logoImg", "logoMaxWidth", "body"],
  },
};

export const playSection = ({ stacked, btnColor, btnBgColor, btnTransparent, btnContent, textAlign, textPosition, textClrLight, body, args }) => <Banner stacked={stacked} textClrLight={textClrLight} textPosition={textPosition} textAlign={textAlign} bgImageData={play} logoMaxWidth="240px" logoImg="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play/common/hero-logos/color/ea-play-logo-coral-hero-logo-small.svg" body={body} btnTransparent={btnTransparent} btnColor={btnColor} btnBgColor={btnBgColor} btnContent={btnContent} {...args} />;
playSection.args = {
  stacked: false,
  textClrLight: true,
  body: "Non limitarti al gioco. Gioca al massimo. Sblocca ricompense esclusive, contenuti per i soli membri e una libreria dei migliori titoli.",
  textPosition: "left",
  textAlign: "left",
  btnContent: "Sfoglia offerte",
  btnTransparent: true,
  btnColor: "rgb(242, 242, 242)",
  btnBgColor: "rgba(100, 100, 100, 0)"
};
playSection.parameters = {
  controls: {
    exclude: ["logoImg", "logoMaxWidth", "title", "subtitle", "margInlineXL"],
  },
};
