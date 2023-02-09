import React from "react";
import Section1 from "Components/4-Templates/Section1";

export default {
  title: "Templates/Section1",
  component: Section1,
  argTypes: {
    textAlign: {
      control: "inline-radio",
      options: ["left", "center", "right"]
    }
  }
};

export const template = (args) => <Section1 {...args}>
  <div style={{height: 200, width: "80%", backgroundColor: "lightgrey", borderRadius: 10}}></div>
</Section1>;
template.args = {
  bgColor: "hsla(0, 0%, 100%, 0)",
  indentation: 1,
  textAlign: "center",
  paddInline: false,
  title: "Default title",
  subtitle: "Default long subtitle which takes a little bit more of space",
  spacerHeightSmall: 0,
  spacerHeightMedium: 0,
  spacerHeightLarge: 0,
  spacerHeightXlarge: 0,
};
