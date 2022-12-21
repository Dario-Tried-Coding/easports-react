import { Social } from "../../Components/1-Atoms/Social";
import React from "react";

export default {
  title: "Atoms/Social",
  component: Social,
};

const Template = (args) => <div style={{textAlign: "center"}}>
  <Social {...args} />
</div>;

export const template = Template.bind({});

