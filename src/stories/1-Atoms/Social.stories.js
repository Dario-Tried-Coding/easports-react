import { Social } from "../../Components/1-Atoms/Social";
import React from "react";

export default {
  title: "Atoms/Social",
  component: Social
};

const Template = (right, args) => <div style={{display: "flex", justifyContent: "center"}}>
  <div style={{border: "5px solid lightGrey", borderRadius: 10, padding: 20}}>
    <Social {...args} />
  </div>
</div>;

export const template = Template.bind({});
template.parameters = {
  controls: {
    exclude: ["className"]
  }
}