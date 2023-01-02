import { Banner } from "Components/4-Templates/Banner";
import Hero from "Mock-Data/Home/Hero";
import Play from "Mock-Data/Home/Play";
import React from "react";

const hero = JSON.parse(Hero)
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

export const heroSection = ({ stacked, margInlineXL, btnColor, btnBgColor, btnTransparent, btnContent, textAlign, textPosition, textClrLight, title, subtitle, args }) => <Banner stacked={stacked} margInlineXL={margInlineXL} textClrLight={textClrLight} textPosition={textPosition} textAlign={textAlign} bgImageData={hero} title={title} subtitle={subtitle} btnTransparent={btnTransparent} btnColor={btnColor} btnBgColor={btnBgColor} btnContent={btnContent} {...args} />;
heroSection.args = {
  stacked: true,
  textClrLight: false,
  title: "2022: un anno animato dal gioco",
  subtitle: "Ripercorriamo il modo in cui i giocatori hanno apprezzato i nostri giochi nel 2022",
  textPosition: "left",
  textAlign: "center",
  btnContent: "Sfoglia offerte",
  btnTransparent: false,
  btnColor: "rgb(242, 242, 242)",
  btnBgColor: "rgb(23, 23, 23)",
  margInlineXL: "6%"
};
heroSection.parameters = {
  controls: {
    exclude: ["logoImg", "body"],
  },
};

export const playSection = ({ stacked, btnColor, btnBgColor, btnTransparent, btnContent, textAlign, textPosition, textClrLight, body, args }) => <Banner stacked={stacked} textClrLight={textClrLight} textPosition={textPosition} textAlign={textAlign} bgImageData={play} logoImg="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play/common/hero-logos/color/ea-play-logo-coral-hero-logo-small.svg" body={body} btnTransparent={btnTransparent} btnColor={btnColor} btnBgColor={btnBgColor} btnContent={btnContent} {...args} />;
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
    exclude: ["logoImg", "title", "subtitle", "margInlineXL"],
  },
};
