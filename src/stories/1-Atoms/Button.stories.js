import { Button } from "../../Components/1-Atoms/Button";
import React from "react";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    to: {
      table: {
        disable: true
      }
    },
    marginsBlock: {
      table: {
        disable: true
      }
    },
    clr: {
      control: {
        type: "color",
        presetColors: ["hsl(0, 0%, 95%)", "hsl(0, 0%, 9%)"]
      }
    },
    bgClr: {
      control: {
        type: "color",
        presetColors: ["hsl(0, 0%, 95%)", "hsl(0, 0%, 9%)", "hsla(0, 0%, 100%, 0)"]
      }
    },
    fullWidth: {
      control: "boolean"
    }
  },
  parameters: {
    colorPicker: {
      primaryPalette: "Primary palette",
      palettes: [
        {
          name: "Primary palette",
          palette: {
            "light": "hsl(0, 0%, 95%)",
            "dark": "hsl(0, 0%, 9%)"
          }
        }
      ],
      applyColorTo: ["clr"]
    }
  }
};

const Template = (args) => <div style={{textAlign: "center"}}>
  <Button {...args} />
</div>;

export const template = Template.bind({});
template.args = {
  fullWidth: false,
  content: "Placeholder text",
  transparent: true,
  clr: "hsl(0, 0%, 9%)",
  bgClr: "hsla(0, 0%, 100%, 0)",
};

export const transparentDark = Template.bind({});
transparentDark.args = {
  fullWidth: false,
  content: "Transparent Dark Button",
  transparent: true,
  clr: "hsl(0, 0%, 9%)",
  bgClr: "hsla(0, 0%, 100%, 0)",
};

export const transparentLight = Template.bind({});
transparentLight.args = {
  fullWidth: false,
  content: "Transparent Light Button",
  transparent: true,
  clr: "hsl(0, 0%, 95%)",
  bgClr: "hsla(0, 0%, 100%, 0)",
};

export const Dark = Template.bind({});
Dark.args = {
  fullWidth: false,
  content: "Dark Button",
  transparent: false,
  clr: "hsl(0, 0%, 95%)",
  bgClr: "hsl(0, 0%, 9%)",
};

export const Light = Template.bind({});
Light.args = {
  fullWidth: false,
  content: "Light Button",
  transparent: false,
  clr: "hsl(0, 0%, 9%)",
  bgClr: "hsl(0, 0%, 95%)",
};