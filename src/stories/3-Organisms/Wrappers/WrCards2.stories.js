import React from "react";
import WrCards2 from "Components/3-Organisms/Wrappers/WrCards2";
import ComingSoon from "Mock-Data/ComingSoon/ComingSoon";
import { Card3 } from "Components/2-Molecules/Cards/Card3";

const comingSoonCardsData = JSON.parse(ComingSoon);

export default {
  title: "Organisms/Wrappers/Cards Wrapper 2",
  component: WrCards2,
  argTypes: {
    numOfChildren: {
      type: "number",
      defaultValue: 6,
    },
  },
};

const Template = ({ numOfChildren, ...args }) => (
  <WrCards2 {...args}>
    {[
      ...// @ts-ignore
      Array(numOfChildren).keys(),
    ].map((n) => (
      <div style={{ width: "100%", height: "50px", backgroundColor: "lightGrey", borderRadius: "5px" }}></div>
    ))}
  </WrCards2>
);
export const template = Template.bind({});

export const example = (args) => (
  <WrCards2 {...args}>
    {comingSoonCardsData.map((obj, i) => (
      <Card3 key={i} img={obj.img} alt={obj.alt} title={obj.title} releaseDate={obj.releaseDate} platforms={obj.platforms} genre={obj.genre} btnContent={obj.btnContent} />
    ))}
  </WrCards2>
);
example.parameters = {
  controls: {
    exclude: ["numOfChildren"],
  },
};