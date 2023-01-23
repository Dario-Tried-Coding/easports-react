import React from "react";
import { Card3 } from "Components/2-Molecules/Cards/Card3";

export default {
  title: "Molecules/Cards/Card3",
  component: Card3,
  argTypes: {
    releaseDate: { control: "text" }
  },
};

const Template = (args) => <Card3 {...args} />;

export const template = Template.bind({});
template.args = {
  img: ["https://via.placeholder.com/320x180", "https://via.placeholder.com/767x432", "https://via.placeholder.com/1023x576", "https://via.placeholder.com/1455x819"],
  alt: "descriptive legend",
  title: "Card title",
  releaseDate: "DD/MM/YYYY",
  platforms: [["Platform 1", "/"], ["Platform 2", "/"], ["Platform 3", "/"]],
  genre: [["Genre 1", "/"], ["Genre 2", "/"]],
  btnContent: "CTA text",
};
template.parameters = {
  controls: {
    exclude: ["to"],
  },
};
