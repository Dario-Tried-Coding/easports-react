import SidebarCard from "Components/2-Molecules/Cards/SidebarCard";
import React from "react";

export default {
  title: "Molecules/Cards/SidebarCard",
  component: SidebarCard,
};

const Template = (args) => (
  <div style={{paddingInline: "1%"}}>
    <SidebarCard {...args} />
  </div>
);

export const template = Template.bind({});
template.args = {
  to: "/path",
  bgImg: "https://media.contentapi.ea.com/content/dam/gin/images/2021/04/ea-play-16x9-png.adapt.crop1x1.767w.",
  bgImgAlt: "descriptive legend",
  logoImg: "https://media.contentapi.ea.com/content/dam/gin/images/2021/04/ea-play-mono-logo-svg.svg",
  logoImgAlt: "descriptive legend",
  logoImgWidth: 30,
};
