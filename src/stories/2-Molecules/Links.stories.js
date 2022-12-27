import { Links } from "../../Components/4-Templates/Links";
import React from "react";

export default {
  title: "Molecules/Links",
  component: Links,
};

const Template = (args) => <div style={{textAlign: "center"}}>
  <Links {...args} />
</div>;

export const template = Template.bind({});
