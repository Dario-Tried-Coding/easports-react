import { Genitori } from "Components/4-Templates/Genitori";
import React from "react";

export default {
  title: "Templates/Genitori",
  component: Genitori,
  argTypes: {
    bgColor: {
      control: {
        type: "color",
        presetColors: ["hsl(202, 56%, 64%)", "hsl(0, 0%, 9%)"]
      }
    },
    btnColor: {
      control: {
        type: "color",
        presetColors: ["hsl(0, 0%, 95%)", "hsl(0, 0%, 9%)"]
      }
    },
    btnBgColor: {
      control: {
        type: "color",
        presetColors: ["hsl(0, 0%, 95%)", "hsl(0, 0%, 9%)"]
      }
    }
  }
};

const Template = args => <Genitori {...args} />

export const template = Template.bind({})
template.args = {
  bgColor: "hsl(202, 56%, 64%)",
  heading: "Default heading",
  btnContent: "Default",
  btnTransparent: true,
  btnColor: "hsl(0, 0%, 9%)",
  btnBgColor: "hsla(0, 0%, 95%, 0)"
}
